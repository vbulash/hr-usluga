<?php

use App\Http\Controllers\ContactsController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Pages\BodyController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [BodyController::class, 'index'])->name('home');

Route::get('/services', function () {
	return Inertia::render('Services');
})->name('services.list');
Route::get('/service/{slug}', function ($slug) {
	return Inertia::render('ServicePage', [
		'slug' => $slug
	]);
})->name('services.get');

Route::get('/posts', function () {
	return Inertia::render('Posts');
})->name('posts.list');
Route::get('/posts/{post}', [PostController::class, 'getPost'])->name('posts.get');

Route::get('/events', function () {
	return Inertia::render('Events');
})->name('events.list');
Route::get('/events/{event}', [EventController::class, 'getEvent'])->name('events.get');

Route::get('/about', function () {
	return Inertia::render('About');
})->name('about');

Route::get('/contacts', [ContactsController::class, 'main'])->name('contacts');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/persdata', fn() => Inertia::render('Documents/PersData'))->name('persdata');
Route::get('/privacy.policy', fn() => Inertia::render('Documents/PrivacyPolicy'))->name('privacy.policy');
Route::get('/terms.of.use', fn() => Inertia::render('Documents/TermsOfUse'))->name('terms.of.use');

Route::get('/dashboard', function () {
	return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
	Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
	Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
	Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::module('pages');

require __DIR__ . '/auth.php';