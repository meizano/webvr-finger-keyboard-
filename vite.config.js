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
        cardboardV1: resolve(__dirname, 'cardboard-v1.html'),
        cardboardV2: resolve(__dirname, 'cardboard-v2.html'),
        webxr: resolve(__dirname, 'webxr.html'),
        mediapipeTest: resolve(__dirname, 'mediapipe-test.html')
      }
    }
  },
  server: {
    host: true
  }
});
