<?php

use App\Http\Controllers\ContactsController;
use App\Http\Controllers\PostController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TestimonialController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/services', [ServiceController::class, 'getServices']);
Route::post('/services.slug/{slug}', [ServiceController::class, 'getBySlug']);
Route::post('/services.order', [ServiceController::class, 'order']);

Route::post('/posts', [PostController::class, 'getPosts']);

Route::post('/feedback', [ContactsController::class, 'send']);

Route::post('/testimonials', [TestimonialController::class, 'getTestimonials']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
	return $request->user();
});