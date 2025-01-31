<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;

class PanelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        $activeUsers = User::where('status', 1)->get();
        $inactiveUsers = User::where('status', 0)->get();
        $adminUsers = User::where('permission', 'Admin')->get();

        $tasks = Task::all();
        $pendingTasks = Task::where('status', 'pendente')->get();
        $completedTasks = Task::where('status', 'concluída')->get();
        $userWithMostTasks = User::withCount('tasks')
        ->orderByDesc('tasks_count')
        ->first();

        $topUsersWithMostTasks = User::withCount('tasks')
        ->orderByDesc('tasks_count')
        ->limit(5)
        ->get();

        return view('panel.index',  compact(
            'users',
            'activeUsers',
            'inactiveUsers',
            'adminUsers',
            'tasks',
            'pendingTasks',
            'completedTasks',
            'userWithMostTasks',
            'topUsersWithMostTasks'
        ));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
