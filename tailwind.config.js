const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js}',
		'./node_modules/tw-elements/dist/js/**/*.js',
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.jsx',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],

	plugins: [
		require('tw-elements/dist/plugin'),
		require('flowbite/plugin')
	],

	theme: {
		colors: {
			'black': '#000000',
			'white': '#ffffff',
			'primary': '#663366',
			'tag': '#D0CDE1',
			//
			slate: colors.slate,
			gray: colors.gray,
			zinc: colors.zinc,
			neutral: colors.neutral,
			stone: colors.stone,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose
		},
		extend: {
			fontFamily: {
				sans: ['Gilroy', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: {
			},
			screens: {
				'xs': '320px',
				//     'tablet': '1000px',
				//     'laptop': '1366px',
				//     'desktop': '1900px',
			},
		},
	},

	plugins: [require('@tailwindcss/forms')],
};
