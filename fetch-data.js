const fs = require('fs');

// This is the EXACT URL from the reference project's fetch-scores.yml
const REFERENCE_API_URL = "https://fancy-block-fde3.aking116.workers.dev/competitions/WC/matches?season=2026";

async function fetchReferenceData() {
  console.log("Fetching live data from reference project source...");

  try {
    const response = await fetch(REFERENCE_API_URL);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    
    const rawData = await response.json();

    // Map the reference API data to match your frontend's layout
    const formattedMatches = rawData.matches.map((match, index) => {
      // Convert API status to frontend status
      let matchStatus = "Scheduled";
      if (match.status === "IN_PLAY" || match.status === "PAUSED") matchStatus = "Live";
      if (match.status === "FINISHED") matchStatus = "Finished";

      // The API names South Korea "Korea Republic" and USA "United States", so we map them to match your flags
      let homeName = match.homeTeam.name;
      let awayName = match.awayTeam.name;
      if (homeName === "Korea Republic") homeName = "South Korea";
      if (awayName === "Korea Republic") awayName = "South Korea";
      if (homeName === "United States") homeName = "USA";
      if (awayName === "United States") awayName = "USA";

      return {
        id: `m${String(index + 1).padStart(2, "0")}`,
        number: index + 1,
        group: match.group ? match.group.replace("GROUP_", "") : "",
        home: homeName,
        away: awayName,
        homeScore: match.score?.fullTime?.home ?? null,
        awayScore: match.score?.fullTime?.away ?? null,
        status: matchStatus,
        utc: match.utcDate
      };
    });

    const feed = {
      connected: true,
      source: "Official Data (via Reference Worker)",
      sourceUrl: "https://www.football-data.org/",
      updatedAt: new Date().toISOString(),
      matches: formattedMatches,
      awards: { goldenBoot: [], assists: [], manOfTheMatch: [] },
      notes: ["Automated feed active. Updating every 5 minutes."]
    };

    // Save it to data.json
    fs.writeFileSync('data.json', JSON.stringify(feed, null, 2));
    console.log("Successfully wrote new data to data.json");

  } catch (error) {
    console.error("Error fetching data:", error.message);
    
    // Fallback if the reference worker goes offline
    const fallbackFeed = {
      connected: false,
      source: "Offline",
      sourceUrl: "#",
      updatedAt: new Date().toISOString(),
      matches: [],
      awards: { goldenBoot: [], assists: [], manOfTheMatch: [] },
      notes: ["Reference feed is currently unavailable."]
    };
    fs.writeFileSync('data.json', JSON.stringify(fallbackFeed, null, 2));
  }
}

fetchReferenceData();