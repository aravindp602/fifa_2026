const GROUPS = {
  A: ["Mexico", "South Africa", "South Korea", "Czechia"],
  B: ["Canada", "Switzerland", "Qatar", "Bosnia"],
  C: ["Brazil", "Morocco", "Scotland", "Haiti"],
  D: ["USA", "Australia", "Paraguay", "Turkiye"],
  E: ["Germany", "Ivory Coast", "Ecuador", "Curacao"],
  F: ["Netherlands", "Japan", "Tunisia", "Sweden"],
  G: ["Belgium", "Iran", "Egypt", "New Zealand"],
  H: ["Spain", "Uruguay", "Saudi Arabia", "Cape Verde"],
  I: ["France", "Senegal", "Norway", "Iraq"],
  J: ["Argentina", "Algeria", "Austria", "Jordan"],
  K: ["Portugal", "Colombia", "Uzbekistan", "Congo DR"],
  L: ["England", "Croatia", "Ghana", "Panama"]
};

const FLAGS = {
  Algeria: "dz", Argentina: "ar", Australia: "au", Austria: "at", Belgium: "be", Bosnia: "ba",
  Brazil: "br", Canada: "ca", "Cape Verde": "cv", Colombia: "co", "Congo DR": "cd", Croatia: "hr",
  Curacao: "cw", Czechia: "cz", Ecuador: "ec", Egypt: "eg", England: "gb-eng", France: "fr",
  Germany: "de", Ghana: "gh", Haiti: "ht", Iran: "ir", Iraq: "iq", "Ivory Coast": "ci",
  Japan: "jp", Jordan: "jo", Mexico: "mx", Morocco: "ma", Netherlands: "nl", "New Zealand": "nz",
  Norway: "no", Panama: "pa", Paraguay: "py", Portugal: "pt", Qatar: "qa", "Saudi Arabia": "sa",
  Scotland: "gb-sct", Senegal: "sn", "South Africa": "za", "South Korea": "kr", Spain: "es",
  Sweden: "se", Switzerland: "ch", Tunisia: "tn", Turkiye: "tr", Uruguay: "uy", USA: "us", Uzbekistan: "uz"
};

const FIXTURES = [
  ["Mexico", "South Africa", "2026-06-11T19:00:00Z", "Mexico City", "Estadio Azteca"],
  ["South Korea", "Czechia", "2026-06-12T02:00:00Z", "Guadalajara", "Estadio Akron"],
  ["Canada", "Bosnia", "2026-06-12T19:00:00Z", "Toronto", "BMO Field"],
  ["Qatar", "Switzerland", "2026-06-13T19:00:00Z", "San Francisco Bay Area", "Levi's Stadium"],
  ["USA", "Paraguay", "2026-06-13T01:00:00Z", "Los Angeles", "SoFi Stadium"],
  ["Brazil", "Morocco", "2026-06-13T22:00:00Z", "New York New Jersey", "MetLife Stadium"],
  ["Haiti", "Scotland", "2026-06-14T01:00:00Z", "Boston", "Gillette Stadium"],
  ["Australia", "Turkiye", "2026-06-14T04:00:00Z", "Vancouver", "BC Place"],
  ["Germany", "Curacao", "2026-06-14T17:00:00Z", "Houston", "NRG Stadium"],
  ["Netherlands", "Japan", "2026-06-14T20:00:00Z", "Dallas", "AT&T Stadium"],
  ["Ivory Coast", "Ecuador", "2026-06-14T23:00:00Z", "Philadelphia", "Lincoln Financial Field"],
  ["Sweden", "Tunisia", "2026-06-15T02:00:00Z", "Monterrey", "Estadio BBVA"],
  ["Spain", "Cape Verde", "2026-06-15T16:00:00Z", "Atlanta", "Mercedes-Benz Stadium"],
  ["Belgium", "Egypt", "2026-06-15T19:00:00Z", "Seattle", "Lumen Field"],
  ["Saudi Arabia", "Uruguay", "2026-06-15T22:00:00Z", "Miami", "Hard Rock Stadium"],
  ["Iran", "New Zealand", "2026-06-16T01:00:00Z", "Los Angeles", "SoFi Stadium"],
  ["France", "Senegal", "2026-06-16T19:00:00Z", "New York New Jersey", "MetLife Stadium"],
  ["Iraq", "Norway", "2026-06-16T22:00:00Z", "Boston", "Gillette Stadium"],
  ["Argentina", "Algeria", "2026-06-17T01:00:00Z", "Kansas City", "Arrowhead Stadium"],
  ["Austria", "Jordan", "2026-06-17T04:00:00Z", "San Francisco Bay Area", "Levi's Stadium"],
  ["Portugal", "Congo DR", "2026-06-17T17:00:00Z", "Houston", "NRG Stadium"],
  ["England", "Croatia", "2026-06-17T20:00:00Z", "Dallas", "AT&T Stadium"],
  ["Ghana", "Panama", "2026-06-17T23:00:00Z", "Toronto", "BMO Field"],
  ["Uzbekistan", "Colombia", "2026-06-18T02:00:00Z", "Mexico City", "Estadio Azteca"],
  ["Czechia", "South Africa", "2026-06-18T16:00:00Z", "Atlanta", "Mercedes-Benz Stadium"],
  ["Switzerland", "Bosnia", "2026-06-18T19:00:00Z", "Los Angeles", "SoFi Stadium"],
  ["Canada", "Qatar", "2026-06-18T22:00:00Z", "Vancouver", "BC Place"],
  ["Mexico", "South Korea", "2026-06-19T01:00:00Z", "Guadalajara", "Estadio Akron"],
  ["USA", "Australia", "2026-06-19T19:00:00Z", "Seattle", "Lumen Field"],
  ["Scotland", "Morocco", "2026-06-19T22:00:00Z", "Boston", "Gillette Stadium"],
  ["Brazil", "Haiti", "2026-06-20T00:30:00Z", "Philadelphia", "Lincoln Financial Field"],
  ["Turkiye", "Paraguay", "2026-06-20T03:00:00Z", "San Francisco Bay Area", "Levi's Stadium"],
  ["Netherlands", "Sweden", "2026-06-20T17:00:00Z", "Houston", "NRG Stadium"],
  ["Germany", "Ivory Coast", "2026-06-20T20:00:00Z", "Toronto", "BMO Field"],
  ["Ecuador", "Curacao", "2026-06-21T00:00:00Z", "Kansas City", "Arrowhead Stadium"],
  ["Tunisia", "Japan", "2026-06-21T04:00:00Z", "Monterrey", "Estadio BBVA"],
  ["Spain", "Saudi Arabia", "2026-06-21T16:00:00Z", "Atlanta", "Mercedes-Benz Stadium"],
  ["Belgium", "Iran", "2026-06-21T19:00:00Z", "Los Angeles", "SoFi Stadium"],
  ["Uruguay", "Cape Verde", "2026-06-21T22:00:00Z", "Miami", "Hard Rock Stadium"],
  ["New Zealand", "Egypt", "2026-06-22T01:00:00Z", "Vancouver", "BC Place"],
  ["Argentina", "Austria", "2026-06-22T17:00:00Z", "Dallas", "AT&T Stadium"],
  ["France", "Iraq", "2026-06-22T21:00:00Z", "Philadelphia", "Lincoln Financial Field"],
  ["Norway", "Senegal", "2026-06-23T00:00:00Z", "New York New Jersey", "MetLife Stadium"],
  ["Jordan", "Algeria", "2026-06-23T03:00:00Z", "San Francisco Bay Area", "Levi's Stadium"],
  ["Portugal", "Uzbekistan", "2026-06-23T17:00:00Z", "Houston", "NRG Stadium"],
  ["England", "Ghana", "2026-06-23T20:00:00Z", "Boston", "Gillette Stadium"],
  ["Panama", "Croatia", "2026-06-23T23:00:00Z", "Toronto", "BMO Field"],
  ["Colombia", "Congo DR", "2026-06-24T02:00:00Z", "Guadalajara", "Estadio Akron"],
  ["Switzerland", "Canada", "2026-06-24T19:00:00Z", "Vancouver", "BC Place"],
  ["Bosnia", "Qatar", "2026-06-24T19:00:00Z", "Seattle", "Lumen Field"],
  ["Morocco", "Haiti", "2026-06-24T22:00:00Z", "Atlanta", "Mercedes-Benz Stadium"],
  ["Scotland", "Brazil", "2026-06-24T22:00:00Z", "Miami", "Hard Rock Stadium"],
  ["Czechia", "Mexico", "2026-06-25T01:00:00Z", "Mexico City", "Estadio Azteca"],
  ["South Africa", "South Korea", "2026-06-25T01:00:00Z", "Monterrey", "Estadio BBVA"],
  ["Ecuador", "Germany", "2026-06-25T20:00:00Z", "New York New Jersey", "MetLife Stadium"],
  ["Curacao", "Ivory Coast", "2026-06-25T20:00:00Z", "Philadelphia", "Lincoln Financial Field"],
  ["Tunisia", "Netherlands", "2026-06-25T23:00:00Z", "Kansas City", "Arrowhead Stadium"],
  ["Japan", "Sweden", "2026-06-25T23:00:00Z", "Dallas", "AT&T Stadium"],
  ["Turkiye", "USA", "2026-06-26T02:00:00Z", "Los Angeles", "SoFi Stadium"],
  ["Paraguay", "Australia", "2026-06-26T02:00:00Z", "San Francisco Bay Area", "Levi's Stadium"],
  ["Norway", "France", "2026-06-26T19:00:00Z", "Boston", "Gillette Stadium"],
  ["Senegal", "Iraq", "2026-06-26T19:00:00Z", "Toronto", "BMO Field"],
  ["Uruguay", "Spain", "2026-06-27T00:00:00Z", "Guadalajara", "Estadio Akron"],
  ["Cape Verde", "Saudi Arabia", "2026-06-27T00:00:00Z", "Houston", "NRG Stadium"],
  ["New Zealand", "Belgium", "2026-06-27T03:00:00Z", "Vancouver", "BC Place"],
  ["Egypt", "Iran", "2026-06-27T03:00:00Z", "Seattle", "Lumen Field"],
  ["Panama", "England", "2026-06-27T21:00:00Z", "New York New Jersey", "MetLife Stadium"],
  ["Croatia", "Ghana", "2026-06-27T21:00:00Z", "Philadelphia", "Lincoln Financial Field"],
  ["Colombia", "Portugal", "2026-06-27T23:30:00Z", "Miami", "Hard Rock Stadium"],
  ["Congo DR", "Uzbekistan", "2026-06-27T23:30:00Z", "Atlanta", "Mercedes-Benz Stadium"],
  ["Jordan", "Argentina", "2026-06-28T02:00:00Z", "Dallas", "AT&T Stadium"],
  ["Algeria", "Austria", "2026-06-28T02:00:00Z", "Kansas City", "Arrowhead Stadium"]
];

const STADIUMS = [
  ["Atlanta", "Mercedes-Benz Stadium", "USA", "75,000"],
  ["Boston", "Gillette Stadium", "USA", "65,878"],
  ["Dallas", "AT&T Stadium", "USA", "80,000"],
  ["Guadalajara", "Estadio Akron", "Mexico", "48,071"],
  ["Houston", "NRG Stadium", "USA", "72,220"],
  ["Kansas City", "Arrowhead Stadium", "USA", "76,416"],
  ["Los Angeles", "SoFi Stadium", "USA", "70,240"],
  ["Mexico City", "Estadio Azteca", "Mexico", "83,264"],
  ["Miami", "Hard Rock Stadium", "USA", "65,326"],
  ["Monterrey", "Estadio BBVA", "Mexico", "53,500"],
  ["New York New Jersey", "MetLife Stadium", "USA", "82,500"],
  ["Philadelphia", "Lincoln Financial Field", "USA", "69,176"],
  ["San Francisco Bay Area", "Levi's Stadium", "USA", "68,500"],
  ["Seattle", "Lumen Field", "USA", "68,740"],
  ["Toronto", "BMO Field", "Canada", "45,000"],
  ["Vancouver", "BC Place", "Canada", "54,500"]
];

const TRANSLATIONS = {
  en: {
    navHome: "Home", navSchedule: "Schedule", navLive: "Live", navStadiums: "Stadiums",
    heroEyebrow: "FIFA World Cup 2026", heroTitle: "Every kick-off, in your local time.",
    heroText: "A fast, offline-ready hub for fixtures, local kick-off times, live scores, official standings, and tournament statistics.",
    viewSchedule: "View schedule", openLive: "Live Center", openingMatch: "Opening match",
    days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    teams: "Teams", groups: "Groups", groupMatches: "Matches", hostCities: "Host cities",
    scheduleEyebrow: "Fixture planner", scheduleTitle: "Tournament Schedule", timezone: "Timezone", timeFormat: "Time format", time12: "12-hour", time24: "24-hour", filterGroup: "Group",
    qualificationRule: "The eight best third-place teams advance to the Round of 32.",
    thirdPlaceTitle: "Best third-place race", rank: "Rank", team: "Team", group: "Group",
    awardsEyebrow: "Official live center", awardsTitle: "Scores & Standings", refreshNow: "Refresh",
    connecting: "Connecting to live feed", liveMatch: "Live match", currentScores: "Current scores", matchResults: "Match results",
    status: "Status", officialNotes: "Live feed notes", feedReady: "Feed connected", feedFallback: "Feed not connected",
    goldenBoot: "Golden Boot", topScorer: "Top scorer", playmaker: "Playmaker", topAssists: "Top assists", motmRace: "Man of the Match", mostMotm: "Most awards",
    stadiumsEyebrow: "Host cities", stadiumsTitle: "Stadium guide", footerNote: "Static CI/CD PWA. No ads, no backend servers.",
    allGroups: "All groups", match: "Match", local: "local", capacity: "Capacity", online: "Online", offline: "Offline ready",
    matchCenter: "Match Center", standings: "Standings", squads: "Squads", standingsNote: "These tables update automatically based on official match results.", squadsNote: "Official 26-man tournament rosters.",
    clickMatchDetails: "Click a match to view details", startingXi: "Starting XI", subs: "Substitutes"
  },
  es: {
    navHome: "Inicio", navSchedule: "Calendario", navLive: "Vivo", navStadiums: "Sedes",
    heroEyebrow: "Copa Mundial 2026", heroTitle: "Cada partido, en tu horario.",
    heroText: "Un hub offline para calendario, horarios locales, marcadores en vivo, posiciones oficiales y estadisticas.",
    viewSchedule: "Ver calendario", openLive: "Centro en Vivo", openingMatch: "Partido inaugural",
    days: "Dias", hours: "Horas", minutes: "Minutos", seconds: "Segundos",
    teams: "Equipos", groups: "Grupos", groupMatches: "Partidos", hostCities: "Ciudades sede",
    scheduleEyebrow: "Planificador", scheduleTitle: "Calendario del Torneo", timezone: "Zona horaria", timeFormat: "Formato", time12: "12 horas", time24: "24 horas", filterGroup: "Grupo",
    qualificationRule: "Avanzan los ocho mejores terceros a los Dieciseisavos de final.",
    thirdPlaceTitle: "Mejores terceros", rank: "Pos.", team: "Equipo", group: "Grupo",
    awardsEyebrow: "Centro oficial en vivo", awardsTitle: "Marcadores y Posiciones", refreshNow: "Actualizar",
    connecting: "Conectando al feed", liveMatch: "Partido en vivo", currentScores: "Marcadores actuales", matchResults: "Resultados",
    status: "Estado", officialNotes: "Notas del feed", feedReady: "Feed conectado", feedFallback: "Feed no conectado",
    goldenBoot: "Bota de Oro", topScorer: "Maximo goleador", playmaker: "Creador", topAssists: "Mas asistencias", motmRace: "Jugador del partido", mostMotm: "Mas premios",
    stadiumsEyebrow: "Ciudades sede", stadiumsTitle: "Guia de estadios", footerNote: "PWA vanilla estatica.",
    allGroups: "Todos", match: "Partido", local: "local", capacity: "Capacidad", online: "Online", offline: "Lista offline",
    matchCenter: "Partidos", standings: "Posiciones", squads: "Plantillas", standingsNote: "Estas tablas se actualizan automaticamente basadas en resultados oficiales.", squadsNote: "Plantillas oficiales de 26 jugadores.",
    clickMatchDetails: "Haz clic para ver detalles", startingXi: "Titulares", subs: "Suplentes"
  },
  fr: {
    navHome: "Accueil", navSchedule: "Calendrier", navLive: "Direct", navStadiums: "Stades",
    heroEyebrow: "Coupe du Monde 2026", heroTitle: "Chaque match, a votre heure.",
    heroText: "Un hub hors ligne pour les affiches, horaires locaux, scores en direct, classements officiels et statistiques.",
    viewSchedule: "Voir calendrier", openLive: "Centre en Direct", openingMatch: "Match d'ouverture",
    days: "Jours", hours: "Heures", minutes: "Minutes", seconds: "Secondes",
    teams: "Equipes", groups: "Groupes", groupMatches: "Matchs", hostCities: "Villes hotes",
    scheduleEyebrow: "Planificateur", scheduleTitle: "Calendrier du Tournoi", timezone: "Fuseau horaire", timeFormat: "Format", time12: "12 heures", time24: "24 heures", filterGroup: "Groupe",
    qualificationRule: "Les huit meilleurs troisiemes avancent en Seizièmes de finale.",
    thirdPlaceTitle: "Meilleurs troisiemes", rank: "Rang", team: "Equipe", group: "Groupe",
    awardsEyebrow: "Centre en direct", awardsTitle: "Scores et Classements", refreshNow: "Actualiser",
    connecting: "Connexion au flux", liveMatch: "Match en direct", currentScores: "Scores actuels", matchResults: "Resultats",
    status: "Statut", officialNotes: "Notes du flux", feedReady: "Flux connecte", feedFallback: "Flux non connecte",
    goldenBoot: "Soulier d'or", topScorer: "Meilleur buteur", playmaker: "Passeur", topAssists: "Meilleures passes", motmRace: "Homme du match", mostMotm: "Plus de prix",
    stadiumsEyebrow: "Villes hotes", stadiumsTitle: "Guide des stades", footerNote: "PWA vanilla statique.",
    allGroups: "Tous", match: "Match", local: "local", capacity: "Capacite", online: "En ligne", offline: "Pret hors ligne",
    matchCenter: "Matchs", standings: "Classements", squads: "Effectifs", standingsNote: "Ces classements sont mis a jour automatiquement selon les resultats officiels.", squadsNote: "Effectifs officiels de 26 joueurs.",
    clickMatchDetails: "Cliquez pour voir les details", startingXi: "Titulaires", subs: "Remplaçants"
  }
};

const FALLBACK_TIMEZONES = ["America/Los_Angeles", "America/New_York", "Europe/London", "Europe/Paris", "Asia/Tokyo", "Australia/Sydney", "UTC"];
const TIMEZONES = typeof Intl.supportedValuesOf === "function" ? Intl.supportedValuesOf("timeZone") : FALLBACK_TIMEZONES;
const LOCALE_BY_LANG = { en: "en-US", es: "es-ES", fr: "fr-FR" };

const teamGroup = new Map(Object.entries(GROUPS).flatMap(([group, teams]) => teams.map(team => [team, group])));
const fixtures = FIXTURES.map(([home, away, utc, city, stadium], index) => ({
  id: `m${String(index + 1).padStart(2, "0")}`,
  number: index + 1, home, away, utc, city, stadium, group: teamGroup.get(home)
})).sort((a, b) => new Date(a.utc) - new Date(b.utc));

let lang = localStorage.getItem("wc26-lang") || "en";
let timezone = localStorage.getItem("wc26-timezone") || Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York";
let timeFormat = localStorage.getItem("wc26-time-format") || "12";
let liveFeed = null;

// Define elements carefully
const els = {};

function initEls() {
  els.language = document.getElementById("languageSelect");
  els.timezone = document.getElementById("timezoneSelect");
  els.timeFormat = document.getElementById("timeFormatSelect");
  els.groupFilter = document.getElementById("groupFilter");
  els.scheduleList = document.getElementById("scheduleList");
  els.thirdPlaceBody = document.getElementById("thirdPlaceBody");
  els.offlineStatus = document.getElementById("offlineStatus");
  els.liveFeedStatus = document.getElementById("liveFeedStatus");
  els.liveLastUpdated = document.getElementById("liveLastUpdated");
  els.liveScoreRail = document.getElementById("liveScoreRail");
  els.liveMatchTableBody = document.getElementById("liveMatchTableBody");
  els.officialNotes = document.getElementById("officialNotes");
  els.goldenBootLeader = document.getElementById("goldenBootLeader");
  els.assistLeader = document.getElementById("assistLeader");
  els.motmLeader = document.getElementById("motmLeader");
}

function t(key) { return TRANSLATIONS[lang][key] || TRANSLATIONS.en[key] || key; }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char])); }
function flag(team) { return FLAGS[team] ? `<img class="flag" src="https://flagcdn.com/w40/${FLAGS[team]}.png" alt="" loading="lazy">` : `<span class="flag"></span>`; }

function buildControls() {
  if(els.language) els.language.value = lang;
  if(els.timeFormat) els.timeFormat.value = timeFormat;
  const zones = Array.from(new Set(["UTC", ...TIMEZONES, timezone])).sort();
  if(els.timezone) els.timezone.innerHTML = zones.map(z => `<option value="${z}" ${z === timezone ? "selected" : ""}>${escapeHtml(z.replaceAll("_", " "))}</option>`).join("");
  if(els.groupFilter) els.groupFilter.innerHTML = `<option value="all">${t("allGroups")}</option>` + Object.keys(GROUPS).map(g => `<option value="${g}">Group ${g}</option>`).join("");
}

function applyTranslations() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(node => node.textContent = t(node.dataset.i18n));
  renderSchedule();
  renderStadiums();
  renderAwards();
  renderStandings();
  renderSquads();
}

function setView(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("is-active", v.id === viewId));
  document.querySelectorAll(".nav-button").forEach(b => b.classList.toggle("is-active", b.dataset.view === viewId));
  history.replaceState(null, "", `#${viewId}`);
}

function formatFixtureDate(utc) {
  const d = new Date(utc);
  return {
    day: new Intl.DateTimeFormat(LOCALE_BY_LANG[lang], { month: "short", day: "numeric", timeZone: timezone }).format(d),
    time: new Intl.DateTimeFormat(LOCALE_BY_LANG[lang], { hour: "2-digit", minute: "2-digit", hour12: timeFormat === "12", timeZone: timezone }).format(d)
  };
}

function renderSchedule() {
  if(!els.scheduleList || !els.groupFilter) return;
  const vis = els.groupFilter.value === "all" ? fixtures : fixtures.filter(m => m.group === els.groupFilter.value);
  els.scheduleList.innerHTML = vis.map(m => {
    const d = formatFixtureDate(m.utc);
    return `
      <article class="match-card">
        <div class="match-date"><b>${d.day}</b><span class="match-meta">${d.time} ${t("local")}</span><span class="match-meta">${t("match")} ${m.number} • Group ${m.group}</span></div>
        <div class="match-teams"><span class="team-side"><span class="team-name">${escapeHtml(m.home)}</span>${flag(m.home)}</span><span class="versus">VS</span><span class="team-side">${flag(m.away)}<span class="team-name">${escapeHtml(m.away)}</span></span></div>
        <div class="venue-pill">${escapeHtml(m.city)}<br><span class="match-meta">${escapeHtml(m.stadium)}</span></div>
      </article>`;
  }).join("");
}

// ==========================================
// Static JSON Polling (GitHub Actions Method)
// ==========================================
async function fetchLiveFeed() {
  if(els.liveFeedStatus) els.liveFeedStatus.textContent = t("connecting");
  try {
    const res = await fetch(`data.json?t=${Date.now()}`);
    if (!res.ok) throw new Error("Local data.json not found");
    liveFeed = normalizeLiveFeed(await res.json(), true);
    if(els.liveFeedStatus) els.liveFeedStatus.textContent = t("feedReady");
  } catch (err) {
    liveFeed = normalizeLiveFeed(emptyLiveFeed(), false);
    if(els.liveFeedStatus) els.liveFeedStatus.textContent = t("feedFallback");
    console.warn("Live feed unavailable, CI/CD data.json likely missing", err);
  }
  renderAwards();
  renderStandings();
  renderSquads();
}

function emptyLiveFeed() {
  return {
    source: "local-fallback", sourceUrl: "https://www.football-data.org/", updatedAt: new Date().toISOString(),
    matches: fixtures.map(m => ({ id: m.id, number: m.number, group: m.group, home: m.home, away: m.away, homeScore: null, awayScore: null, status: "Scheduled", utc: m.utc })),
    awards: { goldenBoot: [], assists: [], manOfTheMatch: [] }, notes: ["Please set up fetch-scores.yml in GitHub Actions."]
  };
}

function normalizeLiveFeed(feed, connected) {
  return {
    connected, source: feed.source || "FIFA", sourceUrl: feed.sourceUrl || "https://www.football-data.org/",
    updatedAt: feed.updatedAt || new Date().toISOString(), matches: Array.isArray(feed.matches) ? feed.matches : [],
    awards: {
      goldenBoot: Array.isArray(feed.awards?.goldenBoot) ? feed.awards.goldenBoot : [],
      assists: Array.isArray(feed.awards?.assists) ? feed.awards.assists : [],
      manOfTheMatch: Array.isArray(feed.awards?.manOfTheMatch) ? feed.awards.manOfTheMatch : []
    },
    notes: Array.isArray(feed.notes) ? feed.notes : []
  };
}

function leaderMarkup(p, metric, label) {
  if (!p) return `<p class="empty-state">${t("feedFallback")}</p>`;
  return `
    <div class="leader-name">${escapeHtml(p.name || "-")}</div>
    <div class="leader-team">${p.team ? flag(p.team) : ""}${escapeHtml(p.team || "")}</div>
    <strong>${p[metric] ?? 0}</strong>
    <span>${escapeHtml(label)}</span>
  `;
}

function renderAwards() {
  const feed = liveFeed || emptyLiveFeed();
  const updated = new Date(feed.updatedAt);
  if(els.liveLastUpdated) els.liveLastUpdated.textContent = isNaN(updated.getTime()) ? "--" : updated.toLocaleString(LOCALE_BY_LANG[lang]);
  
  if(els.goldenBootLeader) els.goldenBootLeader.innerHTML = leaderMarkup(feed.awards.goldenBoot[0], "goals", t("goals"));
  if(els.assistLeader) els.assistLeader.innerHTML = leaderMarkup(feed.awards.assists[0], "assists", t("assists"));
  if(els.motmLeader) els.motmLeader.innerHTML = leaderMarkup(feed.awards.manOfTheMatch[0], "motm", t("motm"));
  
  renderLiveScores(feed.matches);
  renderOfficialNotes(feed);
}

function renderLiveScores(liveMatches) {
  const sorted = [...liveMatches].sort((a, b) => new Date(a.utc || 0) - new Date(b.utc || 0));
  const active = sorted.filter(m => /live|half|progress|playing|in_play/i.test(m.status || ""));
  const railMatches = active.length ? active : sorted.slice(0, 4);
  
  if (els.liveScoreRail) {
    els.liveScoreRail.innerHTML = railMatches.map(m => {
      const isLive = /live|half|progress|playing|in_play/i.test(m.status || "");
      return `
      <article class="live-score-card-refined ${isLive ? 'is-live' : ''}" onclick="openMatchModal('${m.id}')">
        <div class="live-match-meta">
          <span>${t("match")} ${m.number || ""} • Grp ${escapeHtml(m.group || "")}</span>
          <span style="color: ${isLive ? 'var(--green)' : 'var(--muted)'}">${escapeHtml(m.status || "Scheduled")}</span>
        </div>
        <div class="live-match-teams">
          <div class="live-team-row">
            <div class="live-team-info">${flag(m.home)}${escapeHtml(m.home)}</div>
            <div class="live-score">${formatScore(m.homeScore)}</div>
          </div>
          <div class="live-team-row">
            <div class="live-team-info">${flag(m.away)}${escapeHtml(m.away)}</div>
            <div class="live-score">${formatScore(m.awayScore)}</div>
          </div>
        </div>
      </article>`;
    }).join("");
  }

  if (els.liveMatchTableBody) {
    els.liveMatchTableBody.innerHTML = sorted.map(m => `
      <tr>
        <td>${m.number || ""}</td>
        <td><span class="standings-team">${flag(m.home)}${escapeHtml(m.home)}</span></td>
        <td><b style="font-size:1.1rem; color:var(--gold);">${formatScore(m.homeScore)} - ${formatScore(m.awayScore)}</b></td>
        <td><span class="standings-team">${flag(m.away)}${escapeHtml(m.away)}</span></td>
        <td style="color: ${/live|half|progress|playing|in_play/i.test(m.status || "") ? 'var(--green)' : 'inherit'}; font-weight: bold;">
          ${escapeHtml(m.status || "Scheduled")}
        </td>
      </tr>
    `).join("");
  }
}

function renderOfficialNotes(feed) {
  if (!els.officialNotes) return;
  els.officialNotes.innerHTML = `
    <article class="team-award-card">
      <span>${feed.connected ? t("feedReady") : t("feedFallback")}</span>
      <b>${escapeHtml(feed.source)}</b>
      <small><a href="${escapeHtml(feed.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(feed.sourceUrl)}</a></small>
    </article>
    ${(feed.notes || []).map(note => `<p class="tracker-note">${escapeHtml(note)}</p>`).join("")}
  `;
}

function renderStandings() {
  if (!liveFeed) return;
  const grid = document.getElementById("standingsGrid");
  if (!grid) return;

  const thirds = [];
  
  grid.innerHTML = Object.keys(GROUPS).map(grp => {
    const stats = new Map(GROUPS[grp].map(t => [t, { team: t, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 }]));
    
    liveFeed.matches.filter(m => m.group === grp).forEach(m => {
      if (m.homeScore === null || m.awayScore === null) return;
      const h = Number(m.homeScore), a = Number(m.awayScore);
      const ht = stats.get(m.home), at = stats.get(m.away);
      if(!ht || !at) return;
      ht.p++; at.p++; ht.gf += h; ht.ga += a; at.gf += a; at.ga += h;
      if (h > a) { ht.w++; ht.pts += 3; at.l++; }
      else if (a > h) { at.w++; at.pts += 3; ht.l++; }
      else { ht.d++; at.d++; ht.pts++; at.pts++; }
    });
    
    stats.forEach(t => t.gd = t.gf - t.ga);
    const sorted = [...stats.values()].sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.team.localeCompare(b.team));
    
    if (sorted[2]) thirds.push({ ...sorted[2], group: grp });

    const rows = sorted.map((r, i) => `
      <tr class="${i < 2 ? "advance-row" : i === 2 ? "third-row" : "muted-row"}">
        <td><span class="standings-team">${flag(r.team)}${escapeHtml(r.team)}</span></td>
        <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.gd > 0 ? "+"+r.gd : r.gd}</td><td>${r.gf}</td><td><b>${r.pts}</b></td>
      </tr>`).join("");
      
    return `
      <article class="group-card">
        <div class="group-header"><h3>Group ${grp}</h3></div>
        <div class="table-wrap" style="margin-top:0;"><table><thead><tr><th>${t("team")}</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>GF</th><th>PTS</th></tr></thead><tbody>${rows}</tbody></table></div>
      </article>`;
  }).join("");

  thirds.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
  if (els.thirdPlaceBody) {
    els.thirdPlaceBody.innerHTML = thirds.map((r, i) => `
      <tr class="${i < 8 ? "advance-row" : "muted-row"}">
        <td>${i + 1}</td><td><span class="standings-team">${flag(r.team)}${escapeHtml(r.team)}</span></td><td>${r.group}</td><td><b>${r.pts}</b></td><td>${r.gd > 0 ? "+"+r.gd : r.gd}</td><td>${r.gf}</td>
      </tr>`).join("");
  }
}

function renderSquads() {
  const grid = document.getElementById("squadsGrid");
  if (!grid) return;
  const allTeams = Object.values(GROUPS).flat().sort();
  grid.innerHTML = allTeams.map(team => `
    <article class="stadium-card">
      <div style="display:flex; align-items:center; gap:0.5rem; margin-bottom:0.5rem;">${flag(team)} <h3>${team}</h3></div>
      <p style="font-size:0.85rem; color:var(--muted);">26 Players Confirmed</p>
      <div class="stadium-meta"><span>Squad list unavailable</span></div>
    </article>
  `).join("");
}

// Modal Logic
window.openMatchModal = function(id) {
  const match = liveFeed.matches.find(m => m.id === id) || fixtures.find(m => m.id === id);
  if(!match) return;
  
  document.getElementById('modalMatchTitle').textContent = `${t("match")} ${match.number} - ${escapeHtml(match.status || "Scheduled")}`;
  document.getElementById('modalHomeTeam').innerHTML = `${flag(match.home)} ${escapeHtml(match.home)}`;
  document.getElementById('modalAwayTeam').innerHTML = `${escapeHtml(match.away)} ${flag(match.away)}`;
  document.getElementById('modalScore').textContent = `${formatScore(match.homeScore)} - ${formatScore(match.awayScore)}`;

  const mockLineup = () => Array.from({length: 11}, (_, i) => `<li><span class="player-number">${i+1}</span> Player ${i+1}</li>`).join("");
  const mockSubs = () => Array.from({length: 15}, (_, i) => `<li><span class="player-number">${i+12}</span> Sub ${i+12}</li>`).join("");

  document.getElementById('modalHomeLineup').innerHTML = match.homeLineup || mockLineup();
  document.getElementById('modalAwayLineup').innerHTML = match.awayLineup || mockLineup();
  document.getElementById('modalHomeSubs').innerHTML = match.homeSubs || mockSubs();
  document.getElementById('modalAwaySubs').innerHTML = match.awaySubs || mockSubs();

  document.getElementById('matchModal').classList.add('is-active');
};

window.closeMatchModal = function() {
  document.getElementById('matchModal').classList.remove('is-active');
};

function formatScore(value) { return Number.isFinite(Number(value)) ? String(value) : "-"; }

function renderStadiums() {
  const grid = document.getElementById("stadiumGrid");
  if (!grid) return;
  grid.innerHTML = STADIUMS.map(([city, stadium, country, capacity]) => {
    const matchCount = fixtures.filter((match) => match.city === city).length;
    return `
      <article class="stadium-card">
        <small>${escapeHtml(country)}</small>
        <h3>${escapeHtml(city)}</h3>
        <p>${escapeHtml(stadium)}</p>
        <div class="stadium-meta">
          <span>${matchCount} group matches</span>
          <span>${t("capacity")}: ${capacity}</span>
        </div>
      </article>
    `;
  }).join("");
}

function updateCountdown() {
  const kickoff = new Date("2026-06-11T19:00:00Z").getTime();
  const remaining = Math.max(0, kickoff - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  if(document.getElementById("days")) document.getElementById("days").textContent = days;
  if(document.getElementById("hours")) document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  if(document.getElementById("minutes")) document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  if(document.getElementById("seconds")) document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function updateNetworkStatus() {
  const offline = !navigator.onLine;
  if(els.offlineStatus) {
    els.offlineStatus.textContent = offline ? t("offline") : t("online");
    els.offlineStatus.classList.toggle("is-offline", offline);
  }
}

function wireEvents() {
  document.querySelectorAll(".nav-button, [data-jump]").forEach(b => b.addEventListener("click", e => setView((e.currentTarget.dataset.view || e.currentTarget.dataset.jump))));
  
  // Live Sub-nav logic
  document.querySelectorAll('.live-tab').forEach(b => b.addEventListener('click', e => {
    document.querySelectorAll('.live-tab').forEach(tab => tab.classList.remove('is-active'));
    document.querySelectorAll('.live-view').forEach(view => view.style.display = 'none');
    e.target.classList.add('is-active');
    document.getElementById(e.target.dataset.liveTarget).style.display = 'block';
  }));

  if(els.language) els.language.addEventListener("change", e => { lang = e.target.value; localStorage.setItem("wc26-lang", lang); applyTranslations(); });
  if(els.timezone) els.timezone.addEventListener("change", e => { timezone = e.target.value; localStorage.setItem("wc26-timezone", timezone); renderSchedule(); });
  if(els.timeFormat) els.timeFormat.addEventListener("change", e => { timeFormat = e.target.value; localStorage.setItem("wc26-time-format", timeFormat); renderSchedule(); });
  if(els.groupFilter) els.groupFilter.addEventListener("change", renderSchedule);
  
  const refreshBtn = document.getElementById("refreshLiveButton");
  if(refreshBtn) refreshBtn.addEventListener("click", fetchLiveFeed);
  
  window.addEventListener("online", updateNetworkStatus);
  window.addEventListener("offline", updateNetworkStatus);

  if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

function init() {
  initEls(); // Safely bind all elements
  buildControls(); wireEvents(); applyTranslations();
  renderStadiums(); fetchLiveFeed();
  setInterval(updateCountdown, 1000); setInterval(fetchLiveFeed, 60000);
  const hash = location.hash.replace("#", "");
  if (["home", "schedule", "awards", "stadiums"].includes(hash)) setView(hash);
}

init();