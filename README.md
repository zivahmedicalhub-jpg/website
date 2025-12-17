# Zivah Medical Hub

![Zivah Medical Hub Logo](/public/Brand_logo_Zivah.png)

**Zivah Medical Hub** is a premium B2B medicine, surgical, and medical supplies distribution platform designed for hospitals, clinics, pharmacies, and healthcare partners. Our application streamlines the entire medical supply chain, enabling seamless product discovery, bulk ordering, and secure transactions.

---

## 🚀 Features

- **Comprehensive Product Catalog**: Browse a wide range of medicines, surgical equipment, and wellness products.
- **B2B Focused**: Tailored specifically for healthcare institutions and pharmacies.
- **Seamless Ordering**: Easy bulk ordering system with streamlined checkout.
- **Responsive Design**: Fully optimized specifically for desktop and mobile devices.
- **Interactive UI**: Smooth animations and transitions powered by Framer Motion.
- **Contact Integration**: Direct communication channels via integrated contact forms (EmailJS).

## 🛠️ Tech Stack

This project is built with a modern, high-performance technology stack:

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Vanilla CSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/) (Icons)
- **Form Handling**: [EmailJS](https://www.emailjs.com/)

## 📦 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1.  **Clone the repository** (if applicable) or navigate to the project directory:
    ```bash
    cd zivah
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

4.  **Open your browser**:
    Navigate to `http://localhost:5173` (or the URL shown in your terminal).

## 📜 Scripts

| Script | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with HMR (Hot Module Replacement). |
| `npm run build` | Builds the application for production to the `dist` folder. |
| `npm run preview` | Locally previews the production build. |
| `npm run lint` | Runs ESLint to check for code quality issues. |

## 📁 Project Structure

```text
zivah/
├── public/              # Static assets (Logos, robots.txt, etc.)
├── src/
│   ├── components/      # Reusable React components (Header, Hero, etc.)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # Main HTML file (SEO meta tags here)
├── package.json         # Project dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🔒 Security

This application implements standard security practices:
- **Content Security Policy (CSP)**: Configured in `index.html` to prevent XSS.
- **Environment Variables**: Sensitive keys (like EmailJS keys) should be stored in `.env` files (not committed to version control).

---

© 2025 Zivah Medical Hub. All rights reserved. | Developed by **Praveen Satyamsetti**
