@extends('layouts.panel')
@section('content')
<div class="app-content-header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">
                <h3 class="mb-0">Usuários</h3>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-end">
                    <li class="breadcrumb-item"><a href="{{route('painel.index')}}">Voltar ao painel</a></li>
                </ol>
            </div>
        </div>

        <div class="row col-12">
            <div class="col-span-2">
                <a href="{{route('usuarios.create')}}" class="btn btn-primary">Novo usuário</a>
            </div>
        </div>

        {{-- Tabela usuários --}}
        <div class="mt-4 border p-2 rounded shadow">
            <table id="tableUsers" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($users as $user)
                    <tr>
                        <td>{{$user->id}}</td>
                        <td>{{$user->name}}</td>
                        <td>{{$user->email}}</td>
                        <td>
                            @switch($user->status)
                            @case(1)
                            <span class="badge bg-success">Ativo</span>
                            @break
                            @case(0)
                            <span class="badge bg-danger">Inativo</span>
                            @break

                            @default
                            <span class="badge bg-warning text-dark">Verificar</span>
                            @break

                            @endswitch
                        </td>
                        <td>
                            <a href="{{route('usuarios.edit', $user->id)}}" class="btn btn-sm btn-primary">Editar</a>

                            <button type="button" class="btn btn-sm btn-danger" data-bs-toggle="modal"
                                data-bs-target="#deleteModal{{ $user->id }}">
                                Excluir
                            </button>

                            <div class="modal fade" id="deleteModal{{ $user->id }}" tabindex="-1"
                                aria-labelledby="deleteModalLabel{{ $user->id }}" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="deleteModalLabel{{ $user->id }}">Confirmar
                                                Exclusão</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Você tem certeza que deseja excluir este usuário?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancelar</button>
                                            <form action="{{ route('usuarios.destroy', $user->id) }}" method="POST"
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
                        <td>
                            Nenhum usuário cadastrado
                        </td>
                    </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>
</div>
<script>
    $(document).ready(function () {
        $('#tableUsers').DataTable({
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.6/i18n/pt-BR.json'
            }
        });
    });
</script>
@endsection
