import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="w-full bg-[#f07368]">
      <div className="max-w-6xl mx-auto">
        <ul className="flex justify-around items-center py-4 font-semibold m-0 list-none">

          <li>
            <Link
              to="/"
              className="no-underline text-black hover:text-gray-800 hover:underline transition">
              Inicio
            </Link>
          </li>

          <li>
            <Link
              to="/vestidos"
              className="no-underline text-black hover:text-gray-800 hover:underline transition">
              Vestidos
            </Link>
          </li>

          <li>
            <Link
              to="/blusas"
              className="no-underline text-black hover:text-gray-800 hover:underline transition">
              Blusas
            </Link>
          </li>

          <li>
            <Link
              to="/pantalones"
              className="no-underline text-black hover:text-gray-800 hover:underline transition">
              Pantalones
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default Menu;