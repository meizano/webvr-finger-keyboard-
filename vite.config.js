import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        cardboard: resolve(__dirname, 'cardboard.html'),
        webxr: resolve(__dirname, 'webxr.html'),
        mediapipeTest: resolve(__dirname, 'mediapipe-test.html')
      }
    }
  },
  server: {
    host: true
  }
});
