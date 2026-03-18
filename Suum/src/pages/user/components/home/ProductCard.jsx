import { NavLink } from "react-router-dom";

function ProductCard({ nombre, precio, imagen }) {
    return (
        <NavLink to={`/producto/${nombre}`} className="no-underline text-black">
            <div className="w-[260px] bg-white shadow-sm hover:shadow-md transition duration-300">

                <div className="relative">
                    <img
                        src={imagen}
                        className="w-full h-[340px] object-cover"
                    />

                    <span className="absolute bottom-3 right-3 bg-[#f8a5a5] text-white text-xs px-3 py-1 rounded-full">
                        Oferta
                    </span>
                </div>

                <div className="px-2 py-3">

                    <h3 className="text-sm font-medium mb-1">
                        {nombre}
                    </h3>

                    <p className="text-lg font-semibold mb-3">
                        S/. {precio}
                    </p>

                    <button className="w-full border border-black rounded-full py-2 text-sm hover:bg-black hover:text-white transition duration-300">
                        Seleccionar opciones
                    </button>

                </div>

            </div>
        </NavLink>
    );
}

export default ProductCard;