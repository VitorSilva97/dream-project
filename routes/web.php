<?php

use App\Http\Controllers\Panel\PanelController;
use App\Http\Controllers\Panel\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebSiteController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::resource('/', WebSiteController::class);

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/painel', [PanelController::class, 'index'])->name('painel.index');

    Route::resource('/painel/usuarios', UserController::class)->except(['show']); //ou only() -> apenas
});


// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
