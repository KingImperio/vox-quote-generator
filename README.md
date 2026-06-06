# Vox

Curated quote generator with six category filters, live quotes from the ZenQuotes API, clean transitions, and one-click copy or share.

## What it does

Vox surfaces 60+ genuinely substantive quotes from philosophy, design, science, literature, history, and business. It is built for people who want a quote that actually means something — no motivational filler, no "believe in yourself" platitudes. Filter by category, roll a new one, copy or share.

On first load, Vox pulls a fresh batch of 50 quotes from the ZenQuotes API and merges them with a curated fallback set, so the app works fully offline too.

## Tech

- HTML / CSS / JavaScript (Vanilla)
- ZenQuotes API (`https://zenquotes.io/api/quotes`) for live quotes — no API key required
- Curated 60+ quote set in `app.js` as an offline fallback
- Author → category mapping keeps the API quotes aligned with the six Vox categories
- Recoleta (quote text) and Satoshi (UI) from Fontshare
- Web Share API with clipboard fallback
- AbortController-based fetch timeout for API resilience

## Run locally

Download or clone the repo. Open `index.html` in a browser. No build step required.

## Live demo

https://kingimperio.github.io/vox-quote-generator/

## Part of

Built as part of a frontend portfolio series. Component styling draws from [black.ui](https://github.com/KingImperio/black.ui).
