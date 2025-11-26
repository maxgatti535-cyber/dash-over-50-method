import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dash-over-50-method/',
  server: {
    port: 5173,
    open: true
  }
})
