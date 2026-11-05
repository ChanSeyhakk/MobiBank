# MobiBank

React + Vite concept site styled with Tailwind CSS. The header and footer navigate between the Home, About, Features, Security, Help, and Login pages using hash routes (for example, `/#features`). Interactive forms are local previews only; no banking or support services are connected.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/components/Navbar.jsx` – responsive site navigation
- `src/components/Hero.jsx` – home page headline and app preview
- `src/components/PhoneMockup.jsx` – CSS/React phone with the app UI
- `src/components/Pages.jsx` – About, Features, Security, Help, and Login pages
- `src/index.css` – Tailwind directives and phone mockup styles
- `tailwind.config.js` – Tailwind content paths and theme colors
