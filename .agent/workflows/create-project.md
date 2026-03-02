---
description: Neues Axionea-Projekt aufsetzen mit B.L.A.S.T.-Struktur
---

# Neues Projekt aufsetzen

Dieses Workflow wird immer ausgeführt wenn ein neues Automatisierungsprojekt gestartet wird.

## Steps

1. Frage nach dem Projektnamen und erstelle den Projektordner unter `projects/[projektname]/`

2. Initialisiere die B.L.A.S.T.-Projektstruktur:
```
projects/[projektname]/
├── gemini.md
├── .env
├── task_plan.md
├── findings.md
├── progress.md
├── architecture/
├── tools/
└── .tmp/
```

3. Stelle dem User die 5 B.L.A.S.T. Discovery-Fragen:
   - **North Star:** Was ist das einzige gewünschte Ergebnis?
   - **Integrations:** Welche externen Services werden benötigt? Sind Keys vorhanden?
   - **Source of Truth:** Wo leben die primären Daten?
   - **Delivery Payload:** Wie und wohin soll das finale Ergebnis geliefert werden?
   - **Behavioral Rules:** Wie soll das System "agieren"? (Ton, Logik-Constraints, "Do Not"-Regeln)

4. Erstelle einen Projekt-Skill unter `skills/projects/[projektname]/SKILL.md` falls projektspezifische Regeln definiert wurden.

5. Trage den Projektnamen in die `README.md` der Axionea-Root ein.
