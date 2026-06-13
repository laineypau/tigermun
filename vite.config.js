import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from the tigermun.com custom domain root via GitHub Pages.
  base: '/',
  plugins: [react()],
})
