# InnovativeIT Solutions Website

Premium, conversion-focused website for **InnovativeIT Solutions**, built with Next.js App Router, TypeScript, Tailwind CSS, and shadcn/ui components.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization Notes

- **Branding & Content**: Update content in the page files under `app/` and shared data in `lib/data.ts`.
- **WhatsApp Number**: Update the placeholder number in `components/whatsapp-float.tsx`.
- **Email Address**: Update the contact email in `app/contact/page.tsx`.
- **Form Storage**: Contact form submissions are stored locally in `data/submissions.json` by the API route at `app/api/contact/route.ts`.
- **Images**: Replace placeholder visuals in `public/images/placeholder.svg` with your own assets.

## Features

- Responsive, mobile-first layout
- SEO-friendly metadata per page
- Conversion-focused CTAs and contact form
- Portfolio and services sections with reusable components

## Project Structure

- `app/` – Next.js App Router pages and API routes
- `components/` – UI and shared components
- `lib/` – Shared data and utilities
- `public/` – Static assets
