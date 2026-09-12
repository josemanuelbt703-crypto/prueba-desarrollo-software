<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\AuthController;

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
*/

Route::post('/register', [
    AuthController::class,
    'register'
]);

Route::post('/login', [
    AuthController::class,
    'login'
]);


/*
|--------------------------------------------------------------------------
| Public routes
|--------------------------------------------------------------------------
*/

Route::get('/categories', [
    CategoryController::class,
    'index'
]);

Route::get('/courses', [
    CourseController::class,
    'index'
]);

Route::get('/courses/{course}', [
    CourseController::class,
    'show'
]);


/*
|--------------------------------------------------------------------------
| Authenticated routes
|--------------------------------------------------------------------------
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/me', [
        AuthController::class,
        'me'
    ]);

    Route::post('/logout', [
        AuthController::class,
        'logout'
    ]);

});

/*
|--------------------------------------------------------------------------
| Authenticated Admin
|--------------------------------------------------------------------------
*/

Route::middleware([
    'auth:sanctum',
    'admin'
])->group(function () {

    Route::post('/courses', [
        CourseController::class,
        'store'
    ]);

    Route::put('/courses/{course}', [
        CourseController::class,
        'update'
    ]);

    Route::delete('/courses/{course}', [
        CourseController::class,
        'destroy'
    ]);

});