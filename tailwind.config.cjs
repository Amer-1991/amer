/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Nuqta brand — white/purple
        ink: "#0A0A0F",
        paper: "#FAFAFA",
        purple: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
        mist: "#F3F4F6",
        muted: "#6B7280",
        hairline: "#E5E7EB",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(139, 92, 246, 0.08)",
        lift: "0 20px 60px -10px rgba(139, 92, 246, 0.25)",
        glow: "0 0 80px -10px rgba(139, 92, 246, 0.4)",
      },
      screens: {
        xs: "450px",
      },
      fontFamily: {
        ar: ['"Tajawal"', "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Tajawal"', "system-ui", "sans-serif"],
      },
      animation: {
        "blob-slow": "blob 18s ease-in-out infinite",
        "blob-medium": "blob 14s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        marquee: "marquee 40s linear infinite",
        "pulse-ring": "pulseRing 2.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.8)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(1.6)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(139, 92, 246, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(139, 92, 246, 0.06) 1px, transparent 1px)",
        "radial-purple":
          "radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15), transparent 60%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
    },
  },
  plugins: [],
};
