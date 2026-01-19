# DTPS - Dietitian Poonam Sagar (Next.js App)

A modern, production-ready Next.js application with TypeScript and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Poppins (Google Fonts via next/font)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Navigate to the nextjs-app directory
cd nextjs-app

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx          # Root layout with Navbar & Footer
│   ├── page.tsx             # Home page
│   ├── globals.css          # Global styles & Tailwind directives
│   ├── weight-loss/
│   │   └── page.tsx
│   ├── pcod/
│   │   └── page.tsx
│   ├── plans/
│   │   ├── wedding/
│   │   │   └── page.tsx
│   │   └── therapeutic/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   └── appointment/
│       └── page.tsx
├── components/
│   ├── Navbar.tsx           # Navigation with dropdown
│   ├── Hero.tsx             # Home hero section
│   ├── Footer.tsx           # Footer component
│   ├── PageHero.tsx         # Reusable page hero
│   └── ui/
│       └── Button.tsx       # Reusable button component
├── tailwind.config.ts       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section |
| `/weight-loss` | Weight loss programs |
| `/pcod` | PCOD management |
| `/plans/wedding` | Wedding plan |
| `/plans/therapeutic` | Therapeutic plan |
| `/contact` | Contact form |
| `/blog` | Blog listing |
| `/appointment` | Book appointment |

## Theme Colors

Configured in `tailwind.config.ts`:

- **Primary:** `#0d4043` (Dark Teal)
- **Accent:** `#f57c00` (Orange)
- **Teal:** `#00a19a`

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Features

- ✅ Fully responsive (mobile-first)
- ✅ SEO optimized with metadata
- ✅ Accessible navigation with keyboard support
- ✅ Dropdown menu (desktop & mobile)
- ✅ Smooth animations
- ✅ Image optimization with next/image
- ✅ Type-safe with TypeScript
