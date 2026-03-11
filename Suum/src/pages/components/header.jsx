function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-[#ff8abe] text-gray-700 text-sm">

      {/* Soporte */}
        <div className="block ml-5">
          <span className="block font-semibold">Atención al cliente</span>
          <span className="font-semibold">123-456-789</span>
        </div>

      {/* Logo */}
      <a>
        <img src="/src/assets/logo.png" alt="logo" className="w-44" />
      </a>

      {/* Usuario y carrito */}
      <div className="flex items-center gap-4">
        {/* Carrito */}
        <a className="text-2xl text-gray-700">
          <i className="fa-solid fa-bag-shopping"></i>
        </a>

        {/* Usuario con dropdown */}
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle flex items-center gap-2"
            type="button"
            data-bs-toggle="dropdown"
          >
            <i className="fa-solid fa-user"></i>
            <span id="aUser">Iniciar Sesión</span>
          </button>
          <div className="dropdown-menu dropdown-menu-end p-2">
            <div className="card border-0">
              <div className="card-body p-2">
                <a className="dropdown-item">Mi perfil</a>
                <a className="dropdown-item">Mis pedidos</a>
                <a className="dropdown-item text-danger">Cerrar sesión</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;