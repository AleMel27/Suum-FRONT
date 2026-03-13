import Header from "./pages/components/header.jsx"
import Menu from "./pages/components/menu.jsx"
import Footer from "./pages/components/footer.jsx"

import Home from "./pages/user/home.jsx"
import Vestidos from "./pages/user/vestidos.jsx"
import Blusas from "./pages/user/blusas.jsx"
import Pantalones from "./pages/user/pantalones.jsx"

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
      </Routes>

      <Footer />
    </>
  )
}

export default App