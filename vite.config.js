import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/bolt-ai-my-port-folio",
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'build'
  }
});
