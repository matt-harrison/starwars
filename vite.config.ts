import { defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: "inline",
  },
  plugins: [],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
