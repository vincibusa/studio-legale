# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A modern Next.js 15 website for "Studio Legale Jessica Fici" - a law firm specializing in immigration, family law, tax law, criminal law, and debt recovery. Built with TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Development Commands

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

## Architecture & Structure

### Core Technologies
- **Next.js 15** with App Router (RSC)
- **TypeScript** with strict mode
- **Tailwind CSS v4** with custom stone/amber color scheme
- **shadcn/ui** component system with Radix UI primitives
- **Framer Motion** for animations
- **Leaflet** for interactive maps
- **Lucide React** for icons

### Key Directories
```
src/
├── app/                    # App Router pages
│   ├── aree-di-attivita/   # Dynamic service pages
│   ├── contatti/          # Contact page with form
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx          # Homepage
├── components/
│   ├── home/             # Homepage sections
│   ├── ui/              # shadcn/ui components
│   └── utils/           # Component utilities
├── lib/
│   ├── services.ts      # Service definitions & content
│   └── utils.ts         # Helper functions (cn)
└── hooks/
    └── use-media-query.ts
```

### Content Architecture
- **services.ts**: Defines all legal services with structured content, features, CTAs
- **Dynamic routing**: `/aree-di-attivita/[slug]` generates pages from services array
- **Static generation**: Uses `generateStaticParams()` for service pages
- **Rich content**: HTML content with icons, structured data, and CTAs

### Styling System
- **Fonts**: Cormorant Garamond (serif) + Montserrat (sans-serif)
- **Colors**: Stone palette (50-900) + amber accents (800-900)
- **Design tokens**: CSS variables for consistent theming
- **Responsive**: Mobile-first with custom breakpoints

### Service Page Structure
Each service includes:
- Hero section with dynamic background
- Feature cards with icons
- Rich content sections
- CTAs with phone integration
- Contact form integration

### Contact System
- **Form**: Multi-step contact form with service selection
- **Map**: Interactive Leaflet map with office locations
- **CTAs**: Phone integration and email links throughout

### Deployment
- **Platform**: Vercel optimized
- **Images**: External domains configured (unsplash, pexels, googleusercontent)
- **Performance**: Turbopack enabled for development