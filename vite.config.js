import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
    base: command === 'build' ? '/oil-well-app/' : '/',
    build: {
        outDir: 'docs'
    },
    server: {
        port: 5173
    }
}));
