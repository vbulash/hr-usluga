import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
        //
        VitePluginFonts({
            custom: {
                families: [{
                    name: 'Gilroy',
                    local: 'Gilroy',
                    src: './resources/assets/fonts/Gilroy/*.ttf',
                }],
            }
        }),
    ],
});
