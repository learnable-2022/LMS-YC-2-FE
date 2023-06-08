import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy : {
      "/api" : {
      target:  "https://learnz.onrender.com/api/v1",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, "")
      }
    },
  },
  plugins: [react()],
})
