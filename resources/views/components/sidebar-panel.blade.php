<aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">

    <div class="sidebar-brand">
        <a href="{{route('painel.index')}}" class="brand-link">
            <span class="brand-text fw-light">DreamProject</span>
        </a>
    </div>

    <div class="sidebar-wrapper">
        <nav class="mt-2">
            <ul class="nav sidebar-menu flex-column" data-lte-toggle="treeview" role="menu" data-accordion="false">
                <li class="nav-item menu-open">
                    <a href="{{ route('painel.index') }}"
                        class="nav-link">
                        <p>
                            Painel
                        </p>
                    </a>
                    <a href="{{route('usuarios.index')}}" class="nav-link {{ Route::is('/painel/usuarios*') ? 'active' : '' }}">
                        <p>
                            Usuários
                        </p>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</aside>
