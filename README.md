# Aaron Nathanael — Portfolio

A minimalist, high-performance personal portfolio website built with Astro. Designed to emphasize clean typography, strict structural alignment, and zero visual clutter.

## Overview

This static site maps professional experience, academic achievements, and technical projects. It is engineered for maximum speed and efficiency, utilizing vanilla web technologies and component-based routing.

## Key Features

* **Zero-FOUC Theming:** Real-time Light/Dark theme toggling utilizing an inline head-script to completely prevent Flash of Unstyled Content (FOUC). It automatically detects the user's OS-level `prefers-color-scheme` and falls back gracefully to a true Light Mode. User preference is persisted locally via `localStorage`.
* **Internationalization (i18n):** Full tri-lingual support (English, Bahasa Indonesia, Japanese). Automatically detects the user's OS/browser language on the first load and persists user preferences persistently without requiring a page reload.
* **Interactive 2D Physics:** The "Technical Skills" container acts as a zero-gravity physics environment powered by `matter.js`. Computations automatically pause when off-screen and the engine strictly honors `prefers-reduced-motion` to completely bypass loading on older or low-power devices, preserving CPU resources.
* **Command Prompt Terminal:** A hidden, fully interactive terminal emulator (accessed via the UI toggle or by pressing `/`). It mimics the Windows Command Prompt and accepts targeted queries (`help`, `about`, `skills`, `projects`, `resume`, `contact`) to output dynamically localized data payloads.
* **Hardware-Accelerated Lightbox:** Integrated modal pop-ups for high-resolution certificate and image viewing. Features FLIP-style animations (expanding smoothly from the original thumbnail's exact coordinates) and uses `translate3d` for lag-free, hardware-accelerated dragging, panning, and zooming.
* **Scroll Restoration:** Session storage tracking guarantees precise vertical scroll positioning when navigating back from deep project pages.

## Development Commands

All commands are executed from the root directory:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs project dependencies |
| `npm run dev` | Starts the local development server at `localhost:4321` |
| `npm run build` | Compiles the production site into the `./dist/` directory |
| `npm run preview` | Previews the local production build |

## Technical Stack

* **Framework:** Astro
* **Styling:** Pure CSS (CSS Variables, Flexbox, CSS Grid)
* **Interactivity:** Vanilla JavaScript
* **Physics Engine:** Matter.js (fetched via CDN, loaded strictly deferred)
* **Typography:** Inter & Montserrat (Google Fonts)

## License

(c) 2026 Aaron Nathanael. All rights reserved.
