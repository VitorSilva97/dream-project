@extends('layouts.panel')
@section('content')
<div class="app-content-header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <h3 class="mb-0">Tarefas</h3>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                    <li class="breadcrumb-item"><a href="{{route('painel.index')}}">Voltar ao painel</a></li>
                </ol>
            </div>
        </div>

        <div class="row col-12">
            <div class="col-span-2">
                <a href="{{route('tarefas.create')}}" class="btn btn-primary">Nova tarefa</a>
            </div>
        </div>

        {{-- Filtro de usuários --}}
        <div class="mt-4">
            <label for="userFilter">Filtrar por Usuário:</label>
            <select id="userFilter" class="form-select">
                <option value="all" @if(request()->get('user_id') === 'all') selected @endif>Ver todas</option>
                @foreach($users as $u)
                <option value="{{ $u->id }}" @if(request()->get('user_id') == $u->id || (request()->get('user_id') == ''
                    && $u->id == $user->id)) selected @endif>
                    {{ $u->name }}
                </option>
                @endforeach
            </select>
        </div>

        {{-- Tabela tarefas --}}
        <div class="mt-4 border p-2 rounded shadow">
            <table id="tableTasks" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Descrição</th>
                        <th>Usuários</th>
                        <th>Status</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($tasks as $task)
                    <tr>
                        <td>{{$task->id}}</td>
                        <td>{{$task->title}}</td>
                        <td>{{ \Illuminate\Support\Str::limit($task->description, 20, '...') }}</td>
                        <td>
                            @foreach($task->users as $user)
                            <img src="https://ui-avatars.com/api/?name={{ $user->name }}"
                                class="user-image-task rounded-circle shadow" alt="User Image" />
                            @endforeach
                        </td>
                        <td>
                            @switch($task->status)
                            @case('pendente')
                            <span class="badge bg-warning text-dark">Pendente</span>
                            @break
                            @case('concluída')
                            <span class="badge bg-success">Concluída</span>
                            @break
                            @default
                            @break
                            <span class="badge bg-danger">Verificar</span>
                            @endswitch
                        </td>
                        <td>
                            <a href="{{route('tarefas.edit', $task->id)}}" class="btn btn-sm btn-primary">Editar</a>

                            <button type="button" class="btn btn-sm btn-danger" data-bs-toggle="modal"
                                data-bs-target="#deleteModal">
                                Excluir
                            </button>
                        </td>
                    </tr>
                    @empty
                    <tr>
                        <td>Nenhuma tarefa cadastrada.</td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>

<script>
    $(document).ready(function () {
        var table = $('#tableTasks').DataTable({
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json'
            }
        });
    });

    $(document).ready(function () {
        $('#userFilter').on('change', function () {
            var userId = $(this).val();

            if (userId === "") {
                // Para 'Ver todas', pegamos todos os IDs dos usuários
                userId = "{{ implode(',', $users->pluck('id')->toArray()) }}"; // Pegamos todos os IDs
            }

            var url = new URL(window.location.href);
            if (userId) {
                url.searchParams.set('user_id',
                    userId); // Adiciona o parâmetro user_id com todos os IDs ou um ID específico
            } else {
                url.searchParams.delete('user_id'); // Remove o filtro
            }
            window.location.href = url.toString(); // Redireciona com o novo filtro
        });
    });
</script>
@endsection
