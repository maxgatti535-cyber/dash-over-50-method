import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',        // base root per sviluppo
  server: {
    port: 5173,
    open: false     // evitiamo l’apertura automatica di /dash-over-50-method/
  }
})
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 5173,
    open: false,
    middlewareMode: false
  }
})
