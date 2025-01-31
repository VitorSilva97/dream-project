<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): View
    {
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        // Autentica o usuário
        $credentials = $request->only('email', 'password');

        // Tenta autenticar o usuário com as credenciais fornecidas
        if (Auth::attempt($credentials)) {
            // Verifica o status do usuário depois de autenticá-lo
            if (auth()->user()->status !== 1) {
                // Se o status for diferente de 1 (inativo), lança a exceção
                Auth::logout(); // Para garantir que a sessão seja destruída
                throw ValidationException::withMessages([
                    'email' => 'Seu usuário está inativo. Por favor, entre em contato com o suporte.',
                ]);
            }

            // Regenera a sessão para proteger contra ataques de fixation
            $request->session()->regenerate();

            return redirect()->intended(RouteServiceProvider::HOME);
        }

        // Se a autenticação falhar
        throw ValidationException::withMessages([
            'email' => trans('auth.failed'), // Mensagem padrão do Laravel para falha de autenticação
        ]);
    }


    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
