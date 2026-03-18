import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Productos() {

    const navigate = useNavigate()

    const [productos, setProductos] = useState([])
    const [busqueda, setBusqueda] = useState("")

    // cargar productos
    const cargarProductos = async () => {
        const res = await fetch("https://localhost:7159/api/productos")
        const data = await res.json()
        setProductos(data)
    }

    useEffect(() => {
        cargarProductos()
    }, [])

    // eliminar
    const eliminarProducto = async (id) => {
        if (!confirm("¿Eliminar producto?")) return

        await fetch(`https://localhost:7159/api/productos/${id}`, {
            method: "DELETE"
        })

        cargarProductos()
    }

    const filtrados = productos.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    )

    return (

        <div>

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">

                <h2 className="text-2xl font-bold text-gray-800">
                    Gestión de Productos
                </h2>

                <button
                    onClick={() => navigate("/admin/productos/nuevo")}
                    className="bg-[#ff8abe] hover:bg-[#ff73ab] text-white px-5 py-2 rounded-xl transition-all no-underline"
                >
                    + Agregar Prenda
                </button>

            </div>


            {/* BUSCADOR */}

            <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="border border-[#ffd6e2] p-2 rounded-xl mb-6 w-full focus:outline-none"
            />


            {/* TABLA */}

            <div className="bg-white rounded-2xl shadow-sm border border-[#ffe3ec] overflow-hidden">

                <table className="w-full">

                    <thead className="bg-[#ffe9f0] text-gray-700">

                        <tr>
                            <th className="p-3 text-left">Imagen</th>
                            <th className="p-3 text-left">Nombre</th>
                            <th className="p-3 text-left">Precio</th>
                            <th className="p-3 text-left">Stock</th>
                            <th className="p-3 text-left">Acciones</th>
                        </tr>

                    </thead>

                    <tbody>

                        {filtrados.map(p => (
                            <tr key={p.id_producto} className="border-t hover:bg-[#fff4f7] transition">

                                <td className="p-3">
                                    <img
                                        src={`https://localhost:7159${p.imagen}`}
                                        className="w-14 h-14 object-cover rounded-lg"
                                    />
                                </td>

                                <td className="p-3 font-medium text-gray-700">
                                    {p.nombre}
                                </td>

                                <td className="p-3 text-gray-600">
                                    S/. {p.precio}
                                </td>

                                <td className="p-3 text-gray-600">
                                    {p.stock}
                                </td>

                                <td className="p-3 flex gap-2">

                                    <button
                                        onClick={() => navigate(`/admin/productos/editar/${p.id_producto}`)}
                                        className="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded-lg text-sm"
                                    >
                                        Editar
                                    </button>

                                    <button
                                        onClick={() => eliminarProducto(p.id_producto)}
                                        className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
                                    >
                                        Eliminar
                                    </button>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default Productos