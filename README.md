# ProCredit Bank — Website UI kit

A pixel-close recreation of ProCredit Bank Ukraine's term-deposit landing page.

## Files

- `index.html` — the assembled, interactive page
- `styles.css` — page-level styles built on top of `colors_and_type.css`
- `Header.jsx` — red bar with logo + UK/EN toggle
- `Hero.jsx` — red rounded card + paired flat-lay photo
- `RatesGrid.jsx` — five term/rate tiles (best/good/plain tints)
- `Calculator.jsx` — interactive slider + term chips + live income calculation
- `StepsBar.jsx` — three numbered onboarding steps
- `Benefits.jsx` — two-column benefit cards
- `PromoCTA.jsx` — late-page red banner with QR + phone product photo
- `FAQ.jsx` — accordion of FAQ items
- `Legal.jsx` — material characteristics + warning blocks
- `Footer.jsx` — red footer band with phones, app stores, socials

## What's interactive

- Drag the calculator slider — amount, gross/net income, tax line all recompute
- Click a term chip — recomputes against the selected term and rate
- Click any FAQ row — expands its answer

## What's faked

- The "Open deposit" CTA does nothing
- QR codes are decorative (deterministic black/white grid) — replace with real SVGs as needed
- App store badges are CSS recreations, not the official badge artwork
- The footer's phone product photo reuses the hero photo as a placeholder
