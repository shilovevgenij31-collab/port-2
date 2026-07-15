# Evgenii Tolstikov — Portfolio

Personal portfolio site built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/data/site.ts` — single source of truth for all copy, navigation, and project data.
- `src/components/layout` — header, mobile navigation, footer.
- `src/components/sections` — page sections in the order they render.
- `src/components/project-visuals` — decorative, NDA-safe abstract visuals for the Selected Work cards.
- `src/components/hero` — decorative hero visual.
- `src/app/api/contact` — contact form submission endpoint (requires `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` env vars to actually send email; without them it returns a safe 500 with an explanatory message).

## Environment variables

Copy `.env.example` to `.env.local` and fill in values if you want the contact form to send real emails.
