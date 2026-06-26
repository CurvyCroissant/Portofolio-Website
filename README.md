# Aaron Nathanael — Portfolio

A minimalist, high-performance personal portfolio website built with Astro. Designed to emphasize clean typography, strict structural alignment, and zero visual clutter.

## Overview

This static site maps professional experience, academic achievements, and technical projects. It is engineered for maximum speed and efficiency, utilizing vanilla web technologies and component-based routing.

## Key Features

* **Light/Dark Theme:** Real-time theme toggling with user preference persisted locally via `localStorage`.
* **Interactive 2D Physics:** The "Technical Skills" container acts as a zero-gravity physics environment powered by `matter.js`. Computations automatically pause when off-screen to preserve CPU resources.
* **Command Prompt Terminal:** A hidden, fully interactive terminal emulator (accessed via the UI toggle or by pressing `/`). It mimics the Windows Command Prompt and accepts targeted queries (`help`, `about`, `skills`, `projects`, `resume`, `contact`) to output data payloads.
* **Scroll Restoration:** Session storage tracking guarantees precise vertical scroll positioning when navigating back from deep project pages.
* **Lightbox Architecture:** Integrated modal pop-ups for high-resolution certificate and image viewing.

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
* **Physics Engine:** Matter.js (fetched via CDN)

## License

(c) 2026 Aaron Nathanael. All rights reserved.