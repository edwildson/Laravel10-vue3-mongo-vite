import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
const path = require('path');

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
            
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': '/resources/ts',
            's2' : path.resolve(__dirname, './resources/js/core'),
        },
    },
});
