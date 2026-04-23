import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Cloudflare Pages serves at root; no base path needed.
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
  },
});
