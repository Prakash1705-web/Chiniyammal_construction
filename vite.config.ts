import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Some shared packages resolve from the parent workspace. Keep React and
  // React DOM pinned to this application's single copy to avoid invalid hooks.
  resolve: {
    dedupe: ["react", "react-dom"],
  },
});
