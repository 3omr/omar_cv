import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
// Forced update for Vercel
export default defineConfig({
  plugins: [react()],
})
