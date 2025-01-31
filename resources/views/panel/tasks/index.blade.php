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

        {{-- Filtro de usuários e status --}}
        <div class="mt-4 row">
            <div class="col-md-6 mb-3 mb-md-0">
                <label for="userFilter">Filtrar por Usuário:</label>
                <select id="userFilter" class="form-select">
                    <option value="all" @if(request()->get('user_id') === 'all') selected @endif>Ver todas</option>
                    @foreach($users as $u)
                    <option value="{{ $u->id }}" @if(request()->get('user_id') == $u->id || (request()->get('user_id')
                        == ''
                        && $u->id == $user->id)) selected @endif>
                        {{ $u->name }}
                    </option>
                    @endforeach
                </select>
            </div>

            <div class="col-md-6">
                <label for="statusFilter">Filtrar por Status:</label>
                <select id="statusFilter" class="form-select">
                    <option value="all" @if(request()->get('status') === 'all') selected @endif>Ver todos</option>
                    <option value="pendente" @if(request()->get('status') === 'pendente') selected @endif>Pendente
                    </option>
                    <option value="concluída" @if(request()->get('status') === 'concluída') selected @endif>Concluída
                    </option>
                </select>
            </div>
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
                            <img src="https://ui-avatars.com/api/?name={{ $user->name }}" data-user-id="{{ $user->id }}"
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
                            <span class="badge bg-danger">Verificar</span>
                            @break
                            @endswitch
                        </td>
                        <td>
                            <a href="{{ route('tarefas.edit', $task->id) }}" class="btn btn-sm btn-primary">Editar</a>

                            <!-- Botão para abrir o modal -->
                            <button type="button" class="btn btn-sm btn-danger" data-bs-toggle="modal"
                                data-bs-target="#deleteModal{{ $task->id }}">
                                Excluir
                            </button>

                            <!-- Modal de confirmação de exclusão -->
                            <div class="modal fade" id="deleteModal{{ $task->id }}" tabindex="-1"
                                aria-labelledby="deleteModalLabel{{ $task->id }}" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="deleteModalLabel{{ $task->id }}">Confirmar
                                                Exclusão</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Você tem certeza que deseja excluir esta tarefa?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancelar</button>
                                            <form action="{{ route('tarefas.destroy', $task->id) }}" method="POST"
                                                style="display:inline;">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btn btn-danger">Sim, excluir</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        // Verificar se o DataTable já foi inicializado
        if (!$.fn.DataTable.isDataTable('#tableTasks')) {
            var table = $('#tableTasks').DataTable({
                language: {
                    url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json',
                    emptyTable: '' // Deixa vazio para não exibir nenhuma mensagem
                }
            });
        }

        // Filtro de Usuário
        $('#userFilter').on('change', function () {
            var userId = $(this).val();

            if (userId === "all") {
                // Para 'Ver todos', pegamos todos os IDs dos usuários
                userId = "{{ implode(',', $users->pluck('id')->toArray()) }}"; // Pegamos todos os IDs
            }

            var url = new URL(window.location.href);
            if (userId) {
                url.searchParams.set('user_id', userId); // Adiciona o parâmetro user_id
            } else {
                url.searchParams.delete('user_id'); // Remove o filtro de usuário
            }

            // Filtro de Status
            var status = $('#statusFilter').val();
            if (status !== "all") {
                url.searchParams.set('status', status); // Adiciona o parâmetro status
            } else {
                url.searchParams.delete('status'); // Remove o filtro de status
            }

            window.location.href = url.toString(); // Redireciona com os filtros atualizados
        });

        // Filtro de Status
        $('#statusFilter').on('change', function () {
            var status = $(this).val();

            var url = new URL(window.location.href);
            if (status !== "all") {
                url.searchParams.set('status', status); // Adiciona o parâmetro status
            } else {
                url.searchParams.delete('status'); // Remove o filtro de status
            }

            // Filtro de Usuário
            var userId = $('#userFilter').val();
            if (userId !== "all") {
                url.searchParams.set('user_id', userId); // Adiciona o parâmetro user_id
            } else {
                url.searchParams.delete('user_id'); // Remove o filtro de usuário
            }

            window.location.href = url.toString(); // Redireciona com os filtros atualizados
        });
    });
</script>


@endsection
