import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    proxy: {
      "/api": {
        target: "http://localhost:8112",
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      "@/components": "/src/components",
      "@/utils": "/src/utils",
      "@/hooks": "/src/hooks",
    },
  },
});
