import Header from "./pages/components/header.jsx"
import Menu from "./pages/components/menu.jsx"
import Footer from "./pages/components/footer.jsx"

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

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Menu />

      <Routes>
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
      </Routes>

      <Footer />
    </>
  )
}

export default App