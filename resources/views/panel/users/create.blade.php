@extends('layouts.panel')
@section('content')
<div class="app-content-header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <h3 class="mb-0">Novo usuário</h3>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                    <li class="breadcrumb-item"><a href="{{route('painel.index')}}">Painel</a></li>
                    <li class="breadcrumb-item"><a href="{{route('usuarios.index')}}">Usuários</a></li>
                </ol>
            </div>
        </div>

        <div class="mt-4 border p-2 rounded shadow">
            <form class="row g-3" action="{{ route('usuarios.store') }}" method="POST">
                @csrf
                <div class="col-md-6">
                    <label for="inputName" class="form-label">Nome</label>
                    <input type="text" name="name" placeholder="Digite o nome" class="form-control" id="inputName"
                        value="{{ old('name') }}">
                    @error('name')
                    <div class="text-danger">{{ $message }}</div>
                    @enderror
                </div>
                <div class="col-md-6">
                    <label for="inputEmail" class="form-label">E-mail</label>
                    <input type="email" placeholder="Digite o e-mail" name="email" class="form-control" id="inputEmail"
                        value="{{ old('email') }}">
                    @error('email')
                    <div class="text-danger">{{ $message }}</div>
                    @enderror
                </div>
                <div class="col-md-6">
                    <label for="selectStatus" class="form-label">Status</label>
                    <select id="selectStatus" class="form-select" name="status" aria-label="Default select example">
                        <option value="" selected>Selecione um status</option>
                        <option value="1">Ativo</option>
                        <option value="0">Inativo</option>
                    </select>
                    @error('status')
                    <div class="text-danger">{{ $message }}</div>
                    @enderror
                </div>
                <div class="col-6">
                    <label for="inputPassword" class="form-label">Senha</label>
                    <input type="password" name="password" class="form-control" id="inputPassword"
                        placeholder="Digite a senha">
                    @error('password')
                    <div class="text-danger">{{ $message }}</div>
                    @enderror
                </div>

                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Cadastrar</button>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
