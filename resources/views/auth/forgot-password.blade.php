@extends('layouts.website')

@section('content')
<div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="card shadow-sm" style="width: 100%; max-width: 400px;">
        <div class="card-body">
            <h3 class="text-center mb-4">Esqueceu sua senha?</h3>

            <p class="text-center mb-4 text-muted">
                Informe seu e-mail, e nós enviaremos um link para você redefinir sua senha.
            </p>

            <!-- Exibindo a sessão de status, caso exista -->
            <x-auth-session-status class="mb-4" :status="session('status')" />

            <form method="POST" action="{{ route('password.email') }}">
                @csrf

                <!-- Email Address -->
                <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="email" name="email" id="email" class="form-control @error('email') is-invalid @enderror" placeholder="Digite seu e-mail" value="{{ old('email') }}" required autofocus>
                    @error('email')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="d-grid gap-2">
                    <button type="submit" class="btn btn-primary">Enviar link para redefinir a senha</button>
                </div>
            </form>

            <div class="mt-3 text-center">
                <a href="{{ route('login') }}" class="text-decoration-none">Já tem uma conta? Entrar</a>
            </div>
        </div>
    </div>
</div>
@endsection
