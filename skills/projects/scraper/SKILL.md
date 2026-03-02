---
name: axionea-scraper-project
description: >
  Project-specific rules and context for the Axionea Scraper project.
  Use this skill whenever working on scraping, data extraction, or data
  pipeline tasks within this project. Always apply the B.L.A.S.T. protocol
  (blast-protocol skill) alongside these project-specific rules.
---

# Axionea Scraper — Project Context

## Project Goal
[Beschreibe hier das Ziel des Scrapers — was wird gescraped, wohin gehen die Daten?]

## Data Sources
- [ ] Quelle 1: [URL / API]
- [ ] Quelle 2: [URL / API]

## Output Destination
- [ ] [Google Sheets / Datenbank / API-Endpoint]

## Project-Specific Rules
- Alle Scraping-Tools liegen in `tools/`
- Rohdaten immer in `.tmp/raw/` ablegen vor der Verarbeitung
- Rate Limits einhalten (immer `time.sleep()` zwischen Requests)
- User-Agent immer als seriösen Browser setzen
- Bei Fehlern: Stack Trace in `progress.md` loggen und Self-Annealing Loop starten

## Tech Stack (Scraper-spezifisch)
- **HTTP:** `httpx` oder `requests` mit Retry-Logic
- **Parsing:** `BeautifulSoup4` oder `playwright` für JS-heavy Seiten
- **Data:** `pandas` für Transformation, `openpyxl` für Excel-Output

## Forbidden Patterns
- Kein direktes Speichern in die Cloud ohne Validation-Step
- Keine hardcodierten URLs — immer in `gemini.md` als Konfiguration
