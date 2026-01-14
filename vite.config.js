import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
    base: command === 'build' ? '/zarvona-energy-dashboard/' : '/',
    build: {
        outDir: 'docs'
    },
    server: {
        port: 5173
    }
}));
