---
description: Neuen Agenten für ein Axionea-Projekt definieren und dokumentieren
---

# Neuen Agenten aufsetzen

## Steps

1. Frage nach dem Agenten-Namen und -Zweck

2. Erstelle den Agenten-Ordner unter `agents/[agent-name]/`:
```
agents/[agent-name]/
├── README.md        # Was macht der Agent? Für welches Projekt?
├── prompt.md        # System Prompt des Agenten
└── config.json      # Konfiguration (Modell, Temperatur, Tools)
```

3. Verknüpfe den Agenten mit seinem Projekt: Trage in `README.md` ein, auf welche Skills der Agent zugreift (company + project).

4. Dokumentiere den Agenten in `agents/README.md`
