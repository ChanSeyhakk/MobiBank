# MobiBank

MobiBank is a polished mobile-first banking concept website built with React, Vite, and Tailwind CSS. It presents a modern fintech landing page with sections for About, Features, Security, Help, and Login, featuring a phone mockup UI and hash-based navigation.

This project is a front-end prototype/demo and does not connect to any real banking services, authentication, or payment infrastructure.

## Overview

- Modern fintech-style homepage
- Responsive layout for desktop and mobile devices
- Hash-based page navigation (`#about`, `#features`, `#security`, `#help`, `#login`)
- Product-focused sections for benefits, security guidance, FAQs, and account preview
- Built as a fast React + Vite application

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- PostCSS
- JavaScript (ES modules)

## Project Structure

```bash
MobiBank/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pages.jsx
│   │   ├── PhoneMockup.jsx
│   │   └── StoreButtons.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── .gitignore
└── README.md
```

## Main Features

- Hero section with a digital banking concept preview
- Navigation bar and footer links
- About page explaining the product vision
- Features grid for everyday banking activities
- Security education section
- Help center with FAQ search and preview contact form
- Login page mockup with password visibility toggle
- Responsive mobile banking interface mockup

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Install dependencies

```bash
npm install
```

### Run the project locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Production Build

To create a production build:

```bash
npm run build
```

To preview the built app locally:

```bash
npm run preview
```

## Notes

This repository is a concept/demo interface for a digital bank. It is designed for visual presentation and front-end experimentation only.

- No real accounts are connected.
- No real transactions are processed.
- No data is persisted or transmitted.
- All sign-in and help form actions are preview-only.

## License

This project does not currently include a license file. If you plan to distribute or reuse it publicly, consider adding an appropriate open-source license.

## Repository

- GitHub: https://github.com/ChanSeyhakk/MobiBank
- Live demo: https://mobibank.vercel.app
