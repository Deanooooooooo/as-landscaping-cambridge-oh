# QA - A&S Landscaping

## Local Build

- `npm run build`: PASS.
- `npm run build:github`: PASS.
- Premium stack present: Next, React, motion, GSAP ScrollTrigger, Lenis, lucide-react.
- One H1: PASS.
- One primary form: PASS.
- Hero form/checklist present: PASS.
- Map iframe: intentionally omitted because no exact address/map listing was verified.
- Public copy grep for rejected Facebook/review/source phrases: PASS.
- Phone route present: `740-801-2718`.
- No fake email, exact address, reviews, awards, guarantees or project claims: PASS.

## Visual QA

- Desktop hero/form screenshot: `qa-desktop-hero.png`.
- Mobile hero/form screenshot: `qa-mobile-hero.png`.
- Desktop horizontal gallery start screenshot: `qa-desktop-gallery-start.png`.
- Desktop horizontal gallery scrolled screenshot: `qa-desktop-gallery-scrolled.png`.
- Mobile contact screenshot: `qa-mobile-contact.png`.
- Gallery movement check: PASS, track transform changed during scroll.

## Live QA

- GitHub Pages status: built.
- Live URL: `https://deanooooooooo.github.io/as-landscaping-cambridge-oh/`.
- Live HTML 200: PASS.
- Live CSS 200: PASS.
- Live hero image 200: PASS.
- Live `.nojekyll` 200: PASS.
- Live one H1 / one form / zero iframes: PASS.
- Live phone route present: PASS.
- Live rejected phrase grep: PASS.
- Live desktop hero screenshot: `qa-live-desktop-hero.png`.
- Live mobile hero screenshot: `qa-live-mobile-hero.png`.
- Live horizontal gallery start screenshot: `qa-live-gallery-start.png`.
- Live horizontal gallery scrolled screenshot: `qa-live-gallery-scrolled.png`.
- Live gallery movement check: PASS, track transform changed during scroll.
