<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	{{-- <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> --}}

	{{-- https://realfavicongenerator.net --}}
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">

	<title inertia>{{ config('app.name', 'Laravel') }}</title>

	<!-- Fonts -->
	{{-- <link rel="stylesheet" href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap"> --}}

	<!-- Socials -->
	<script type="text/javascript" src="https://vk.com/js/api/share.js?93" charset="windows-1251"></script>

	<!-- Scripts -->
	@routes
	<link rel="stylesheet" href="{{ mix('css/app.css') }}">
	<script src="{{ mix('js/app.js') }}" defer></script>
	@inertiaHead
</head>

<body class="font-sans antialiased">
	@inertia
</body>

</html>
