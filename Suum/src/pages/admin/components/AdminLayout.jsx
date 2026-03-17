import { Outlet, NavLink, useNavigate } from "react-router-dom"

function AdminLayout() {

  const navigate = useNavigate()

  const cerrarSesion = () => {
    localStorage.removeItem("usuario")
    navigate("/")
  }

  const base =
    "no-underline flex items-center gap-3 px-4 py-2 rounded-xl text-gray-700 transition-all duration-200"

  const hover =
    "hover:bg-[#ffe2e7] hover:text-gray-900"

  const active =
    "bg-[#ffc4d6] text-gray-900 shadow-sm"

  return (
    <div className="flex min-h-screen bg-[#fff7fa]">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#ffe9f0] flex flex-col justify-between border-r border-[#ffd6e2]">

        <div>

          {/* TITULO */}
          <div className="p-6 border-b border-[#ffd6e2]">
            <h2 className="text-2xl font-bold tracking-widest text-gray-800">
              SÜÜM ADMIN
            </h2>
          </div>

          {/* NAVEGACION */}
          <nav className="flex flex-col p-4 gap-2">

            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `${base} ${hover} ${isActive ? active : ""}`
              }
            >
              📊 Dashboard
            </NavLink>

            <NavLink
              to="/admin/productos"
              className={({ isActive }) =>
                `${base} ${hover} ${isActive ? active : ""}`
              }
            >
              👗 Productos
            </NavLink>

            <NavLink
              to="/admin/ventas"
              className={({ isActive }) =>
                `${base} ${hover} ${isActive ? active : ""}`
              }
            >
              💰 Ventas
            </NavLink>

          </nav>

        </div>

        {/* BOTON CERRAR SESION */}
        <div className="p-4 border-t border-[#ffd6e2]">

          <button
            onClick={cerrarSesion}
            className="w-full bg-[#ff8abe] hover:bg-[#ff73ab] text-white py-2 rounded-xl transition-all duration-200"
          >
            Cerrar sesión
          </button>

        </div>

      </aside>


      {/* CONTENIDO */}
      <main className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Panel de Administración
        </h1>

        <div className="bg-white rounded-2xl shadow-sm p-8 border border-[#ffe3ec]">
          <Outlet />
        </div>

      </main>

    </div>
  )
}

export default AdminLayout