<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Determina se o usuário pode excluir outro usuário.
     */
    public function delete(User $authUser, User $user)
    {
        // Verifica se o usuário logado tem permissão de Admin
        return $authUser->permission === 'Admin';
    }

    public function create(User $authUser, User $user)
    {
        return $authUser->permission === 'Admin';
    }

    public function update(User $authUser, User $user)
    {
        return $authUser->permission === 'Admin';
    }
}
