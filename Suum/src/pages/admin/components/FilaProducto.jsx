function FilaProducto({ p, expandido, setExpandido, eliminarProducto, navigate, estaAgotado }) {

    return (
        <>
            <tr className={`border-t hover:bg-[#fff4f7] transition ${estaAgotado(p) ? "opacity-50" : ""}`}>

                <td className="p-3">
                    <button
                        onClick={() =>
                            setExpandido(expandido === p.id_producto ? null : p.id_producto)
                        }
                    >
                        {expandido === p.id_producto ? "▲" : "▼"}
                    </button>
                </td>

                <td className="p-3">
                    <img
                        src={p.imagen ? `https://localhost:7159${p.imagen}` : "/img/default.png"}
                        className="w-14 h-14 object-cover rounded-lg"
                    />
                </td>

                <td className="p-3 font-medium text-gray-700">
                    {p.nombre}
                </td>

                <td className="p-3 text-gray-600">
                    S/. {p.precio}
                </td>

                <td className="p-3">
                    {p.estado === 0 ? (
                        <span className="text-red-600 font-bold">Agotado</span>
                    ) : (
                        <span className="text-green-600 font-semibold">Activo</span>
                    )}
                </td>

                <td className="p-3 flex gap-2">

                    <button
                        onClick={() => navigate(`/admin/productos/editar/${p.id_producto}`)}
                        className="bg-yellow-400 px-3 py-1 rounded-lg text-sm"
                    >
                        Editar
                    </button>

                    <button
                        onClick={() => eliminarProducto(p.id_producto)}
                        className="bg-red-400 text-white px-3 py-1 rounded-lg text-sm"
                    >
                        Eliminar
                    </button>

                </td>

            </tr>
        </>
    )
}

export default FilaProducto