<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\CategoryController;

Route::get('/categories', [
    CategoryController::class,
    'index'
]);

Route::apiResource(
    'courses',
    CourseController::class
);
