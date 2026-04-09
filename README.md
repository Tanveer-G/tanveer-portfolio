# Tanveer H. — Portfolio (Next.js)

Portfolio site converted from the original single-file HTML into a production-ready Next.js application using the App Router.

**Stack:** Next.js 15 · Tailwind CSS 3 · GSAP · Three.js · Brevo API

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your real values (see below)

# 3. Start the dev server
npm run dev
# → http://localhost:3000
```

---

## Environment Variables

Create `.env.local` in the project root:

```env
# Get your API key from app.brevo.com → Account → SMTP & API → API Keys
BREVO_API_KEY=xkeysib-YOUR-REAL-KEY-HERE

# The email address where contact form messages are delivered
RECIPIENT_EMAIL=you@yourdomain.com

# Must be a verified sender in your Brevo account
BREVO_SENDER_EMAIL=noreply@yourdomain.com
BREVO_SENDER_NAME=Tanveer Portfolio
```

The contact form runs in **demo mode** (logs to console, returns fake success) until `BREVO_API_KEY` contains a real key.

---

## Replacing Placeholder Images

All 9 project cards use Picsum placeholder images. To use your own screenshots:

1. Add your images to `/public/images/` — e.g. `docuchat-ai.png`
2. Open `lib/data/projects.ts`
3. Replace each `img` value:

```ts
// Before
img: 'https://picsum.photos/400/200?random=11',

// After
img: '/images/docuchat-ai.png',
```

Images use `next/image` with automatic optimisation (WebP, lazy loading, blur placeholder).

---

## Adding Your Resume

1. Place your PDF at `public/tanveer-h-resume.pdf`
2. Open `components/client/Resume.tsx`
3. Update the `href` and remove the `onClick` handler:

```tsx
// Before
<a href="#" download="tanveer-h-resume.pdf" onClick={handleClick}>

// After
<a href="/tanveer-h-resume.pdf" download="tanveer-h-resume.pdf">
```

---

## Updating Social Links

Edit `lib/data/constants.ts`:

```ts
export const SITE = {
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  twitter: 'https://twitter.com/your-handle',
  email: 'you@yourdomain.com',
}
```

---

## Project Structure

```
tanveer-portfolio/
├── app/
│   ├── layout.tsx          Root layout — metadata, fonts, global CSS
│   ├── page.tsx            Main page — imports all sections
│   ├── globals.css         Tailwind + all custom styles
│   └── api/contact/
│       └── route.ts        POST endpoint → Brevo email API
│
├── components/client/
│   ├── Nav.tsx             Sticky nav + mobile hamburger
│   ├── Cursor.tsx          Custom cursor dot + ring
│   ├── SmoothScroll.tsx    Lenis-style RAF smooth scroll shim
│   ├── ThreeBackground.tsx Three.js particle field (hero only)
│   ├── Hero.tsx            Hero with GSAP entrance + audio intro
│   ├── Marquee.tsx         Infinite tech stack ticker
│   ├── About.tsx           "Why hire me?" cards
│   ├── Experience.tsx      Tabbed experience with achievements
│   ├── Projects.tsx        Skill search + highlighted badges
│   ├── Skills.tsx          Category-filtered skill grid + tooltips
│   ├── Impact.tsx          Animated counters + degree
│   ├── Contact.tsx         Form → /api/contact
│   ├── Resume.tsx          PDF download button
│   ├── Footer.tsx          Social links + copyright
│   └── Toast.tsx           Toast notification
│
├── lib/
│   ├── data/
│   │   ├── projects.ts     All 9 projects — edit here
│   │   ├── skills.ts       All 27 skills — edit here
│   │   └── constants.ts    Site config, stat pills, degree
│   └── utils/
│       └── gsapAnimations.ts  useScrollReveal, useCounter hooks
│
└── public/
    └── images/             Add project screenshots here
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## Key Design Decisions

| Decision | Reason |
|---|---|
| All GSAP/Three.js behind `dynamic(..., {ssr:false})` | Avoids `window is not defined` SSR errors |
| GSAP imported dynamically inside `useEffect` | Tree-shaking + no SSR issues with ScrollTrigger |
| Lenis-style RAF shim kept (not npm lenis) | Works without extra install; integrates with `ScrollTrigger.update()` identically |
| `next/image` for all project cards | Automatic WebP, lazy load, CLS prevention |
| Brevo API key server-side only (no `NEXT_PUBLIC_`) | Key never exposed to browser bundle |
| All content in `lib/data/` | Single source of truth — update one file, never touch components |
