@extends('layouts.website')
@section('content')
<div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="card shadow-sm" style="width: 100%; max-width: 400px;">
        <div class="card-body">
            <h3 class="text-center mb-4">Entrar no DreamProject</h3>

            <form method="POST" action="{{ route('login') }}">
                @csrf

                <div class="mb-3">
                    <label for="email" class="form-label">E-mail</label>
                    <input type="email" name="email" placeholder="Digite seu e-mail" class="form-control @error('email') is-invalid @enderror" id="email" name="email" required autofocus>
                    @error('email')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label">Senha</label>
                    <input type="password" name="password" placeholder="Digite sua senha" class="form-control @error('password') is-invalid @enderror" id="password" name="password" required>
                    @error('password')
                        <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <button type="submit" class="btn btn-primary w-100">Entrar</button>

                <div class="mt-3 text-center">
                    <a href="{{ route('password.request') }}" class="text-decoration-none">Esqueceu sua senha?</a>
                </div>
            </form>

            <div class="mt-3 text-center">
                <a href="{{ route('register') }}" class="btn btn-secondary w-100">Registrar-se</a>
            </div>
        </div>
    </div>
</div>
@endsection
