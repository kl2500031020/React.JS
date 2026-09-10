import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/React.JS/',  // Uses your actual GitHub repository name
  plugins: [react()],
})