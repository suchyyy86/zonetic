# Zonetic — Architekti Vaší Digitální Budoucnosti

Webová prezentace agentury [Zonetic](https://zonetic.cz) — tvoříme moderní webové stránky na míru, UI/UX a grafický design.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **Deploy**: Vercel (GitHub integration)

## Development

```bash
# Instalace závislostí
npm install

# Vývojový server (http://localhost:3000)
npm run dev

# Produkční build
npm run build

# Náhled buildu
npm run preview

# Lint
npm run lint

# Testy
npm run test
```

## Struktura projektu

```
src/
├── assets/          # Obrázky a ilustrace
├── components/
│   ├── ui/          # shadcn/ui komponenty
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── WhyZonetic.tsx
│   ├── Services.tsx
│   ├── ExpertHelp.tsx
│   ├── FAQ.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
├── lib/             # Utility funkce
├── hooks/           # Custom React hooks
├── index.css        # Globální styly + Tailwind
└── main.tsx         # Entry point
```

## Deploy

Projekt je automaticky deployován na Vercel při push do `master` branch.
