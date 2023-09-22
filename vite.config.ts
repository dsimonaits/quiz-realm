import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteCompressionPlugin from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/quiz-realm",
  plugins: [react(), ViteCompressionPlugin()],
  build: {
    outDir: "build",
  },
});
