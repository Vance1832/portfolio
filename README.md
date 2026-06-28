# Personal Portfolio — Khant Zayar

My personal portfolio site built with Next.js 16 and Tailwind CSS, deployed on Vercel.

**Live:** [portfolio-rho-rose-76.vercel.app](https://portfolio-rho-rose-76.vercel.app)

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Deployment:** Vercel

## Structure

```
app/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ScrollReveal.tsx
├── globals.css
├── layout.tsx
└── page.tsx
public/
└── profile.jpg
```

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Pushes to `master` auto-deploy via Vercel (connected repository).

To deploy manually:
```bash
npm run build
vercel --prod
```
