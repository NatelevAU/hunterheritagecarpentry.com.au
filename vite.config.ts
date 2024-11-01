import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: true,
  },
  base: '/hunterheritagecarpentry.com.au/',
  build: {
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg'],
});
