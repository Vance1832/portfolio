# Personal Portfolio — Khant Zayar

My cybersecurity portfolio: a SOC workspace design with a profile, featured network project, learning journey, verified credentials, and supporting software and game development work.

**Live:** [portfolio-rho-rose-76.vercel.app](https://portfolio-rho-rose-76.vercel.app)

## Stack

- **Framework:** Next.js 16 (App Router, statically rendered homepage)
- **Styling:** Tailwind CSS v4
- **Typography:** Self-hosted IBM Plex Sans
- **Language:** TypeScript
- **Deployment:** Vercel

## Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── FeaturedProject.tsx
│   ├── Journey.tsx
│   ├── Credentials.tsx
│   ├── CertificateIcon.tsx
│   ├── Toolkit.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Icon.tsx
│   ├── Credentials.module.css
│   └── Projects.module.css
├── globals.css
├── layout.tsx
└── page.tsx
public/
├── profile-themed.png
└── projects/
    ├── whisper-of-ascension.png
    └── SOURCES.md
```

## Running Locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Run `npm run lint` and `npm run build` before publishing. The résumé navigation link currently opens an email request until a résumé PDF is supplied. Project imagery and diagram sources are documented in `public/projects/SOURCES.md`.

## Deployment

Pushes to `master` auto-deploy via Vercel (connected repository).

To deploy manually:
```bash
npm run build
vercel --prod
```
