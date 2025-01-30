<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUsuarioRequest;
use App\Http\Requests\UpdateUsuarioRequest;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::all();
        return view('panel.users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('panel.users.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreUsuarioRequest $request)
    {
        // Usando Form Request
        $dadosValidados = $request->validated();
        User::create($dadosValidados);
        return redirect()->route('usuarios.index')->with('toastr', [
            'type' => 'success',
            'message' => 'Usuário cadastrado com sucesso!',
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
        $user = User::find($id);
        return view('panel.users.edit', compact('user'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateUsuarioRequest $request, string $id)
    {
        $dadosValidados = $request->validated();
        $user = User::findOrFail($id);
        if (empty($dadosValidados['password'])) {
            unset($dadosValidados['password']);
        } else {
            $dadosValidados['password'] = bcrypt($dadosValidados['password']);
        }
        $user->update($dadosValidados);
        return redirect()->route('usuarios.index')->with('toastr', [
            'type' => 'success',
            'message' => 'Usuário atualizado com sucesso!',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {

        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('usuarios.index')->with('toastr', [
            'type' => 'success',
            'message' => 'Usuário excluído com sucesso!',
        ]);
    }
}
