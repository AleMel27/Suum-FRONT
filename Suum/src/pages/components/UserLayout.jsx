import Header from "../components/header.jsx"
import Menu from "../components/menu.jsx"
import Footer from "../components/footer.jsx"
import { Outlet } from "react-router-dom"

function UserLayout() {
  return (
    <>
      <Header />
      <Menu />

      <Outlet />

      <Footer />
    </>
  )
}

export default UserLayout