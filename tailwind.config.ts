import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        karla: ["var(--font-karla)"],
        kh: ["var(--font-hanuman)"],
      },
      fontSize: {
        // General / Home page
        nav: "1.125rem", // 18px
        hero: "5.625rem", // 90px
        h2: "3rem", // 48px
        h3: "2.25rem", // 36px
        h4: "1.25rem", // 20px
        p: "1.25rem", // 20px
        // Cards
        "card-h3": "1.25rem", // 20px
        "card-sub": "0.875rem", // 14px
        "card-text": "1rem", // 16px
        // Product Card
        "product-card-h3": "2.25rem", // 36px
        "product-card-text": "1rem", // 16px
        // Footer
        "footer-title": "1.25rem", // 20px
        "footer-text": "1rem", // 16px
        // FAQs
        "faq-h1": "3rem", // 48px
        "faq-subtitle": "2.25rem", // 36px
        "faq-text": "1.25rem", // 20px
        "faq-acc-title": "1.125rem", // 18px
        "faq-acc-text": "1rem", // 16px
        // Product details page
        "product-title": "1.625rem", // 26px
        "product-sub": "1rem", // 16px
        "product-text": "1rem", // 16px
        // About page
        "about-hero": "4.5rem", // 72px
        "about-h2": "4rem", // 64px
        "about-card-h3": "3rem", // 48px
        "about-card-text": "0.75rem", // 12px
        // History card
        "history-card-title": "1.4375rem", // 23px
        "history-card-text": "1rem", // 16px
      },
      colors: {
        primary: "#00B0D7", // Light blue
        "brand-orange": "#F04923", // Bright orange
        "beige-light": "#FFF7E9", // Very light beige
        "beige-medium": "#FFE2A9", // Medium beige
        "yellow-dark": "#F1A91E", // Dark yellow
        "mint-light": "#CEEDD7", // Light mint green
        "mint-blue": "#CFE8EE", // Light blue-mint
        "green-brand": "#34AD8B", // Teal green
      },
      maxWidth: {
        bloc: "1280px",
      },
    },
  },
  plugins: [],
};

export default config; 