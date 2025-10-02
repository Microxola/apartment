import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',      // indigo-600
        secondary: '#f59e0b',    // amber-500
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    // Only affects dev server, but can help during local dev
    historyApiFallback: true
  },
  // 👇 This is key for static hosts (like Netlify or manual S3 uploads)
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
