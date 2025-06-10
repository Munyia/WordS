import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/WordS/', // 👈 This line is important for GitHub Pages
  plugins: [react()],
})
