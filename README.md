<p align="center">
  <strong style="font-size: 3rem;">DreamProject</strong>
</p>

---

## Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **PHP 8.3**
- **Laravel 10.1**
- **Bootstrap 5**
- **jQuery3**
- **Composer**
- **NPM**

---

## Funcionalidades

- **Autenticação de Usuário** com Laravel Breeze
- **Gerenciamento de Usuários**: criação, edição e atualização
- **Gerenciamento de Tarefas**: criação, edição, atualização, remoção e vinculação com usuários
- **Controle de Permissões**: apenas usuários com permissão de "Admin" podem gerenciar outros usuários
- **Notificação**: para feedback de ações com o Toastr
- **Painel de Resumo do Sistema**: exibe dados relevantes de usuários, tarefas e outros indicadores importantes

---

## Como Rodar o Projeto

### 1. Clone o repositório:

Clone o repositório com o seguinte comando:

```bash
git clone https://github.com/VitorSilva97/dream-project.git

```
### 2.Instale as dependências do Composer:

Instale as dependências do Composer:

```bash
cd dream-project
composer install
```
### 3.Instale as dependências do NPM:
Instale as dependências do NPM:

```bash
npm install
```

### 4.Crie o arquivo .env:
Crie o arquivo .env:

```bash
cp .env.example .env
```
### 5.Configuração do Ambiente:
Configuração do Ambiente:
Usando XAMPP:
```bash
APP_URL=http://localhost
```
Usando Laravel Herd:
```bash
APP_URL=http://dream-project.test/
```
### 6.Configuração de Envio de E-mails:
Configuração de Envio de E-mails:
```bash
MAIL_MAILER=smtp
MAIL_HOST=mailpit
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"
```
### 7.Gere a chave da aplicação:
```bash
php artisan key:generate
```
### 8.Rodar as Migrações:
```bash
php artisan migrate
```
### 9.Rodar o Database Seed para Criar o Usuário:
```bash
php artisan db:seed --class=UserSeeder
```
```bash
User::create([
    'name' => 'User Teste',
    'email' => 'teste@gmail.com',
    'password' => bcrypt('TesTe@123'),
    'status' => true,
    'permission' => 'Admin',
]);
```
### 10.Compile os Assets:
```bash
npm run dev
```

## Acessando o Projeto

- **Se estiver usando XAMPP:** http://localhost
- **Se estiver usando Homestead:** http://dream-project.test/

