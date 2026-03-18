import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useState } from "react";

function Header() {

  const { usuario, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // 🔥 lo manda al home sí o sí
  };

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
      <div className="flex items-center gap-4 relative">

        {/* Carrito */}
        <NavLink to="/cart" className="text-2xl text-gray-700">
          <i className="fa-solid fa-bag-shopping"></i>
        </NavLink>

        {/* 🔥 SI NO HAY USUARIO */}
        {!usuario && (
          <NavLink
            to="/login"
            className="flex items-center gap-2 bg-white px-4 py-2 rounded-full text-black transition no-underline"
          >
            <i className="fa-solid fa-user"></i>
            Iniciar sesión
          </NavLink>
        )}

        {/* 🔥 SI ES USUARIO NORMAL */}
        {usuario && usuario.rol !== "admin" && (
          <div className="relative">

            {/* BOTÓN */}
            <button
              onClick={() => setOpen(!open)}
              className="bg-white px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Hola, {usuario.correo.split("@")[0]} 👋
            </button>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">

                <button
                  onClick={() => navigate("/perfil")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Mi cuenta
                </button>

                <button
                  onClick={() => navigate("/mis-pedidos")}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Mis pedidos
                </button>

                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100"
                >
                  Cerrar sesión
                </button>

              </div>
            )}

          </div>
        )}

        {/* 🔥 ADMIN NO VE NADA EN HEADER USER */}
        {usuario && usuario.rol === "admin" && null}

      </div>

    </header>
  );
}

export default Header;