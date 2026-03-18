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

import Dashboard from "./pages/admin/dashboard.jsx"
//import Dashboard from "./pages/admin/Categorias.jsx"


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
        <Route path="/admin/dashboard" element={<Dashboard />} />

      </Route>

      {/* ADMIN */}
      <Route
        element={
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        }
      >
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Route>

    </Routes>
  )
}

export default App