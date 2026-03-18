import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav className="w-full bg-[#ffc89a]">
      <div className="max-w-6xl mx-auto">
        <ul className="flex justify-around items-center py-4 font-semibold m-0 list-none">

          <li>
            <NavLink
              to="/"
              className="no-underline text-black hover:text-gray-800 hover:underline transition">
              INICIO
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/vestidos"
              className="no-underline text-black hover:text-gray-800 hover:underline transition">
              VESTIDOS
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blusas"
              className="no-underline text-black hover:text-gray-800 hover:underline transition">
              BLUSAS
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/pantalones"
              className="no-underline text-black hover:text-gray-800 hover:underline transition">
              PANTALONES
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Menu;