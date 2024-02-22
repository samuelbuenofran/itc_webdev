import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3002,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
