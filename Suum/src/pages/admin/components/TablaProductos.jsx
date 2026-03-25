import { Fragment } from "react"
import FilaProducto from "./FilaProducto"
import TallasExpand from "./TallasExpand"

function TablaProductos({ productos, expandido, setExpandido, eliminarProducto, navigate, estaAgotado }) {

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-[#ffe3ec] overflow-hidden">

            <table className="w-full">

                <thead className="bg-[#ffe9f0] text-gray-700">
                    <tr>
                        <th></th>
                        <th className="p-3 text-left">Imagen</th>
                        <th className="p-3 text-left">Nombre</th>
                        <th className="p-3 text-left">Precio</th>
                        <th className="p-3 text-left">Estado</th>
                        <th className="p-3 text-left">Acciones</th>
                    </tr>
                </thead>

                <tbody>

                    {productos.map(p => (
                        <Fragment key={p.id_producto}>
                            <FilaProducto
                                p={p}
                                expandido={expandido}
                                setExpandido={setExpandido}
                                eliminarProducto={eliminarProducto}
                                navigate={navigate}
                                estaAgotado={estaAgotado}
                            />

                            {expandido === p.id_producto && (
                                <TallasExpand producto={p} />
                            )}
                        </Fragment>
                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default TablaProductos