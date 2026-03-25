import { Routes, Route } from "react-router-dom"

import UserLayout from "./pages/components/UserLayout.jsx"
import AdminLayout from "./pages/admin/components/AdminLayout.jsx"
import AdminRoute from "./routes/AdminRoute.jsx"

import Home from "./pages/user/home.jsx"
import Vestidos from "./pages/user/vestidos.jsx"
import Blusas from "./pages/user/blusas.jsx"
import Pantalones from "./pages/user/pantalones.jsx"
import Nosotros from "./pages/user/nosotros.jsx"
import Servicios from "./pages/user/servicios.jsx"
import Privacidad from "./pages/user/privacidad.jsx"
import Consultas from "./pages/user/consultas.jsx"
import Envios from "./pages/user/envios.jsx"
import Pagos from "./pages/user/pagos.jsx"
import Cart from "./pages/user/cart.jsx"
import Login from "./pages/user/login.jsx"

import Dashboard from "./pages/admin/dashboard.jsx"
import Productos from "./pages/admin/Productos/productos.jsx"
import CrearProducto from "./pages/admin/Productos/CrearProducto.jsx"
import EditarProducto from "./pages/admin/Productos/EditarProducto.jsx"
import Ventas from "./pages/admin/ventas.jsx"
import Perfil from "./pages/admin/Perfil.jsx"
import ConsultasAdmin from "./pages/admin/consultas.jsx"

function App() {
  return (
    <Routes>

      {/* USER */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vestidos" element={<Vestidos />} />
        <Route path="/blusas" element={<Blusas />} />
        <Route path="/pantalones" element={<Pantalones />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/envios" element={<Envios />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/* ADMIN */}
      <Route path="/admin" element={
        <AdminRoute>
          <AdminLayout />
        </AdminRoute>
      }>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="productos" element={<Productos />} />
        <Route path="productos/nuevo" element={<CrearProducto />} />
        <Route path="productos/editar/:id" element={<EditarProducto />} />
        <Route path="ventas" element={<Ventas />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="consultas" element={<ConsultasAdmin />} />
      </Route>

    </Routes>
  )
}

export default App