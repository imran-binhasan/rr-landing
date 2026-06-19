# RR Landing

A modern recruitment landing page built with React and Tailwind CSS. Features a polished UI, fully responsive layout, smooth animations, and a clean component architecture.

---

## Live Demo

**URL:** https://remoterecruit-landing.vercel.app

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```bash
git clone <repo-url> rr-landing
cd rr-landing
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### Production Build

```bash
npm run build
npm run preview
```

---

## Tech Stack

| Category | Library |
|---|---|
| Framework | React 19 |
| Bundler | Vite |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Scrolling | Lenis (smooth scroll) |
| Icons | React Icons |
| Deployment | Netlify |

---

## Features

- Fully responsive — desktop, tablet, mobile
- Sticky navigation with scroll-aware styling
- Smooth scrolling via Lenis
- Scroll-to-top button
- Animated section reveals (Framer Motion)
- Pricing comparison cards (Free / Premium)
- Expandable FAQ section
- Social media integration
- Image lazy loading
- Accessible markup (ARIA labels, semantic HTML)

---

## Project Structure

```
src/
├── assets/
│   └── images/          # Static image assets
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, Features, CTA, FAQ
│   └── ui/              # Container, ScrollTop
├── hooks/               # Custom hooks (useSmoothScroll)
├── utils/               # Utility functions (scroll helpers)
├── pages/
│   └── home.jsx         # Main page assembly
├── app.jsx              # Root component
├── main.jsx             # Entry point
└── index.css            # Global styles + Tailwind
```

---

## Known Limitations

- FAQ content is placeholder text — replace with production copy.
- Social links point to platform homepages — update with official profiles.
- Static landing page only — no backend or auth.
- Lighthouse scores may vary by environment.

---

## Author

**imran-binhasan** — imranbinhasan.work@gmail.com
