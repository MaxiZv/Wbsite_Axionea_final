---
name: update-brand-guidelines
description: >
  Schnelles Aktualisieren der Axionea Brand Guidelines. Nutze diesen Skill wenn
  der User Farben, Fonts, Tonalität, Zielgruppen oder andere Markenrichtlinien
  ändern, ergänzen oder auf den neuesten Stand bringen möchte.
---

# Brand Guidelines aktualisieren

Du hilfst beim Aktualisieren der Axionea Brand Guidelines.

## Workflow

1. **Lies zuerst die aktuelle Version:**
   ```
   .claude/commands/axionea-brand-guidelines.md
   ```

2. **Frage den User, was aktualisiert werden soll:**
   - Farben (Farbsystem, neue Farben, Änderungen)
   - Typografie (Fonts, Größen, Gewichte)
   - Logo (neue Varianten, Regeln)
   - Tonalität & Sprache (Formulierungen, CTAs)
   - Design-Prinzipien (CSS, Spacing, Cards)
   - Zielgruppen (neue Segmente, Kriterien)
   - Netzwerke & Kanäle
   - Sonstiges

3. **Zeige dem User die aktuelle Version der betroffenen Section**

4. **Nimm die Änderungen vor und zeige eine Vorschau**

5. **Nach Bestätigung: Speichere die aktualisierte Datei**

## Schnellbefehle

Der User kann direkt sagen:
- "Füge Farbe X hinzu" → Ergänze im Farbsystem
- "Ändere CTA zu Y" → Update Standard-CTAs
- "Neue Zielgruppe: Z" → Ergänze Zielgruppen-Profile
- "Font X statt Y" → Typografie anpassen

## Regeln

- Behalte die bestehende Struktur bei
- Keine Sections löschen ohne explizite Bestätigung
- Bei Farbänderungen: Prüfe Kontrast-Kompatibilität
- Dokumentiere größere Änderungen mit Kommentar am Ende der Datei

## Nach dem Update

Bestätige die Änderungen mit einer kurzen Zusammenfassung:
```
✓ Brand Guidelines aktualisiert
  - [Was geändert wurde]
  - [Betroffene Sections]
```
