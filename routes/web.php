<?php

use App\Http\Controllers\Panel\PanelController;
use App\Http\Controllers\Panel\TaskController;
use App\Http\Controllers\Panel\UserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebSiteController;
use Illuminate\Support\Facades\Route;

Route::resource('/', WebSiteController::class);

Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/painel', [PanelController::class, 'index'])->name('painel.index');

    Route::resource('/painel/usuarios', UserController::class)->except(['show']); //ou only() -> apenas
    Route::resource('/painel/tarefas', TaskController::class)->except(['show']);
    Route::put('/painel/tarefas/{task}', [TaskController::class, 'upStatus'])->name('upStatus');
});

require __DIR__.'/auth.php';
