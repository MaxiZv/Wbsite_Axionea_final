# Axionea — Tech Stack & Implementierungsregeln

Beim Generieren von Code oder UI-Komponenten für Axionea **MÜSSEN** diese Technologieentscheidungen strikt eingehalten werden.

---

## Core Stack

| Bereich | Technologie |
|---|---|
| **Web Framework** | Vanilla HTML/CSS/JS (Standard) oder Next.js (auf explizite Anfrage) |
| **Styling** | Vanilla CSS — kein Tailwind, kein Bootstrap als Standard |
| **Schriften** | Syne (Headlines) + DM Sans (Body) via Google Fonts |
| **Icons** | Lucide oder SVG — kein Font Awesome |
| **Automatisierung** | Python 3.10+ |
| **HTTP/Scraping** | `httpx`, `requests`, `playwright` (JS-heavy Seiten) |
| **Data Processing** | `pandas`, `openpyxl` |
| **Secrets** | `.env` + `python-dotenv` — niemals hardcoded |

---

## CSS-Implementierungsregeln

### Farben
Immer die Tokens aus `design-tokens.json` verwenden:
```css
:root {
  --color-deep-navy: #000926;
  --color-sapphire: #0F52BA;
  --color-sapphire-hover: #1A6AE8;
  --color-amber: #E07B00;
  --color-amber-hover: #F59E0B;
  --color-ice-blue: #D6E6F3;
  --color-powder-blue: #A6C5D7;
  --color-white: #FFFFFF;
  --color-gray-50: #F9FAFB;
  --color-gray-200: #E5E7EB;
  --color-gray-600: #4B5563;
}
```

### Spacing — 8px-Raster
```css
/* Erlaubte Abstände: 8, 16, 24, 32, 48, 64, 96px */
/* Niemals odd values wie 10px, 15px, 22px */
```

### Standard Card
```css
.card {
  border-radius: 20px;
  border: 1px solid #E5E7EB;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0,9,38,0.08);
}
```

### Dark Section Glow
```css
.dark-section {
  background: #000926;
  background-image: radial-gradient(circle at top right, rgba(15,82,186,0.3), transparent 60%);
}
```

---

## Komponenten-Patterns

### Buttons
- **Primär (Amber-CTA):** Amber-Hintergrund, Syne Bold, max. 1× pro Section
  ```css
  background: #E07B00; color: #fff; font-family: Syne; font-weight: 700;
  ```
- **Sekundär:** Sapphire outline oder Ghost-Variante
- **Standard-CTAs:** "Jetzt starten →" / "Kostenlos beraten lassen" / "Demo ansehen"

### Headings
- Eyebrow-Label (11px, Syne 700, Sapphire, UPPERCASE, letter-spacing: 3px) **immer** vor H2-Headlines
- Niemals H2 ohne vorangehendes Eyebrow-Label

### Formulare
- Labels **über** Inputs (nie daneben oder als Placeholder)
- Spacing zwischen Formular-Elementen: 16–24px

---

## Verbotene Patterns

- ❌ Kein vollständig dunkles Theme (Zielgruppe KMU vertraut hellen Interfaces)
- ❌ Kein jQuery
- ❌ Kein Bootstrap
- ❌ Amber nicht mehrfach in derselben Section
- ❌ Keine Farben außerhalb der definierten Tokens
- ❌ Keine zufälligen Schriften — nur Syne + DM Sans
- ❌ Niemlas Logo verzerren, rotieren oder mit Verläufen überlagern
