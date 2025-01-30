<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTaskRequest;
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

        // Verifica se o parâmetro user_id está na URL
        if ($request->has('user_id') && $request->user_id !== '') {
            $userIds = explode(',', $request->user_id);  // Se o user_id tiver uma lista, converta para array

            // Se o user_id for igual a 'all', mostramos todas as tarefas
            if ($request->user_id === 'all') {
                $tasksQuery = Task::query();  // Carregar todas as tarefas
            } else {
                // Caso contrário, filtra pelas tarefas dos usuários selecionados
                $tasksQuery->whereHas('users', function ($query) use ($userIds) {
                    $query->whereIn('users.id', $userIds);
                });
            }
        } else {
            // Se não houver filtro, por padrão, filtra apenas as tarefas do usuário logado
            $tasksQuery->whereHas('users', function ($query) use ($user) {
                $query->where('users.id', $user->id);
            });
        }

        // Recupera as tarefas com o filtro aplicado
        $tasks = $tasksQuery->get();

        // Retorna a view com as tarefas, usuários e usuário logado
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
        $validatedData = $request->validated();

        $task = Task::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'status' => $validatedData['status'],
        ]);

        $users = $request['users'];
        $task->users()->attach($users);
        $task->users()->attach(Auth::user()->id);

        return redirect()->route('tarefas.index')->with('toastr', [
            'type' => 'success',
            'message' => 'Tarefa cadastrada com sucesso!',
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
