import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensure assets are correctly located in production
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Only used during development
    },
  },
});
