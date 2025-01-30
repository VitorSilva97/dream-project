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
                            <a href="#" class="btn btn-sm btn-primary">Editar</a>

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
        $('#tableTasks').DataTable({
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json'
            }
        });
    });
</script>
@endsection
