# Touching Hope — Website

A Next.js 14 (App Router) landing page for **Touching Hope**, a nonprofit
bringing hope and healing to women and children in Los Cabos, Mexico.

Built with:

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** with a custom brand token system (`leaf`, `sun`, `tide`, `sand`, `ink`)
- **shadcn/ui**-style components (`Button`, `Card`, `Badge`, `Input`, `Separator`)
- **lucide-react** icons
- Google Fonts: **Plus Jakarta Sans** (headings/body) + **Caveat** (script accent, echoing the logo's handwritten "Hope")

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: the first build requires internet access to fetch the Google Fonts
> (`Plus Jakarta Sans`, `Caveat`) used in `app/layout.tsx`. If you're building
> in an offline/sandboxed environment, swap `next/font/google` for local
> fonts or system fonts.

## Project structure

```
app/
  layout.tsx          Root layout — fonts, metadata
  page.tsx             The landing page (composes all sections)
  globals.css          Tailwind layers + brand CSS variables
components/
  site/
    navbar.tsx          Sticky nav with mobile menu
    hero.tsx             Hero section w/ signature illustration
    coastline-illustration.tsx   Signature SVG (ocean + farm rows + palms)
    vision.tsx            Mission statement band
    pillars.tsx           5 program pillars (Education, Vocational
                           Training, Work Opportunities, Nutrition,
                           Empowerment)
    community.tsx         "Who we serve" + postcard photo
    el-pescadero.tsx       New office / 2025 expansion section
    get-involved.tsx        Donate / Volunteer / Partner cards
    newsletter.tsx           Email signup band
    footer.tsx                Footer w/ nav + contact + social
    wave-divider.tsx           Reusable section-transition wave
  ui/
    button.tsx, card.tsx, badge.tsx, input.tsx, separator.tsx
public/
  images/
    logo.png              Touching Hope logo (uploaded asset)
    hero-postcard.png       "Bringing Hope & Healing" promo graphic
    el-pescadero.png         "Tocando la Esperanza" El Pescadero graphic
```

## Design system

| Token   | Hex       | Use                              |
| ------- | --------- | --------------------------------- |
| leaf-800| `#1F5C42` | Primary brand green               |
| leaf-950| `#0F2B1E` | Deep green section backgrounds    |
| sun-600 | `#E2760F` | Primary orange / CTAs             |
| sun-400 | `#F4A94A` | Orange highlights on dark bg      |
| tide-600| `#2B7A8C` | Ocean teal accent                 |
| sand-50 | `#FAF6EE` | Warm background                   |
| ink-900 | `#16241D` | Body text                         |

## Content to personalize before launch

Placeholder values that should be updated with real information:

- Footer email address (`hello@touchinghope.org`)
- Social links (Facebook / Instagram `href="#"`)
- Newsletter form currently only shows a local success state — wire it up
  to your email provider (Mailchimp, ConvertKit, etc.) or an API route.
- "Donate" button links to the on-page Get Involved section — connect it
  to your real donation processor when ready.
