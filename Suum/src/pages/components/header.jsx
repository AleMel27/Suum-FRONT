import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="relative flex justify-between items-center px-4 py-4 bg-[#ff8abe] text-gray-700 text-sm">

      {/* Soporte */}
      <div className="block ml-5">
        <span className="block font-semibold">Atención al cliente</span>
        <span className="font-semibold">123-456-789</span>
      </div>

      {/* Logo */}
      <NavLink to="/" className="absolute left-1/2 -translate-x-1/2">
        <img src="/src/assets/logo.png" alt="logo" className="w-44" />
      </NavLink>

      {/* Usuario y carrito */}
      <div className="flex items-center gap-4">

        {/* Carrito */}
        <NavLink to="/carrito" className="text-2xl text-gray-700">
          <i className="fa-solid fa-bag-shopping"></i>
        </NavLink>

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
                <NavLink to="/perfil" className="dropdown-item">Mi perfil</NavLink>
                <NavLink to="/pedidos" className="dropdown-item">Mis pedidos</NavLink>
                <NavLink to="/logout" className="dropdown-item text-danger">Cerrar sesión</NavLink>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;