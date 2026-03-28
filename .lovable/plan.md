# Zonetic Landing Page (Czech Language)

The entire landing page will be in **Czech**. All text, labels, buttons, placeholders, and navigation will use Czech.

Copy the design from the refrence images as accurately as possible

## Sections & Czech Content

### 1. Header / Navbar

- Links: **Služby, O nás, FAQ, Kontakt**
- CTA: **"Kontaktujte nás"**
- Hamburger menu on mobile

### 2. Hero

- Headline: **"Architekti Vaší Digitální Budoucnosti"**
- Subtitle about Zonetic's mission in Czech
- CTA: **"Kontaktujte nás"**

### 3. Proč Zonetic (Why Zonetic)

- Title: **"Proč si vybrat Zonetic?"**
- 6 cards: Důvěryhodné služby, Inovativní řešení, Jasná komunikace, Odbornost v oboru, Kompletní kontrola projektu, Dodání včas

### 4. Naše Služby (Our Services)

- Title: **"Posilujeme vaši vizi chytrými řešeními"**
- Services: Tvorba webových stránek, Vývoj WordPress pluginů, Tvorba vlastních šablon, Údržba WordPress stránek, UI/UX Design, Grafický design

### 5. Odborná pomoc banner

- **"Odborná pomoc kdykoli a kdekoli"**

### 6. FAQ

- Czech questions & answers about web development services

### 7. Motivational Banner + Contact

- **"Šetříme váš čas i peníze na každém kroku"**
- Form labels: Jméno, E-mail, Zpráva, **"Odeslat"**

### 8. Footer

- Sections: Zdroje (O nás, Blog, Kontakt), Služby
- Newsletter: **"Přihlaste se k odběru novinek"**, placeholder **"Váš e-mail"**, button **"Odeslat"**
- Copyright

## Technical Implementation

1. **Create components**: `Header`, `Hero`, `WhyZonetic`, `Services`, `ExpertHelp`, `FAQ`, `ContactSection`, `Footer` — all in `src/components/`
2. **Update `index.css**` with Zonetic color palette CSS variables (Baltic Blue #345F81, Platinum #EAEBED, Cool Steel #A3BAC3)
3. **Compose in `Index.tsx**` — import and render all sections
4. **Install framer-motion** for scroll animations
5. **Mobile-first** responsive design using Tailwind breakpoints
6. Generate service illustrations using AI image API, store in src/assets
7. **Uploaded images** used as decorative illustrations where matching the reference design
8. All hardcoded strings in Czech — no i18n library needed for a single-language site