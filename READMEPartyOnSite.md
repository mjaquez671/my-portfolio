# Party On Site

Party On Site is a Vite + React + TypeScript experience builder for events like bachelorette and bachelor weekends. The app hydrates itself from a Lambda-backed API, adapts its look-and-feel based on the event theme, and exposes sharable assets such as weekend cards, QR codes, and crew bios. This README documents the architecture so you can showcase the project in your portfolio or hand it off to collaborators.

## Why it exists

- **Configurable storytelling:** Event hosts define all hero text, highlights, itinerary items, crew members, and CTA copy in DynamoDB. The frontend renders those payloads without redeploying.
- **Dual themes:** A single codebase powers “ladies” and “boys” variants (and future themed experiences) by reading the `theme` metadata returned by the API.
- **Share-ready artifacts:** Visitors can download a pre-composed weekend card, open QR modals for “buy a drink” flows, or share individual crew profiles.
- **Cross-navigation between events:** If an event references a `coEvent` slug (e.g., the bachelor party that runs alongside the bachelorette), the UI exposes a normalized link to the sibling experience.

---

## Architecture overview

### Stack

| Layer            | Details                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------- |
| Build tooling    | [Vite](https://vitejs.dev/) with TypeScript, React 18, React Router DOM 6                   |
| Styling          | Custom CSS (no framework) with theme modifiers (`ladies` vs `boys`)                         |
| Data fetching    | `fetch` via a custom hook (`usePartyInfo`) hitting `VITE_EVENTS_API_BASE` + slug            |
| Image capture    | [`html-to-image`](https://github.com/bubkoo/html-to-image) to export the weekend share card |
| Hosting ready    | Static files from `dist/` (works on S3/CloudFront, Netlify, Vercel, etc.)                   |

### Directory structure (high level)

```
src/
├─ App.tsx                # Router configuration
├─ data/party.ts          # Template/fallback content and TypeScript types
├─ hooks/
│  ├─ usePartyInfo.ts     # Fetch + normalize API payloads, theme control, status
│  ├─ useShareImage.ts    # Handles PNG export for the hidden weekend card
│  └─ useThemeClass.ts    # Toggles body/page classes for theme variants
└─ routes/
   ├─ Home.tsx            # Main overview page (hero, highlights, itinerary, crew, CTA, co-event)
   ├─ Bridesmaid.tsx      # Crew profile detail (works for bridesmaids or groomsmen)
   └─ Toast.tsx           # “Buy a drink” page (payment links, QR backup)
```

The `public/` directory contains static assets (QR placeholder, optimized headshots, favicons). Vite injects `index.html` as the shell; runtime metadata (title + description) updates once the API response resolves.

---

## Data flow

1. **Slug derivation**
   - `usePartyInfo` inspects the current URL to decide which slug to load. Supported patterns:
     - `/` fallback slug (from `VITE_EVENT_SLUG`)
     - `/event/:slug` (ladies default)
     - `/events/:slug` (boys default)
     - Nested routes such as `/events/:slug/bridesmaid/:id` and `/events/:slug/toast`.
2. **API request**
   - The hook issues `GET ${VITE_EVENTS_API_BASE}/${slug}`. Example payload:
     ```json
     {
       "meta": {
         "weekendName": "California Send-Off",
         "theme": "ladies",
         "heroHighlights": [...],
         "itinerary": [...],
         "drinkLinks": {...},
         "coEvent": "2026-talun-tahoe",
         "themeTagline": "Poolside disco with sun-washed pastels",
         "...": "..."
       },
       "bride": { "name": "...", "role": "Bride", "image": "..." },
       "bridesmaids": [
         { "SK": "BRIDESMAID#laura", "name": "Laura Hohl", "...": "..." }
       ]
     }
     ```
3. **Normalization**
   - `usePartyInfo` merges the payload with template defaults from `src/data/party.ts`, ensuring the UI never breaks if an attribute is missing.
   - Contribution links become display-ready labels (Venmo, Cash App, etc.), itinerary entries drop invalid rows, and each crew member derives a unique `id`.
4. **State exposure**
   - Hook returns `partyInfo`, `bride`, `bridesmaids`, `itinerary`, `eventStatus`, `eventBasePath`, `eventSlug`, `hydrated`, `displayTheme`, plus loading/error flags.
   - `displayTheme` sticks to the resolved palette during refetches so the UI doesn’t flash between styles.
5. **Rendering**
   - Each route consumes the hook:
     - `Home` drives hero content, download button, highlight grid, itinerary cards, bride panel, crew cards, CTA, co-event section, QR modal, share-card ref.
     - `Bridesmaid` lists bios and socials, shows CTA buttons, and uses router breadcrumbs.
     - `Toast` renders the payment link cards and a backup QR card.
   - Loading states respect the active theme and smooth-scroll to anchor hashes (e.g., `/…#crew`).

---

## Key features to highlight

- **Dynamic metadata:** After hydration, `Home` updates `document.title` and the `<meta name="description">` tag to match the loaded event so each slug has accurate SEO previews.
- **Theme switching:** `useThemeClass` toggles `boys-theme`/`ladies-theme` classes on the body and root containers, while CSS customizes colors for hero, panels, buttons, and modals.
- **Shareable weekend card:** A hidden `.share-previews` node renders the hero and itinerary. `useShareImage` grabs it via `html-to-image` when the user clicks “Download weekend card.”
- **QR modal:** The CTA sections include a QR card that opens a modal (click or keyboard) with accessible dismissal controls.
- **Crew navigation + slug safety:** Links generated by `buildPath` guarantee valid router paths whether you’re on `/`, `/event/:slug`, or `/events/:slug`.
- **Co-event gateway:** If the metadata includes `coEvent`, the CTA panel rewords itself based on the theme (“Peep the bachelor plans” vs “See the bridal plans”) and links to the sibling slug using the opposite base prefix (`event` ↔ `events`).

---

## Running locally

1. Install dependencies
   ```bash
   npm install
   ```
2. Set environment variables (create `.env` or `.env.local`)
   ```bash
   VITE_EVENTS_API_BASE=https://events.devworx.us/api/events
   VITE_EVENT_SLUG=2026-shibby-sandyeggo   # default slug when no path segment
   ```
3. Start the dev server
   ```bash
   npm run dev
   ```
4. Build for production
   ```bash
   npm run build
   npm run preview   # optional sanity check
   ```

> **Common troubleshooting:** If `esbuild` fails to install, delete `node_modules` and rerun `npm install`. Make sure you’re on a Node version compatible with Vite 5 (Node 18+).

---

## Deployment notes

- `npm run build` outputs static assets under `dist/`. Deploy the folder to any static host.
- Because routing relies on client-side navigation, configure your host to redirect all unmatched routes to `/index.html`.
- If you serve from S3 + CloudFront, set the error document to `index.html` (or use Lambda@Edge for custom rewriting).
- Ensure the runtime environment exposes `VITE_EVENTS_API_BASE` and optionally `VITE_EVENT_SLUG`. Static hosts like Netlify or Vercel let you define those as build-time env vars.

---

## API contract (summary)

| Field                | Type                    | Notes                                                                                     |
| -------------------- | ----------------------- | ----------------------------------------------------------------------------------------- |
| `meta.brid e`        | `string`                | Display name in hero (`{bride}'s {weekendName}`)                                          |
| `meta.weekendName`   | `string`                | Appears in hero, share card, metadata                                                     |
| `meta.dates`         | `string`                | Free-form range used in hero + share card                                                 |
| `meta.location`      | `string`                | Hero, share card, metadata                                                                |
| `meta.theme`         | `"ladies" \| "boys"`    | Controls theme variant; other strings become tagline overrides                           |
| `meta.themeTagline`  | `string` (optional)     | Displayed beside “Weekend highlights”                                                     |
| `meta.heroHighlights`| `string[]`              | Highlight cards (fallback to `meta.highlights`)                                           |
| `meta.itinerary`     | `{ day,title,detail }[]`| Panel + share card itinerary (fallback to template)                                       |
| `meta.drinkLinks`    | `Record<string, {...}>` | Normalized to CTA payment cards (Venmo, Cash App, etc.)                                   |
| `meta.coEvent`       | `string` (slug)         | Enables “What about the boys/girls?” CTA                                                  |
| `meta.qrLabel`       | `string`                | Description under QR buttons/modal                                                        |
| `meta.ctaTitle/body` | `string`                | “Buy a drink” panel copy                                                                  |
| `bride`              | Profile object          | Supports `id`, `name`, `role`, `bio`, `image`, `socials`, `vibe`                          |
| `bridesmaids`        | Array of profiles       | Works for both bridesmaids and groomsmen; `SK` or `id` drives unique slug                 |

---

## Portfolio talking points

- **Dynamic personalization:** The app shifts copy, styling, and metadata purely from the API payload. Talk about how you designed the normalization layer to keep the UI stable even when data is incomplete.
- **Accessibility considerations:** QR modals trap focus and close on `Esc`, status banners explain loading/error states, and anchor links include smooth-scrolling fallbacks.
- **Image export pipeline:** Mention the hidden DOM snapshot approach to produce Instagram-ready cards without a backend renderer.
- **Routing strategy:** Explain how you mapped multiple URL patterns to the same routes to support `event` and `events` namespaces while keeping deep links working.
- **Themable design system:** Highlight the CSS architecture that toggles colors, backgrounds, and typography through `boys-theme` vs default classes, plus how you ensured contrast for darker palettes.

Feel free to customize this README with screenshots, deployment URLs, or short Loom demos. It’s structured to help future collaborators—and hiring managers—understand the project quickly. Good luck with the portfolio! 🎉
