---
name: axionea-brand-guidelines
description: >
  Complete brand identity and design guidelines for Axionea GbR. Use this skill
  whenever creating or editing anything visual or written for Axionea — including
  websites, presentations, documents, social media, emails, pitch decks, proposals,
  or any marketing material. Trigger whenever the user mentions Axionea, asks to
  write copy, build UI, design something, or create any output that represents the
  Axionea brand. Also use when the user asks about colors, fonts, logo usage, tone
  of voice, or messaging for the company.
---

# Axionea GbR — Brand Guidelines

**Was:** KI-Automatisierungsagentur für den DACH-Mittelstand
**Für wen:** KMU ohne eigene IT-Abteilung
**Markt:** DACH-Region (DE/AT/CH)
**Gegründet von:** Maxi Zvada & Nico Christian Fisseler

---

## 1. Markenpositionierung

**Kernaussage:** Wir automatisieren manuelle Prozesse — ohne IT-Abteilung, ohne Technik-Kenntnisse, ohne versteckte Kosten.

**Drei Haupt-Schmerzpunkte der Zielgruppe:**
1. Zu wenig Zeit durch repetitive, manuelle Aufgaben
2. Technische Überforderung mit bestehenden KI-Tools
3. Angst vor hohen Implementierungskosten

**Differenzierung:** Axionea zeigt zuerst funktionierende Lösungen — bevor etwas custom entwickelt wird. Pain-Point-first, Demo vor Konzept.

---

## 2. Farbsystem

```
DEEP NAVY   #000926   Primär-Hintergrund (dark), Headlines, Footer
SAPPHIRE    #0F52BA   Markenfarbe, Buttons, Links, Badges, Logo
AMBER       #E07B00   CTA, Highlights, Icons — der EINZIGE warme Akzent
ICE BLUE    #D6E6F3   Card-Backgrounds, Badges, Hover-States
POWDER BLUE #A6C5D7   Subtexte auf dunklem Hintergrund, Borders
WHITE       #FFFFFF   Primärer Hintergrund (Hauptwebsite, Dokumente)
GRAY-50     #F9FAFB   Abwechselnde Sections
```

**Amber-Wahl:** Bewusst Orange-Gelb statt Rot. Rot erzeugt Alarmsignale. Amber kommuniziert Energie, Effizienz und greifbare Ergebnisse — freundlicher für nicht-technische Entscheider.

**Hintergrund-Hierarchie:**
- Weiß → Standard-Content (Texte, Cards, Dokumente)
- Gray-50 → Abwechslung zwischen Sections
- Deep Navy → Hero, CTAs, Footer, Testimonials, Akzent-Moments

**Kein vollständig dunkles Theme** — die KMU-Zielgruppe vertraut hellen, klaren Interfaces.

---

## 3. Typografie

**Display / Headlines:** Syne (Weights: 700, 800)
**Body / UI-Text:** DM Sans (Weights: 300, 400, 500)

```
Display H1  Syne 800   64px+  letter-spacing: -3px   Hero Headlines
Heading H2  Syne 700   40px   letter-spacing: -1.5px  Section Titles
Heading H3  Syne 700   28px   letter-spacing: -0.5px  Card Headers
Body        DM Sans 300 16px  line-height: 1.7        Fließtext
Small       DM Sans 400 13px                          Captions, Meta
Eyebrow     Syne 700   11px   letter-spacing: 3px     Labels (UPPERCASE)
CTA         Syne 700   14px   letter-spacing: 0.5px   Button Text
```

Google Fonts URL:
`https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap`

---

## 4. Logo

Vier Varianten vorhanden:
- **Dark/Outline** — auf weißem/hellem Hintergrund (Primär-Verwendung)
- **Red/Filled** — Ausnahmefälle, keine Standard-Verwendung
- **White/Grau** — auf dunklem Hintergrund
- **Blue/Filled** — auf blauem Hintergrund (selektiv)

**Regeln:**
- Clearspace: Logohöhe × 0.5 rundum freihalten
- Mindestgröße: 20px Höhe
- Niemals verzerren, rotieren, oder mit Farbverläufen überlagern
- Immer volle Deckkraft

---

## 5. Tonalität & Sprache

### So klingt Axionea:
- **Konkret:** "8 Stunden pro Woche gespart" — nie "Effizienz gesteigert"
- **Direkt:** "In 2 Wochen live" — nie "schnelle Implementierung möglich"
- **Zugänglich:** "Sie brauchen kein IT-Team" — empathisch, nicht herablassend
- **Ergebnis-fokussiert:** ROI, Zeit, Kosten — immer messbar

### Das vermeiden wir:
- Tech-Jargon: LLM, multi-agentic, pipeline, stack, RAG
- Buzzwords: revolutionär, disruptiv, transformativ, bahnbrechend
- Vage Versprechen: "signifikant verbessern", "optimale Performance"
- Distanz: kein übermäßig formelles Kanzlei-Deutsch

### Standard-CTAs:
- Primär: "Jetzt starten →" / "Kostenlos beraten lassen"
- Sekundär: "Demo ansehen" / "Mehr erfahren"

### Sprache: Deutsch (DACH)
- Du-Form in Headlines und CTAs
- Sie-Form in formellen Dokumenten und E-Mails
- Englische Fachbegriffe nur wenn es kein gutes deutsches Äquivalent gibt

---

## 6. Design-Prinzipien

**Für alle Medien:**
- Eyebrow-Label (klein, uppercase, Sapphire-Farbe) immer vor H2-Headlines
- Amber nur für DEN wichtigsten CTA pro Sektion — nie mehrfach
- Radiale Glow-Effekte auf dunklen Hintergründen für Tiefe
- Cards: border-radius 16–24px, subtile Border, Hover-Lift-Effekt
- Spacing-Basis: 8px-Raster (8, 16, 24, 32, 48, 64, 96px)

**Für Websites:**
```css
/* Radial Glow auf dark sections */
background: radial-gradient(circle at top right, rgba(15,82,186,0.3), transparent 60%);

/* Standard Card */
border-radius: 20px; border: 1px solid #E5E7EB;
transition: transform 0.2s ease, box-shadow 0.2s ease;

/* Hover */
transform: translateY(-3px);
box-shadow: 0 8px 30px rgba(0,9,38,0.08);
```

**Für Präsentationen / Dokumente:**
- Titelfolie: Deep Navy Hintergrund, weißer Syne-Titel, Amber-Akzent
- Content-Folien: weißer Hintergrund, Deep Navy Text
- Max. 3 Farben pro Slide: Navy + Sapphire + Amber
- Kein Clipart, keine Stock-Icons aus Office-Bibliotheken

---

## 7. Zielgruppen-Profile

**Qualifizierungskriterien (kein Industrie-Lock-in):**
- Keine eigene IT-Abteilung
- Kein internes KI-Wissen oder Implementierungskapazität
- Klare manuelle Prozesse die automatisierbar sind
- Budget-bewusst (kein Enterprise-Budget)

**Typische Segmente:** Arztpraxen, Rechtsanwaltskanzleien, Beautystudios, Sportvereine, kleine Agenturen, Handwerksbetriebe

---

## 8. Netzwerke & Kanäle

- Medizin-Netzwerk (Familie)
- Ehemalige Kollegen in Führungspositionen (TRUMPF, Audi, G&D)
- Unternehmer-Netzwerk
- Sports-Industry (Basketball, U19 Bundesliga)

---

## 9. Kurzreferenz Farben (Copy-Paste)

```
#000926  Deep Navy
#0F52BA  Sapphire
#1A6AE8  Sapphire Light (Hover)
#E07B00  Amber (CTA)
#F59E0B  Amber Light (Hover)
#D6E6F3  Ice Blue
#A6C5D7  Powder Blue
#FFFFFF  White
#F9FAFB  Gray-50
#E5E7EB  Gray-200 (Borders)
#4B5563  Gray-600 (Body Text)
```
