# Portfolio Website of Varun M Bharadwaj

This repository contains the source code for my personal portfolio website, showcasing my skills, projects, and educational background as a full-stack developer. The website is designed to be a central hub for my professional presence online.

(https://vmb.indevs.in/)

### [View Live Demo](https://vmb.indevs.in/)

---

## 🚀 Features

* **Single-column layout:** narrow centered column with hairline rails and hatch dividers, monochrome zinc palette.
* **Multi-language hello:** a handwritten "hello" draws itself in the cover banner, then cycles through greetings in other languages (Spanish, French, Hindi, Italian, Kannada, Japanese, Portuguese, German).
* **Shimmering headings, glow cards** for the stack, collapsible experience and project rows.
* **Auto-calculated experience badge** that counts distinct months across all roles.
* **Light/dark theme** with a circle-blur reveal, saved across visits.
* **Accessible:** keyboard friendly, visible focus rings, every animation respects `prefers-reduced-motion`.
* **SEO:** metadata, generated Open Graph image, sitemap, robots and JSON-LD.

All content lives in `src/data/profile.ts`.

---

## 🛠️ Tech Stack

* [Next.js](https://nextjs.org/) (App Router) + TypeScript
* [Tailwind CSS v4](https://tailwindcss.com/) and shadcn/ui-style components on Radix
* [Motion](https://motion.dev/) for the hello drawing
* next-themes, lucide-react, Geist font
* Hosted on [Vercel](https://vercel.com/)

---

## ⚙️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.
* npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone [https://github.com/V-M-B/Portfolio.git](https://github.com/V-M-B/Portfolio.git)
    ```
2.  Navigate to the project directory
    ```sh
    cd Portfolio
    ```
3.  Install NPM packages
    ```sh
    npm install
    ```
4.  Run the development server
    ```sh
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

---

## 🙏 Acknowledgements

* Icons from [Lucide](https://lucide.dev/)
* Hosting by [Vercel](https://vercel.com/)
