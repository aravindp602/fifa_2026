# Official Live Feed Setup

The website no longer uses manual award updates. The Live section refreshes from:

```text
/api/fifa-live
```

For deployment, configure these environment variables on your host:

```text
FIFA_LIVE_SOURCE_URL=<official FIFA/FIFA Data Hub JSON feed URL>
FIFA_LIVE_TOKEN=<optional bearer token if the official feed requires credentials>
```

The adapter normalizes the official feed into this shape:

```json
{
  "source": "FIFA official feed",
  "sourceUrl": "https://www.fifa.com/en/match-centre",
  "updatedAt": "2026-06-11T19:00:00.000Z",
  "matches": [
    {
      "id": "match-id",
      "number": 1,
      "group": "A",
      "home": "Mexico",
      "away": "South Africa",
      "homeScore": 0,
      "awayScore": 0,
      "status": "Live",
      "utc": "2026-06-11T19:00:00Z"
    }
  ],
  "awards": {
    "goldenBoot": [{ "name": "Player", "team": "Team", "goals": 3 }],
    "assists": [{ "name": "Player", "team": "Team", "assists": 2 }],
    "manOfTheMatch": [{ "name": "Player", "team": "Team", "motm": 1 }]
  },
  "notes": []
}
```

If the official source is not configured, the UI clearly shows that the official feed is not connected instead of displaying fake live records.
