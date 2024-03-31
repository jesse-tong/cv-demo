import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://jesse-tong.github.io/cv-demo",
  build: {
    outDir: "build"
  }
});
