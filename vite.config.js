import { defineConfig } from 'vite';

export default defineConfig({
    base: '/zarvona-energy-dashboard/',
    build: {
        outDir: 'docs'
    },
    server: {
        port: 5173
    }
});
