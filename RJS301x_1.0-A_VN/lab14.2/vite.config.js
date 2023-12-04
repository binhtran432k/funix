import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      {
        find: "@UI",
        replacement: path.resolve(__dirname, "src", "components", "UI"),
      },
    ],
  },
  plugins: [react()],
});
