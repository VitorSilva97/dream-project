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
            'name' => 'User Teste',
            'email' => 'teste@gmail.com',
            'password' => 'TesTe@123',
            'status' => true,
            'permission' => 'Admin'
        ]);
    }
}
