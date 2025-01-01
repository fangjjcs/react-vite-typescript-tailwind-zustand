import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": path.join(__dirname, "../shared/"),
      "@": path.join(__dirname, "src/"),
    },
  },
})
