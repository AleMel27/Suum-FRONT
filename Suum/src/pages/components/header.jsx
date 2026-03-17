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
      <NavLink to="/" className="no-underline text-black absolute left-1/2 -translate-x-1/2">
        <h1 className="font-logo text-5xl tracking-[0.35em]">
          SÜÜM
        </h1>
      </NavLink>

      {/* Botones */}
      <div className="flex items-center gap-4">

        {/* Carrito */}
        <NavLink to="/cart" className="text-2xl text-gray-700">
          <i className="fa-solid fa-bag-shopping"></i>
        </NavLink>

        {/* Login */}
        <NavLink
          to="/login"
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
        >
          <i className="fa-solid fa-user"></i>
          Iniciar sesión
        </NavLink>

      </div>

    </header>
  );
}

export default Header;