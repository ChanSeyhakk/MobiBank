# MobiBank

MobiBank is a modern fintech-style concept website built with React, Vite, and Tailwind CSS. It showcases a mobile-first digital banking experience with sections for About, Features, Security, Help, and Login.

This project is a front-end prototype and does not connect to any real banking system, authentication flow, or payment processing.

## Overview

- Mobile-first banking concept design
- Responsive layout for desktop and mobile screens
- Hash-based navigation between app sections
- Clean fintech UI with card-style components and mockups
- Built as a React + Vite front-end application

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- PostCSS
- JavaScript

## Language Composition

The project is primarily built with JavaScript, with React components powering the interface and app logic. The application also includes HTML for the entry page and Tailwind-based CSS for styling and responsive design.

- JavaScript: main application logic and React UI components
- HTML: page structure and app entry point
- CSS: styling via Tailwind utilities and custom component styles

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
├── README.md
└── .gitignore
```

## Features

- Hero section with digital banking branding
- Navigation bar and page sections
- About page explaining the product vision
- Features overview for everyday banking needs
- Security guidance and best-practice content
- Help center with FAQ-style search
- Login page mockup
- Modern phone UI preview

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed.

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Notes

This repository is a concept/demo interface for a banking product and is intended for front-end design and UI presentation only.

- No real accounts are connected
- No real money movement occurs
- No real authentication is implemented
- All form interactions are preview-only

## Live Demo

- https://mobibank.vercel.app

## Repository

- GitHub: https://github.com/ChanSeyhakk/MobiBank
