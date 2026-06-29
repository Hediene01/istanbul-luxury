# Bosphorus & Co. — Design Brainstorm

## Brand Essence
**Bosphorus & Co.** — A sanctuary where Ottoman grandeur meets contemporary luxury, for discerning guests who seek more than a meal — they seek a memory.
Personality: **Timeless · Cinematic · Immersive**

---

## Three Stylistic Approaches

### 1. Ottoman Noir Doré — "Cinematic Luxury" (Probability: 0.07)
Dark, warm, cinematic. Deep espresso backgrounds with champagne gold typography. Feels like entering a private palace dining room at dusk.

### 2. Marble & Light — "Modern Levantine" (Probability: 0.04)
Light cream and white marble textures with subtle gold veining. Airy, editorial, Mediterranean-meets-Ottoman.

### 3. Bosphorus Blue — "Coastal Aristocracy" (Probability: 0.02)
Deep navy and teal with gold accents, evoking the Bosphorus waters at night.

---

## CHOSEN: Ottoman Noir Doré — "Cinematic Luxury"

### Design Movement
Art Déco Ottoman contemporain — la rencontre du Palais de Topkapi et d'un hôtel 5 étoiles moderne. Profondeur cinématique, lumière dramatique, typographie monumentale.

### Core Principles
1. **Darkness as luxury** — fond espresso profond, jamais blanc générique
2. **Gold as language** — les accents dorés guident le regard, ne le saturent pas
3. **Motion as storytelling** — chaque animation révèle une couche de l'histoire
4. **Asymmetry as sophistication** — jamais de grilles centrées banales

### Color Philosophy
- `#1A0F0A` — Espresso Noir (fond principal, profondeur)
- `#C9A84C` — Or Ottoman (accents, titres, bordures)
- `#F5E6C8` — Champagne Beige (texte principal, cartes)
- `#FAF6EF` — Crème Ivoire (texte secondaire)
- `#2D1810` — Bois Sombre (sections alternées)
- `#8B6914` — Or Brûlé (hover states)

### Layout Paradigm
- Hero plein écran avec parallaxe et texte révélé
- Sections en blocs larges asymétriques (texte gauche / image droite ou inversé)
- Cartes menu en grille 2×2 avec hover depth effect
- Galerie masonry avec overlay au hover
- Formulaire de réservation centré avec fond marble

### Signature Elements
1. **Motif géométrique ottoman** — arabesques subtiles en overlay sur les sections
2. **Ligne dorée séparatrice** — `1px solid #C9A84C` avec opacité 40%
3. **Typographie monumentale** — Cormorant Garamond 80-120px pour les titres hero

### Interaction Philosophy
- Hover : scale(1.02) + glow doré subtil
- Scroll : révélation progressive (fade + translateY)
- CTA buttons : border gold, fond transparent → fond gold au hover
- Navbar : transparente sur hero → fond espresso semi-opaque au scroll

### Animation
- Entrance : `opacity: 0 → 1` + `translateY(30px → 0)` en 600ms ease-out
- Hero text : stagger 200ms entre titre, sous-titre, CTA
- Cards : scale(0.97 → 1) + shadow depth au hover
- Parallax : hero image à 0.5x scroll speed
- Steam animation : keyframes flottement vertical infini

### Typography System
- **Display** : Cormorant Garamond (Italic Bold) — titres hero, section headers
- **Heading** : Cormorant Garamond (Regular) — sous-titres, noms de plats
- **Body** : DM Sans (Regular/Medium) — descriptions, prix, labels
- **Accent** : DM Sans (Light Italic) — citations, taglines

### Brand Voice
Headlines : poétiques, évocateurs, jamais génériques
- "Where the Bosphorus meets your table"
- "Each plate tells a century of flavour"
CTAs : invitants, jamais agressifs — "Reserve your evening" / "Discover the menu"

### Wordmark & Logo
Monogramme "B&C" stylisé avec arabesques ottomanes, en or sur fond sombre. Jamais le nom en fonte standard.

### Signature Brand Color
**Or Ottoman #C9A84C** — inimitable, chaud, royal.
