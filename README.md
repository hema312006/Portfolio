# hemalatha-reddy-portfolio

Personal portfolio website for K. Hemalatha Reddy — AI/ML Engineer, built with Next.js 14 (App Router), Tailwind CSS, and TypeScript.

## Overview

A production-grade dark-themed portfolio designed for an AI/ML engineering profile. Showcases 5 ML/AI projects, internship experience, certifications, and contact info. Features:

- Cursor glow ambient effect
- Intersection Observer scroll reveals
- Typewriter role animation on hero
- Animated skill bars
- Fully responsive (mobile-first)
- Dark mode only (dark aesthetic by design)
- No external dependencies beyond Next.js + Tailwind

## Sections

| Section | Description |
|---------|-------------|
| Hero | Name, animated role typewriter, tagline, key stats |
| About | Bio, education, research interests, certifications |
| Projects | 5 projects — 3 featured with impact bullets, 2 compact |
| Experience | Internship, Microsoft club, GSSoC open source |
| Skills | Skill bars by category, soft skills, languages |
| Contact | Email CTA + social links |

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/hema312006/hemalatha-reddy-portfolio.git
cd hemalatha-reddy-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript
- **Fonts**: Syne (display) + DM Sans (body) + JetBrains Mono (code) via Google Fonts
- **Animations**: Pure CSS keyframes + Intersection Observer API

## Project Structure

```
app/
├── layout.tsx          # Root layout with metadata
├── page.tsx            # Main page composition
├── globals.css         # CSS variables, animations, utilities
├── components/
│   ├── Nav.tsx         # Sticky nav with mobile menu
│   ├── Footer.tsx      # Minimal footer
│   ├── CursorGlow.tsx  # Ambient cursor radial glow
│   └── ScrollReveal.tsx # Intersection Observer setup
└── sections/
    ├── Hero.tsx        # Hero with typewriter + stats
    ├── About.tsx       # Bio + education + certs
    ├── Projects.tsx    # Featured + other projects
    ├── Experience.tsx  # Timeline of work + leadership
    ├── Skills.tsx      # Skill bars + languages
    └── Contact.tsx     # Contact CTA
```

## Customization

All content is co-located in the section files as plain JS arrays/objects — no CMS or external data source needed. To update:

- **Projects** → `app/sections/Projects.tsx` → edit the `projects` array
- **Experience** → `app/sections/Experience.tsx` → edit the `experiences` array  
- **Skills** → `app/sections/Skills.tsx` → edit `skillGroups`
- **Contact/links** → `app/sections/Contact.tsx`
- **Colors/theme** → `tailwind.config.js` color tokens + `app/globals.css` variables
