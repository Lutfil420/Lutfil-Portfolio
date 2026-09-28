# My Portfolio

A simple portfolio website built with Next.js (App Router) and Tailwind CSS.

## Getting started

1. Unzip this folder and open it in VS Code.
2. Open a terminal in the project folder and install dependencies:

   ```bash
   npm install
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser.

## Structure

- `src/app/page.tsx` – assembles all the sections into the homepage
- `src/app/layout.tsx` – root layout, page metadata
- `src/app/globals.css` – Tailwind base styles
- `src/components/` – Navbar, Hero (Home), About, Projects, Contact, Footer

## Customize

- Replace "Your Name", the About text, project details, and the email
  address in `Contact.tsx` with your own info.
- Adjust colors/fonts via Tailwind classes or `tailwind.config.ts`.

## Deploy

Push to GitHub and import the repo at https://vercel.com — it auto-detects
Next.js and deploys for free.
