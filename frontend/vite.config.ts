import { defineConfig } from 'vite'  
import react from '@vitejs/plugin-react'  
import legacy from '@vitejs/plugin-legacy'  
import path from 'path'  
  
export default defineConfig({  
  plugins: [  
    react(),  
    legacy({ targets: ['chrome >= 64', 'defaults'] }),  
  ],  
  resolve: {  
    alias: {  
      '@': path.resolve(__dirname, './src'),  
    },  
  },  
  server: { host: true, port: 5173 },  
}) 