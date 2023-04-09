const mix = require('laravel-mix');
const path = require('path');

// Конфигурация webpack
mix.webpackConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './resources/js')
		},
		extensions: ['.jsx']
	}
});

// Директивы сборки
mix
	.js('resources/js/app.jsx', 'public/js')
	.react()

	.postCss('resources/css/app.css', 'public/css', [
		require('tailwindcss'),
	])

	.browserSync('https://hr-usluga.test')
	.disableNotifications()
	;
