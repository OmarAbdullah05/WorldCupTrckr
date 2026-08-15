# World Cup 2026 Infrastructure Tracker

SharePoint Framework (SPFx) web part for tracking Verizon network infrastructure readiness across FIFA World Cup 2026 stadium venues.
<img width="1346" height="985" alt="Screenshot 2026-08-15 at 12 47 01 AM" src="https://github.com/user-attachments/assets/83a1537f-3a14-4286-bfde-b6c8ace1f24b" />

## Features

- **Portfolio dashboard** — overall progress, blocked items, and tournament countdown
- **8 US stadium venues** — MetLife, AT&T, Mercedes-Benz, SoFi, Hard Rock, Levi's, Lincoln Financial, Lumen Field
- **Milestone tracking** — fiber, DAS, 5G, edge compute, load testing, power, NOC, FAT, and game-day sign-off
- **Per-stadium detail** — remaining milestones with due dates, days left/overdue, owners, and status
- **At-risk highlighting** — stadiums with blocked milestones are flagged

## Prerequisites

- **Node.js 18.17.x** (SPFx 1.20 requirement). Use [nvm](https://github.com/nvm-sh/nvm):

  ```bash
  nvm install 18
  nvm use 18
  ```

- npm (comes with Node)

## Getting started

```bash
cd ~/Projects/world-cup-infra
npm install
gulp serve
```

When the dev server starts, open:

- **Local preview (recommended):** `https://localhost:4321/temp/preview.html`

This loads the StadiumTracker dashboard directly — no add button needed.

The legacy SharePoint workbench (`/temp/workbench.html`) is also generated but its canvas is incompatible with SPFx 1.20, so the + button may not appear there.

**SharePoint hosted workbench** (if you have a tenant):

```bash
export SPFX_SERVE_TENANT_DOMAIN=yourtenant.sharepoint.com
npm start -- --config sharepoint
```

Or open your tenant workbench with:

`https://YOURTENANT.sharepoint.com/_layouts/15/workbench.aspx?debug=true&noredir=true&debugManifestsFile=https://localhost:4321/temp/manifests.js`
- Add the **StadiumTracker** web part to the page

To trust the local HTTPS certificate on first run (macOS):

```bash
gulp trust-dev-cert
```

## Build for production

```bash
gulp bundle --ship
gulp package-solution --ship
```

The `.sppkg` package is generated in `sharepoint/solution/` for upload to your SharePoint App Catalog.

## Project structure

```
src/webparts/stadiumTracker/
├── components/          # React UI (dashboard, cards, timeline)
├── data/stadiumData.ts  # Sample stadium & milestone data
├── models/IStadium.ts   # TypeScript interfaces
└── utils/dateUtils.ts   # Countdown & date helpers
```

## Customizing data

Edit `src/webparts/stadiumTracker/data/stadiumData.ts` to add stadiums, change milestone dates, or update statuses. This is just for sampling, in reality the static data is replaced with SharePoint lists or Microsoft Graph API calls.

## Tech stack

- SPFx 1.20 · React 17 · TypeScript · Fluent UI · SCSS modules
# WorldCupTrckr
