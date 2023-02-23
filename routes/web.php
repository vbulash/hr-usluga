<?php

use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Pages\BodyController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
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

Route::get('/', [BodyController::class, 'index']);

Route::get('/services', function () {
    return Inertia::render('Services');
});
Route::get('/service/{service}', [ServiceController::class, 'show']);

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/persdata', fn() => Inertia::render('Documents/PersData'));
Route::get('/privacy.policy', fn() => Inertia::render('Documents/PrivacyPolicy'));
Route::get('/terms.of.use', fn() => Inertia::render('Documents/TermsOfUse'));

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