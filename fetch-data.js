const fs = require('fs');

const DEFAULT_PUBLIC_SOURCE = "https://worldcupapi.com/";

async function fetchAllData() {
  const baseUrl = cleanBaseUrl(process.env.WORLD_CUP_API_BASE_URL || process.env.FIFA_LIVE_SOURCE_URL);
  const apiKey = process.env.WORLD_CUP_API_KEY || process.env.FIFA_LIVE_TOKEN;

  if (!baseUrl || !apiKey) {
    console.log("No API credentials found. Writing fallback data.");
    fs.writeFileSync('data.json', JSON.stringify(emptyFeed([
      "World Cup API is not configured yet.",
      "Please set WORLD_CUP_API_BASE_URL and WORLD_CUP_API_KEY in GitHub Secrets."
    ]), null, 2));
    return;
  }

  try {
    const lang = "en"; 
    const [liveScores, fixtures, goalscorers, cards] = await Promise.all([
      fetchEndpoint(baseUrl, "/livescores", apiKey, { lang }),
      fetchEndpoint(baseUrl, "/fixtures", apiKey, { lang }),
      fetchEndpoint(baseUrl, "/goalscorers", apiKey, { lang }),
      fetchEndpoint(baseUrl, "/cards", apiKey, { lang })
    ]);

    const finalData = {
      source: "World Cup API",
      sourceUrl: baseUrl,
      updatedAt: new Date().toISOString(),
      matches: mergeMatches(dataArray(fixtures), dataArray(liveScores)),
      awards: {
        goldenBoot: normalizePlayers(dataArray(goalscorers), "goals"),
        assists: normalizePlayers(dataArray(goalscorers), "assists"),
        manOfTheMatch: []
      },
      notes: buildNotes(liveScores, fixtures, goalscorers, cards)
    };

    fs.writeFileSync('data.json', JSON.stringify(finalData, null, 2));
    console.log("Successfully updated data.json");

  } catch (error) {
    console.error("Fetch failed:", error.message);
    fs.writeFileSync('data.json', JSON.stringify(emptyFeed([
      "World Cup API could not be loaded.",
      error.message
    ]), null, 2));
  }
}

// --- HELPER FUNCTIONS ---
async function fetchEndpoint(baseUrl, endpoint, apiKey, params = {}) {
  const url = new URL(`${baseUrl}${endpoint}`);
  url.searchParams.set("key", apiKey);
  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });
  const result = await fetch(url, { headers: { Accept: "application/json" } });
  if (!result.ok) throw new Error(`${endpoint} returned HTTP ${result.status}`);
  const body = await result.json();
  if (body && body.success === false) throw new Error(body.error || `${endpoint} returned an API error`);
  return body;
}

function cleanBaseUrl(value) { return value ? value.replace(/\/+$/, "") : ""; }

function emptyFeed(notes = []) {
  return {
    source: "World Cup API", sourceUrl: DEFAULT_PUBLIC_SOURCE, updatedAt: new Date().toISOString(),
    matches: [], awards: { goldenBoot: [], assists: [], manOfTheMatch: [] }, notes
  };
}

function dataArray(payload) {
  const data = payload?.data ?? payload;
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.matches)) return data.matches;
  if (Array.isArray(data?.fixtures)) return data.fixtures;
  if (Array.isArray(data?.livescores)) return data.livescores;
  if (Array.isArray(data?.goalscorers)) return data.goalscorers;
  if (Array.isArray(data?.players)) return data.players;
  if (Array.isArray(data?.cards)) return data.cards;
  return [];
}

function mergeMatches(fixtures, liveScores) {
  const byId = new Map();
  fixtures.forEach((match, index) => {
    const normalized = normalizeMatch(match, index);
    if (normalized.home && normalized.away) byId.set(normalized.id, normalized);
  });
  liveScores.forEach((match, index) => {
    const normalized = normalizeMatch(match, index);
    const previous = byId.get(normalized.id) || {};
    byId.set(normalized.id, { ...previous, ...normalized });
  });
  return [...byId.values()].sort((a, b) => new Date(a.utc || 0).getTime() - new Date(b.utc || 0).getTime() || Number(a.number || 0) - Number(b.number || 0));
}

function normalizeMatch(match, index) {
  const home = match.home || match.homeTeam || match.team1 || match.localteam;
  const away = match.away || match.awayTeam || match.team2 || match.visitorteam;
  const id = match.id || match.match_id || match.fixture_id || match.number || `match-${index + 1}`;
  return {
    id: String(id), number: match.number || index + 1, group: match.group || "",
    home: teamName(home), away: teamName(away),
    homeScore: scoreValue(match.homeScore ?? match.home_score ?? match.score_home ?? home?.score),
    awayScore: scoreValue(match.awayScore ?? match.away_score ?? match.score_away ?? away?.score),
    status: match.status || match.match_status || "Scheduled",
    utc: match.utc || match.date || match.kickoff || null
  };
}

function normalizePlayers(players, metric) {
  return players.map((player) => ({
    name: player.name || player.player_name || "-",
    team: teamName(player.team || player.team_name || player.country),
    goals: scoreValue(player.goals ?? player.goal_count),
    assists: scoreValue(player.assists ?? player.assist_count),
    motm: scoreValue(player.motm ?? player.man_of_the_match),
    [metric]: scoreValue(player[metric] ?? player[metric === "goals" ? "Goals" : "Assists"])
  })).filter(p => p.name && Number(p[metric] || 0) > 0).sort((a, b) => Number(b[metric] || 0) - Number(a[metric] || 0) || a.name.localeCompare(b.name));
}

function buildNotes(liveScores, fixtures, goalscorers, cards) {
  return [
    `Live scores response: ${dataArray(liveScores).length} records.`,
    `Fixtures response: ${dataArray(fixtures).length} records.`,
    `Goalscorers response: ${dataArray(goalscorers).length} records.`,
    "Automated via GitHub Actions."
  ];
}

function teamName(team) { return team && typeof team === "object" ? team.name || team.team_name : team || ""; }
function scoreValue(value) { const num = Number(value); return Number.isFinite(num) ? num : null; }

fetchAllData();