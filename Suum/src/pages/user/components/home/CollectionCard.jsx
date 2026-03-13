import { NavLink } from "react-router-dom";

function CollectionCard({ titulo, imagen, link }) {
  return (
    <NavLink to={link} className="no-underline">
      <div className="relative w-[280px] h-[360px] overflow-hidden group cursor-pointer">

        <img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <span className="text-white text-xl font-semibold tracking-wide">
            {titulo}
          </span>
        </div>

      </div>
    </NavLink>
  );
}

export default CollectionCard;