import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["react-icons/fa", "react-icons/fi"],
  },
  build: {
    outDir: 'dist', // Ensure build outputs to 'dist' folder
    assetsDir: 'assets', // Optional: for assets to be bundled under an assets directory
  },
  base: '/', // Ensure base path is correctly set for production (important for deployments like Netlify)
})
