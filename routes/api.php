<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Illuminate\Auth\Events\Authenticated;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\medicineController;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Contracts\Session\Middleware\AuthenticatesSessions;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('/logout', [UserController::class, 'logout']);
Route::get('/search/{search?}', [medicineController::class, 'show']);
Route::get('/edit/{id}', [medicineController::class, 'edit']);
Route::post('/update/{id}', [medicineController::class, 'update']);
Route::get('/medicines', [medicineController::class, 'index']);
Route::post('/singlemedicine/{id}', [medicineController::class, 'singelindex']);
Route::post('/add',[medicineController::class,'store']);
Route::delete('delete/{id}',[medicineController::class,'destroy']);
Route::post('/register',[UserController::class,'register']);
Route::post('/login',[UserController::class,'login']);

Route::get('/payment/success', [PaymentController::class, 'success'])->name('payment.success');
Route::get('/payment/failure', [PaymentController::class, 'failure'])->name('payment.failure');

Route::get('/', [medicineController::class, 'indexx']);
Route::post('/cart', [medicineController::class, 'cartProducts']);
Route::get('/generate-user', [medicineController::class, 'generateUserData']);
Route::post('/pay', [PaymentController::class, 'payment']);

Route::post('/comments', [medicineController::class, 'storec'])->name('comments.store');
Route::get('/commentss/{id}', [medicineController::class, 'showc']);

Route::post('/contact', [medicineController::class, 'sendEmail']);
