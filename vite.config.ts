import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {allowedHosts: ["dfe9819538988bca1b4bbf84ce5c0f36.serveo.net"] }
})
