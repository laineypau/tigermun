import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from the laineypau.github.io/tigermun/ project-pages subpath.
  // Switch to '/' (with public/CNAME restored) once tigermun.com's DNS
  // points at GitHub Pages.
  base: '/tigermun/',
  plugins: [react()],
})
