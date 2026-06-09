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
    navHome: "Home", navSchedule: "Schedule", navPredictor: "Predictor", navAwards: "Live", navStadiums: "Stadiums",
    heroEyebrow: "FIFA World Cup 2026", heroTitle: "Every group-stage kick-off, in your time.",
    heroText: "A fast offline-ready hub for fixtures, local kick-off times, live group tables, and knockout qualification scenarios.",
    viewSchedule: "View schedule", openPredictor: "Open predictor", openingMatch: "Opening match",
    days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    teams: "Teams", groups: "Groups", groupMatches: "Group matches", hostCities: "Host cities",
    scheduleEyebrow: "Fixture planner", scheduleTitle: "Group-stage schedule", timezone: "Timezone", timeFormat: "Time format", time12: "12-hour", time24: "24-hour", filterGroup: "Group",
    predictorEyebrow: "Scenario engine", predictorTitle: "Group-stage predictor", sampleScores: "Sample scores", resetScores: "Reset",
    autoSave: "Scores auto-save on this device.", qualificationRule: "Top two in each group plus the eight best third-place teams advance.",
    thirdPlaceTitle: "Best third-place race", rank: "Rank", team: "Team", group: "Group",
    awardsEyebrow: "Official live center", awardsTitle: "Scores & awards", refreshNow: "Refresh", officialFifa: "Official FIFA",
    connecting: "Connecting to official feed", liveMatch: "Live match", currentScores: "Current scores", matchResults: "Match results",
    status: "Status", officialNotes: "Official feed notes", feedReady: "Official feed connected", feedFallback: "Official feed not connected",
    feedFallbackNote: "Connect an official FIFA feed URL via CI/CD to enable real-time records.",
    goldenBoot: "Golden Boot", topScorer: "Top scorer", playmaker: "Playmaker", topAssists: "Top assists", motmRace: "Man of the Match", mostMotm: "Most awards",
    stadiumsEyebrow: "Host cities", stadiumsTitle: "Stadium guide", footerNote: "Static vanilla PWA. No ads, no tracking, no backend.",
    allGroups: "All groups", match: "Match", local: "local", capacity: "Capacity", online: "Online", offline: "Offline ready"
  },
  es: {
    navHome: "Inicio", navSchedule: "Calendario", navPredictor: "Predictor", navAwards: "Vivo", navStadiums: "Sedes",
    heroEyebrow: "Copa Mundial 2026", heroTitle: "Cada partido, en tu horario.",
    heroText: "Un hub offline para calendario, horarios locales, tablas vivas y escenarios de clasificacion.",
    viewSchedule: "Ver calendario", openPredictor: "Abrir predictor", openingMatch: "Partido inaugural",
    days: "Dias", hours: "Horas", minutes: "Minutos", seconds: "Segundos",
    teams: "Equipos", groups: "Grupos", groupMatches: "Partidos de grupos", hostCities: "Ciudades sede",
    scheduleEyebrow: "Planificador", scheduleTitle: "Calendario de grupos", timezone: "Zona horaria", timeFormat: "Formato", time12: "12 horas", time24: "24 horas", filterGroup: "Grupo",
    predictorEyebrow: "Motor de escenarios", predictorTitle: "Predictor de grupos", sampleScores: "Resultados demo", resetScores: "Reiniciar",
    autoSave: "Los resultados se guardan en este dispositivo.", qualificationRule: "Avanzan los dos primeros de cada grupo y los ocho mejores terceros.",
    thirdPlaceTitle: "Carrera de mejores terceros", rank: "Pos.", team: "Equipo", group: "Grupo",
    awardsEyebrow: "Centro oficial en vivo", awardsTitle: "Marcadores y premios", refreshNow: "Actualizar", officialFifa: "FIFA oficial",
    connecting: "Conectando al feed oficial", liveMatch: "Partido en vivo", currentScores: "Marcadores", matchResults: "Resultados",
    status: "Estado", officialNotes: "Notas del feed oficial", feedReady: "Feed oficial conectado", feedFallback: "Feed oficial no conectado",
    goldenBoot: "Bota de Oro", topScorer: "Maximo goleador", playmaker: "Creador", topAssists: "Mas asistencias", motmRace: "Jugador del partido", mostMotm: "Mas premios",
    stadiumsEyebrow: "Ciudades sede", stadiumsTitle: "Guia de estadios", footerNote: "PWA vanilla estatica.",
    allGroups: "Todos", match: "Partido", local: "local", capacity: "Capacidad", online: "Online", offline: "Lista offline"
  },
  fr: {
    navHome: "Accueil", navSchedule: "Calendrier", navPredictor: "Pronostic", navAwards: "Direct", navStadiums: "Stades",
    heroEyebrow: "Coupe du Monde 2026", heroTitle: "Chaque match, a votre heure.",
    heroText: "Un hub hors ligne pour les affiches, horaires locaux, classements vivants et scenarios.",
    viewSchedule: "Voir calendrier", openPredictor: "Ouvrir pronostic", openingMatch: "Match d'ouverture",
    days: "Jours", hours: "Heures", minutes: "Minutes", seconds: "Secondes",
    teams: "Equipes", groups: "Groupes", groupMatches: "Matchs de groupes", hostCities: "Villes hotes",
    scheduleEyebrow: "Planificateur", scheduleTitle: "Calendrier des groupes", timezone: "Fuseau horaire", timeFormat: "Format", time12: "12 heures", time24: "24 heures", filterGroup: "Groupe",
    predictorEyebrow: "Moteur de scenarios", predictorTitle: "Pronostic des groupes", sampleScores: "Scores exemple", resetScores: "Reinitialiser",
    autoSave: "Les scores sont sauvegardes sur cet appareil.", qualificationRule: "Les deux premiers de chaque groupe et les huit meilleurs troisiemes avancent.",
    thirdPlaceTitle: "Course des meilleurs troisiemes", rank: "Rang", team: "Equipe", group: "Groupe",
    awardsEyebrow: "Centre officiel en direct", awardsTitle: "Scores et prix", refreshNow: "Actualiser", officialFifa: "FIFA officiel",
    connecting: "Connexion au flux officiel", liveMatch: "Match en direct", currentScores: "Scores", matchResults: "Resultats",
    status: "Statut", officialNotes: "Notes du flux officiel", feedReady: "Flux officiel connecte", feedFallback: "Flux officiel non connecte",
    goldenBoot: "Soulier d'or", topScorer: "Meilleur buteur", playmaker: "Passeur", topAssists: "Meilleures passes", motmRace: "Homme du match", mostMotm: "Plus de prix",
    stadiumsEyebrow: "Villes hotes", stadiumsTitle: "Guide des stades", footerNote: "PWA vanilla statique.",
    allGroups: "Tous", match: "Match", local: "local", capacity: "Capacite", online: "En ligne", offline: "Pret hors ligne"
  }
};

const FALLBACK_TIMEZONES = ["America/Los_Angeles", "America/New_York", "Europe/London", "Europe/Paris", "Asia/Tokyo", "Australia/Sydney", "UTC"];
const TIMEZONES = typeof Intl.supportedValuesOf === "function" ? Intl.supportedValuesOf("timeZone") : FALLBACK_TIMEZONES;
const STORAGE_KEY = "wc26-score-state-v2";
const LOCALE_BY_LANG = { en: "en-US", es: "es-ES", fr: "fr-FR" };

const teamGroup = new Map(Object.entries(GROUPS).flatMap(([group, teams]) => teams.map(team => [team, group])));
const fixtures = FIXTURES.map(([home, away, utc, city, stadium], index) => ({
  id: `m${String(index + 1).padStart(2, "0")}`,
  number: index + 1, home, away, utc, city, stadium, group: teamGroup.get(home)
})).sort((a, b) => new Date(a.utc) - new Date(b.utc));

let lang = localStorage.getItem("wc26-lang") || "en";
let timezone = localStorage.getItem("wc26-timezone") || Intl.DateTimeFormat().resolvedOptions().timeZone || "America/New_York";
let timeFormat = localStorage.getItem("wc26-time-format") || "12";
let scores = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
let liveFeed = null;
let deferredInstallPrompt = null;

const els = {
  language: document.getElementById("languageSelect"),
  timezone: document.getElementById("timezoneSelect"),
  timeFormat: document.getElementById("timeFormatSelect"),
  groupFilter: document.getElementById("groupFilter"),
  scheduleList: document.getElementById("scheduleList"),
  predictorGrid: document.getElementById("predictorGrid"),
  thirdPlaceBody: document.getElementById("thirdPlaceBody"),
  completedMatches: document.getElementById("completedMatches"),
  installButton: document.getElementById("installButton"),
  offlineStatus: document.getElementById("offlineStatus"),
  liveFeedStatus: document.getElementById("liveFeedStatus"),
  liveLastUpdated: document.getElementById("liveLastUpdated"),
  liveScoreRail: document.getElementById("liveScoreRail"),
  liveMatchTableBody: document.getElementById("liveMatchTableBody"),
  officialNotes: document.getElementById("officialNotes"),
  goldenBootLeader: document.getElementById("goldenBootLeader"),
  assistLeader: document.getElementById("assistLeader"),
  motmLeader: document.getElementById("motmLeader")
};

function t(key) { return TRANSLATIONS[lang][key] || TRANSLATIONS.en[key] || key; }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char])); }
function flag(team) { return FLAGS[team] ? `<img class="flag" src="https://flagcdn.com/w40/${FLAGS[team]}.png" alt="" loading="lazy">` : `<span class="flag"></span>`; }

function buildControls() {
  els.language.value = lang;
  els.timeFormat.value = timeFormat;
  const zones = Array.from(new Set(["UTC", ...TIMEZONES, timezone])).sort();
  els.timezone.innerHTML = zones.map(z => `<option value="${z}" ${z === timezone ? "selected" : ""}>${escapeHtml(z.replaceAll("_", " "))}</option>`).join("");
  els.groupFilter.innerHTML = `<option value="all">${t("allGroups")}</option>` + Object.keys(GROUPS).map(g => `<option value="${g}">Group ${g}</option>`).join("");
}

function applyTranslations() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(node => node.textContent = t(node.dataset.i18n));
  renderSchedule();
  renderStadiums();
  renderAwards();
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

function renderPredictor() {
  els.predictorGrid.innerHTML = Object.keys(GROUPS).map(grp => {
    const grpFix = fixtures.filter(m => m.group === grp);
    const rows = grpFix.map(m => {
      const s = scores[m.id] || { home: "", away: "" };
      return `
        <div class="score-row">
          <label class="score-team">${escapeHtml(m.home)}${flag(m.home)}</label>
          <div class="score-boxes">
            <input type="number" min="0" data-match="${m.id}" data-side="home" value="${s.home}">
            <span>-</span>
            <input type="number" min="0" data-match="${m.id}" data-side="away" value="${s.away}">
          </div>
          <label class="score-team">${flag(m.away)}${escapeHtml(m.away)}</label>
        </div>`;
    }).join("");
    return `
      <article class="group-card">
        <div class="group-header"><h3>Group ${grp}</h3></div>
        <div class="match-input-list">${rows}</div>
        <div class="table-wrap"><table><thead><tr><th>${t("team")}</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>GF</th><th>PTS</th></tr></thead><tbody id="standings-${grp}"></tbody></table></div>
      </article>`;
  }).join("");

  els.predictorGrid.querySelectorAll("input").forEach(i => i.addEventListener("input", handleScoreInput));
  recalculateAll();
}

function handleScoreInput(e) {
  const { match, side } = e.target.dataset;
  const val = e.target.value === "" ? "" : Math.max(0, parseInt(e.target.value));
  e.target.value = val;
  scores[match] = { ...(scores[match] || { home: "", away: "" }), [side]: val };
  if (scores[match].home === "" && scores[match].away === "") delete scores[match];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scores));
  recalculateAll();
}

function recalculateAll() {
  const thirds = [];
  Object.keys(GROUPS).forEach(grp => {
    const stats = new Map(GROUPS[grp].map(t => [t, { team: t, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0 }]));
    fixtures.filter(m => m.group === grp).forEach(m => {
      const s = scores[m.id];
      if (!s || s.home === "" || s.away === "") return;
      const h = parseInt(s.home), a = parseInt(s.away);
      const ht = stats.get(m.home), at = stats.get(m.away);
      ht.p++; at.p++; ht.gf += h; ht.ga += a; at.gf += a; at.ga += h;
      if (h > a) { ht.w++; ht.pts += 3; at.l++; }
      else if (a > h) { at.w++; at.pts += 3; ht.l++; }
      else { ht.d++; at.d++; ht.pts++; at.pts++; }
    });
    
    stats.forEach(t => t.gd = t.gf - t.ga);
    const sorted = [...stats.values()].sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf || a.team.localeCompare(b.team));
    
    document.getElementById(`standings-${grp}`).innerHTML = sorted.map((r, i) => `
      <tr class="${i < 2 ? "advance-row" : i === 2 ? "third-row" : "muted-row"}">
        <td><span class="standings-team">${flag(r.team)}${r.team}</span></td>
        <td>${r.p}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td><td>${r.gd > 0 ? "+"+r.gd : r.gd}</td><td>${r.gf}</td><td><b>${r.pts}</b></td>
      </tr>`).join("");
      
    if (sorted[2]) thirds.push({ ...sorted[2], group: grp });
  });

  thirds.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
  els.thirdPlaceBody.innerHTML = thirds.map((r, i) => `
    <tr class="${i < 8 ? "advance-row" : "muted-row"}">
      <td>${i + 1}</td><td><span class="standings-team">${flag(r.team)}${r.team}</span></td><td>${r.group}</td><td><b>${r.pts}</b></td><td>${r.gd > 0 ? "+"+r.gd : r.gd}</td><td>${r.gf}</td>
    </tr>`).join("");
    
  els.completedMatches.textContent = `${Object.values(scores).filter(s => s.home !== "" && s.away !== "").length} / 72`;
}


// Live Feed Logic (GitHub JSON Polling)
async function fetchLiveFeed() {
  els.liveFeedStatus.textContent = t("connecting");
  try {
    // Add ?t= timestamp to bypass cache and always get the newest file
    const res = await fetch(`data.json?t=${Date.now()}`);
    if (!res.ok) throw new Error("Local data.json not found");
    liveFeed = normalizeLiveFeed(await res.json(), true);
    els.liveFeedStatus.textContent = t("feedReady");
  } catch (err) {
    liveFeed = normalizeLiveFeed(emptyLiveFeed(), false);
    els.liveFeedStatus.textContent = t("feedFallback");
    console.warn("Live feed unavailable, CI/CD data.json likely missing", err);
  }
  renderAwards();
}

function emptyLiveFeed() {
  return {
    source: "local-fallback", sourceUrl: "https://www.fifa.com/en/match-centre", updatedAt: new Date().toISOString(),
    matches: fixtures.map(m => ({ id: m.id, number: m.number, group: m.group, home: m.home, away: m.away, homeScore: null, awayScore: null, status: "Scheduled", utc: m.utc })),
    awards: { goldenBoot: [], assists: [], manOfTheMatch: [] }, notes: [t("feedFallbackNote")]
  };
}

function normalizeLiveFeed(feed, connected) {
  return {
    connected, source: feed.source || "FIFA", sourceUrl: feed.sourceUrl || "https://www.fifa.com/en/match-centre",
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
  els.liveLastUpdated.textContent = Number.isNaN(updated.getTime()) ? "--" : updated.toLocaleString(LOCALE_BY_LANG[lang]);
  
  els.goldenBootLeader.innerHTML = leaderMarkup(feed.awards.goldenBoot[0], "goals", t("goals"));
  els.assistLeader.innerHTML = leaderMarkup(feed.awards.assists[0], "assists", t("assists"));
  els.motmLeader.innerHTML = leaderMarkup(feed.awards.manOfTheMatch[0], "motm", t("motm"));
  
  renderLiveScores(feed.matches);
  renderOfficialNotes(feed);
}

function renderLiveScores(liveMatches) {
  const sorted = [...liveMatches].sort((a, b) => new Date(a.utc || 0) - new Date(b.utc || 0));
  const active = sorted.filter(m => /live|half|progress|playing/i.test(m.status || ""));
  const railMatches = active.length ? active : sorted.slice(0, 4);
  
  // REFINED UI: Premium Scoreboard style
  els.liveScoreRail.innerHTML = railMatches.map(m => {
    const isLive = /live|half|progress|playing/i.test(m.status || "");
    return `
    <article class="live-score-card-refined ${isLive ? 'is-live' : ''}">
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

  els.liveMatchTableBody.innerHTML = sorted.map(m => `
    <tr>
      <td>${m.number || ""}</td>
      <td><span class="standings-team">${flag(m.home)}${escapeHtml(m.home)}</span></td>
      <td><b style="font-size:1.1rem; color:var(--gold);">${formatScore(m.homeScore)} - ${formatScore(m.awayScore)}</b></td>
      <td><span class="standings-team">${flag(m.away)}${escapeHtml(m.away)}</span></td>
      <td style="color: ${/live|half|progress|playing/i.test(m.status || "") ? 'var(--green)' : 'inherit'}; font-weight: bold;">
        ${escapeHtml(m.status || "Scheduled")}
      </td>
    </tr>
  `).join("");
}

function renderOfficialNotes(feed) {
  els.officialNotes.innerHTML = `
    <article class="team-award-card">
      <span>${feed.connected ? t("feedReady") : t("feedFallback")}</span>
      <b>${escapeHtml(feed.source)}</b>
      <small><a href="${escapeHtml(feed.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(feed.sourceUrl)}</a></small>
    </article>
    ${(feed.notes || []).map(note => `<p class="tracker-note">${escapeHtml(note)}</p>`).join("")}
  `;
}

function formatScore(value) { return Number.isFinite(Number(value)) ? String(value) : "-"; }

function renderStadiums() {
  document.getElementById("stadiumGrid").innerHTML = STADIUMS.map(([city, stadium, country, capacity]) => {
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
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

function updateNetworkStatus() {
  const offline = !navigator.onLine;
  els.offlineStatus.textContent = offline ? t("offline") : t("online");
  els.offlineStatus.classList.toggle("is-offline", offline);
}

function wireEvents() {
  document.querySelectorAll(".nav-button, [data-jump]").forEach(b => b.addEventListener("click", e => setView((e.currentTarget.dataset.view || e.currentTarget.dataset.jump))));
  els.language.addEventListener("change", e => { lang = e.target.value; localStorage.setItem("wc26-lang", lang); applyTranslations(); renderPredictor(); });
  els.timezone.addEventListener("change", e => { timezone = e.target.value; localStorage.setItem("wc26-timezone", timezone); renderSchedule(); });
  els.timeFormat.addEventListener("change", e => { timeFormat = e.target.value; localStorage.setItem("wc26-time-format", timeFormat); renderSchedule(); });
  els.groupFilter.addEventListener("change", renderSchedule);
  document.getElementById("sampleScoresButton").addEventListener("click", () => { scores = {}; fixtures.forEach((m, i) => scores[m.id] = { home: i % 4, away: (i + 2) % 4 }); saveScores(); renderPredictor(); });
  document.getElementById("resetScoresButton").addEventListener("click", () => { scores = {}; saveScores(); renderPredictor(); });
  document.getElementById("refreshLiveButton").addEventListener("click", fetchLiveFeed);
  window.addEventListener("online", updateNetworkStatus);
  window.addEventListener("offline", updateNetworkStatus);

  if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

function init() {
  buildControls(); wireEvents(); applyTranslations();
  renderPredictor(); renderStadiums(); fetchLiveFeed();
  setInterval(updateCountdown, 1000); setInterval(fetchLiveFeed, 60000);
  const hash = location.hash.replace("#", "");
  if (["home", "schedule", "predictor", "awards", "stadiums"].includes(hash)) setView(hash);
}

init();