import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cardboard: resolve(__dirname, 'cardboard.html'),
        webxr: resolve(__dirname, 'webxr.html')
      }
    }
  },
  server: {
    host: true
  }
});
