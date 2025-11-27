# PR: Portfolio Polish & Dark Theme Enhancements

## Summary
This PR implements a comprehensive polish of the portfolio website, focusing on a premium dark-first theme, enhanced animations, and content updates.

## Changelog

### Global Styles & Theme
- Updated `app/globals.css` with a refined dark color palette (`#0b0f16` background, neon accents).
- Added custom Tailwind utilities: `.glass-card`, `.btn-accent`, `.text-glow`, `.skeleton`.
- Implemented accessible focus outlines and reduced-motion support.
- Configured `ThemeToggle` to persist user preference and correctly toggle the `.light` class.

### Layout & Navigation
- Moved `Navbar` and `Footer` to `app/layout.tsx` for persistence.
- Added `PageWrapper` with `AnimatePresence` for smooth page transitions.
- Updated metadata for SEO (Title, Description, JSON-LD).

### Sections
- **Hero**: Added animated headline, background glow effects, and "Download Resume" CTA.
- **Projects**: Updated with 6 specific projects, lazy-loading thumbnails, skeleton states, and "Live/Code" links.
- **Experience**: Added timeline for VCODEZ internship and Freelance work.
- **Certifications**: Updated with Red Hat, AWS, and Cisco certifications.
- **Contact**: Implemented form validation, rate limiting, and API integration (`/api/contact`).

### Assets
- Added `public/Dinesh_Combined_Resume.pdf` (placeholder).
- Added project thumbnails in `public/thumbnails/`.

### Tech Stack
- Added `framer-motion` for animations.
- Added `clsx` for class merging.
- Added `lucide-react` for icons.

## How to Run
1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

## Environment Variables
No specific environment variables are required for the current build. The contact form logs to console by default.
