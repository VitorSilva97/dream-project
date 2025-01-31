@extends('layouts.panel')
@section('content')
<div class="app-content-header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <h3 class="mb-0">Editando a tarefa {{$task->id}}</h3>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                    <li class="breadcrumb-item"><a href="{{route('painel.index')}}">Painel</a></li>
                    <li class="breadcrumb-item"><a href="{{route('tarefas.index')}}">Tarefas</a></li>
                </ol>
            </div>
        </div>

        <div class="mt-4 border p-2 rounded shadow">
            <form action="{{ route('tarefas.update', $task->id) }}" method="POST">
                @csrf
                @method('PUT')
                <div class="mb-3">
                    <label for="title" class="form-label">Título</label>
                    <input type="text" class="form-control @error('title') is-invalid @enderror" id="title" name="title"
                        minlength="3" maxlength="255" value="{{ old('title', $task->title) }}">
                    @error('title')
                    <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="description" class="form-label">Descrição</label>
                    <textarea class="form-control @error('description') is-invalid @enderror" id="description"
                        name="description" rows="3" maxlength="500">{{ old('description', $task->description) }}"</textarea>
                    @error('description')
                    <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="status" class="form-label">Status</label>
                    <select class="form-select @error('status') is-invalid @enderror" id="status" name="status">
                        <option value="pendente" {{ (old('status', $task->status) == 'pendente') ? 'selected' : '' }}>
                            Pendente</option>
                        <option value="concluída" {{ (old('status', $task->status) == 'concluída') ? 'selected' : '' }}>
                            Concluída</option>
                    </select>

                    @error('status')
                    <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>

                <div class="mb-3">
                    <label for="users" class="form-label">Usuários</label>
                    <select class="form-select select2 @error('users') is-invalid @enderror" id="users" name="users[]"
                        multiple="multiple">
                        @foreach ($users as $user)
                        <option value="{{ $user->id }}"
                            {{ in_array($user->id, old('users', $taskUsers)) ? 'selected' : '' }}>
                            {{ $user->name }}
                        </option>
                        @endforeach
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Atualizar tarefa</button>
            </form>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        $('.select2').select2({
            placeholder: "Selecione os usuários",
            allowClear: true
        });
    });
</script>
@endsection
