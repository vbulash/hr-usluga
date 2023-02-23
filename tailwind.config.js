const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js}',
        './node_modules/tw-elements/dist/js/**/*.js',
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    plugins: [
        require('tw-elements/dist/plugin')
    ],

    theme: {
        colors: {
            'black': '#000000',
            'white': '#ffffff',
            'primary': '#663366',
            'tag': '#D0CDE1',
            'success': '#15803d',   // green-700
            'info': '#1d4ed8',      // blue-700
            'error': '#b91c1c',     // red-700
        },
        extend: {
            fontFamily: {
                sans: ['Gilroy', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
