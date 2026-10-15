# punarv.dev

Personal portfolio of Punarv Pawade. Next.js 15 (App Router) and Tailwind v4, fully server-rendered.

## Editing content

All copy lives in `app/data.ts` (profile, case studies, experience, side projects, skills, socials). Components in `app/components/` only handle layout.

## Design

- Palette (defined in `app/globals.css`): bone `#ECE8E1`, ink `#0F1923`, red `#FF4655`.
- Type: Big Shoulders (display) and Barlow (body), loaded with `next/font`.
- Buttons use `components/Button.tsx` (`.vbtn`): a Valorant-style split frame with a skewed hover sweep. Variants are `ghost` and `small`, and the button adapts automatically inside `.on-ink` sections.
- Keep custom CSS free of margin/padding resets on classes that also take Tailwind utilities. Unlayered CSS beats Tailwind's `@layer utilities`.

## Run

```bash
npm install
npm run dev
```
