# Zonetic

Marketingovy web agentury Zonetic zamereny na tvorbu premiovych webu na miru.

Live: [https://zonetic.cz](https://zonetic.cz)

## Co projekt obsahuje

- Landing page s hladkou navigaci mezi sekcemi
- Kontaktni formular odesilany pres serverless endpoint (`/api/contact`)
- Ochrana osobnich udaju na samostatne route (`/ochrana-udaju`)
- Cookie consent lista (accept/reject) s podminenym nacitanim analytiky
- SEO zaklad: title, meta description, Open Graph, Twitter card, sitemap, robots
- OG image v `public/og-image.png`

## Tech stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS + shadcn/ui
- Framer Motion
- React Router
- Vercel Analytics + Speed Insights (az po souhlasu)
- Resend (odeslani poptavky e-mailem)

## Spusteni lokalne

```bash
npm install
npm run dev
```

Vyvojovy server bezi na `http://localhost:3000`.

## Script prikazy

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test
npm run test:watch
```

## Environment variables

Env soubory nejsou v repozitari. Promenne jsou nastavene primo ve Vercel projektu.

Pro lokalni beh je nastav v shellu nebo vlastnim `.env.local` souboru:

- `RESEND_API_KEY` (required) - API klic pro Resend
- `CONTACT_EMAIL` (optional) - cilovy e-mail pro poptavky (default `kontakt@zonetic.cz`)

## Struktura projektu

```text
api/
	contact.ts                # Serverless endpoint pro formular
public/
	favicon.png
	og-image.png
	robots.txt
	sitemap.xml
src/
	assets/
	components/
		ContactSection.tsx
		CookieConsent.tsx
		ErrorBoundary.tsx
		FAQ.tsx
		Footer.tsx
		Header.tsx
		Hero.tsx
		Services.tsx
		WhyZonetic.tsx
		ui/
	lib/
		cookie-consent.ts
		utils.ts
	pages/
		Index.tsx
		NotFound.tsx
		PrivacyPolicy.tsx
	App.tsx
	index.css
	main.tsx
```

## Bezpecnost a soukromi

- Endpoint validuje vstupy (`name`, `email`, `message`, volitelne `phone`, `company`)
- Zakladni anti-spam honeypot pole (`website`)
- HTML escaping vstupu pred vlozenim do e-mailove sablony
- Cookie consent se uklada do `localStorage` s expiraci

## Deploy

Repo je pripraveny pro nasazeni na Vercel. Pri deployi nastav environment variables:

- `RESEND_API_KEY`
- `CONTACT_EMAIL` (volitelne)
