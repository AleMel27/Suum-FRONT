import { Navigate } from "react-router-dom"

function AdminRoute({ children }) {

  const usuario = {
    logueado: true,
    rol: "admin"
  }

  if (!usuario.logueado || usuario.rol !== "admin") {
    return <Navigate to="/" />
  }

  return children
}

export default AdminRoute