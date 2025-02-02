<!DOCTYPE html>
<html lang="pt_BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="{{asset('js/jquery.js')}}"></script>

    {{-- CDN CSS --}}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    {{-- CDN JS --}}
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
        integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
        integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous">
    </script>

    <title>DreamProject</title>
</head>

<body>
    <main>
        @yield('content')
        @if(session('toastr'))
    <script>
        var toastrType = "{{ session('toastr.type') }}"; // Sucesso, erro, etc.
        var toastrMessage = "{{ session('toastr.message') }}"; // A mensagem que você quer mostrar

        // Configuração do Toastr
        var toastrOptions = {
            "closeButton": true,
            "progressBar": true,
            "timeOut": 5000
        };

        // Exibindo o Toastr com os dados da sessão
        if (toastrType && toastrMessage) {
            toastr[toastrType](toastrMessage, '', toastrOptions);
        }
    </script>
    @endif
    </main>
</body>

</html>
