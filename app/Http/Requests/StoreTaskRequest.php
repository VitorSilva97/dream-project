<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|min:3|max:255',
            'description' => 'nullable|string|max:500',
            'status' => 'required|in:pendente,concluída'
        ];
    }

    /**
     * Customize the error messages for attributes.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'title.required' => 'O título da tarefa é obrigatório.',
            'title.min' => 'O título da tarefa deve ter pelo menos 3 caracteres.',
            'title.max' => 'O título da tarefa não pode exceder 255 caracteres.',
            'description.max' => 'A descrição não pode ter mais de 500 caracteres.',
            'status.required' => 'O status da tarefa é obrigatório.',
            'status.in' => 'O status deve ser "pendente" ou "concluída".',
        ];
    }
}
