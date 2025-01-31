<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase; // Faz com que o banco de dados seja resetado entre os testes

    /**
     * Testa a criação de um usuário com permissões aleatórias.
     *
     * @return void
     */
    public function test_create_user()
    {
        // Criando um usuário aleatório do tipo Admin
        $admin = User::factory()->create([
            'permission' => 'Admin',
        ]);

        // Criando um usuário aleatório do tipo User
        $user = User::factory()->create([
            'permission' => 'User',
        ]);

        // Verificando se os usuários foram criados corretamente
        $this->assertDatabaseHas('users', [
            'email' => $admin->email,
            'permission' => 'Admin',
        ]);

        $this->assertDatabaseHas('users', [
            'email' => $user->email,
            'permission' => 'User',
        ]);
    }

    /**
     * Testa a exclusão de um usuário.
     *
     * @return void
     */
    public function test_delete_user()
    {
        // Criando um usuário para ser excluído
        $user = User::factory()->create();

        // Verificando se o usuário foi criado
        $this->assertDatabaseHas('users', [
            'email' => $user->email,
        ]);

        // Excluindo o usuário
        $user->delete();

        // Verificando se o usuário foi excluído
        $this->assertDatabaseMissing('users', [
            'email' => $user->email,
        ]);
    }
}
