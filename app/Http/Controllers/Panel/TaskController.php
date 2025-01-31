<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $user = auth()->user();  // Pega o usuário logado
        $users = User::all();    // Carrega todos os usuários

        // Inicia a consulta das tarefas
        $tasksQuery = Task::query();

        // Filtro de usuários
        if ($request->has('user_id') && $request->user_id !== '') {
            $userIds = explode(',', $request->user_id);  // Se o user_id tiver uma lista, converte para array

            if ($request->user_id === 'all') {
                $tasksQuery = Task::query();  // Carregar todas as tarefas
            } else {
                $tasksQuery->whereHas('users', function ($query) use ($userIds) {
                    $query->whereIn('users.id', $userIds);
                });
            }
        } else {
            // Se não houver filtro de usuário, por padrão, filtra apenas as tarefas do usuário logado
            $tasksQuery->whereHas('users', function ($query) use ($user) {
                $query->where('users.id', $user->id);
            });
        }

        // Filtro de status
        if ($request->has('status') && $request->status !== '') {
            $status = $request->status;

            // Se o filtro de status for 'all', não filtra o status
            if ($status !== 'all') {
                $tasksQuery->where('status', $status);
            }
        }

        // Recupera as tarefas com os filtros aplicados
        $tasks = $tasksQuery->get();

        // Retorna a view com as tarefas, usuários e o usuário logado
        return view('panel.tasks.index', compact('tasks', 'users', 'user'));
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::where('status', 1)
        ->where('id', '!=', auth()->id())
            ->get();
        return view('panel.tasks.create', compact('users'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTaskRequest $request)
    {
        $dadosValidados = $request->validated();
        $task = Task::create($dadosValidados);
        $users = $request['users'];
        $task->users()->attach($users);
        $task->users()->attach(Auth::user()->id);

        return redirect()->route('tarefas.index')->with([
            'toastr' => [
                'type' => 'success',
                'message' => 'Tarefa cadastrada com sucesso!'
            ]
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $task = Task::find($id);
        $users = User::where('status', 1)->get();
        $taskUsers = $task->users->pluck('id')->toArray();
        return view('panel.tasks.edit', compact('task', 'users', 'taskUsers'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTaskRequest $request, string $id)
    {
        $dadosValidados = $request->validated();
        $task = Task::findOrFail($id);
        $task->update($dadosValidados);
        $task->users()->sync($request->input('users', []));

        return redirect()->route('tarefas.index')->with([
            'toastr' => [
                'type' => 'success',
                'message' => 'Tarefa atualizada com sucesso!'
            ]
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        return redirect()->route('tarefas.index')->with([
            'toastr' => [
                'type' => 'success',
                'message' => 'Tarefa removida com sucesso!'
            ]
        ]);
    }
}
