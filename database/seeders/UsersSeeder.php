<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user1 = User::create([
            'name' => 'Vitor Silva',
            'email' => 'vitor@dreamcode.com.br',
            'password' => 'teste123',
            'status' => true,
            'permission' => 'Admin'
        ]);
    }
}
