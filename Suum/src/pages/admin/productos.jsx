import { useEffect, useState } from "react"

function Productos() {

    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const [preview, setPreview] = useState(null)

    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        stock: "",
        id_categoria: "",
        imagen: null
    })


    // cargar productos
    const cargarProductos = async () => {
        const res = await fetch("https://localhost:7159/api/productos")
        const data = await res.json()
        setProductos(data)
    }

    // cargar categorias
    const cargarCategorias = async () => {
        const res = await fetch("https://localhost:7159/api/categorias")
        const data = await res.json()
        setCategorias(data)
    }

    useEffect(() => {
        cargarProductos()
        cargarCategorias()
    }, [])


    // imagen preview
    const handleImagen = (e) => {
        const file = e.target.files[0]

        setProducto({ ...producto, imagen: file })
        setPreview(URL.createObjectURL(file))
    }


    // agregar producto
    const agregarProducto = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append("nombre", producto.nombre)
        formData.append("precio", producto.precio)
        formData.append("stock", producto.stock)
        formData.append("id_categoria", producto.id_categoria)
        formData.append("imagen", producto.imagen)

        await fetch("https://localhost:7159/api/productos", {
            method: "POST",
            body: formData
        })

        cargarProductos()

        setProducto({
            nombre: "",
            precio: "",
            stock: "",
            id_categoria: "",
            imagen: null
        })

        setPreview(null)
    }


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

            <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Gestión de Productos
            </h2>


            {/* BUSCADOR */}

            <input
                type="text"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="border border-[#ffd6e2] p-2 rounded-xl mb-6 w-full"
            />


            {/* FORMULARIO */}

            <form
                onSubmit={agregarProducto}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#ffe3ec] mb-10"
            >

                <div className="grid md:grid-cols-4 gap-4">

                    <input
                        type="text"
                        placeholder="Nombre"
                        value={producto.nombre}
                        onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
                        className="border p-2 rounded-xl"
                    />

                    <input
                        type="number"
                        placeholder="Precio"
                        value={producto.precio}
                        onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
                        className="border p-2 rounded-xl"
                    />

                    <input
                        type="number"
                        placeholder="Stock"
                        value={producto.stock}
                        onChange={(e) => setProducto({ ...producto, stock: e.target.value })}
                        className="border p-2 rounded-xl"
                    />


                    <select
                        value={producto.id_categoria}
                        onChange={(e) => setProducto({ ...producto, id_categoria: e.target.value })}
                        className="border p-2 rounded-xl"
                    >

                        <option value="">Categoría</option>

                        {categorias.map(c => (
                            <option key={c.id_categoria} value={c.id_categoria}>
                                {c.nombre}
                            </option>
                        ))}

                    </select>

                </div>


                {/* SUBIR IMAGEN */}

                <div className="mt-4">

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImagen}
                    />

                    {preview && (
                        <img
                            src={preview}
                            className="w-28 mt-3 rounded-lg"
                        />
                    )}

                </div>


                <button
                    className="mt-4 bg-[#ff8abe] hover:bg-[#ff73ab] text-white px-6 py-2 rounded-xl"
                >
                    Agregar prenda
                </button>

            </form>


            {/* TABLA */}

            <div className="bg-white rounded-2xl shadow-sm border border-[#ffe3ec]">

                <table className="w-full">

                    <thead className="bg-[#ffe9f0]">

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
                            <tr key={p.id_producto} className="border-t">

                                <td className="p-3">
                                    <img
                                        src={`https://localhost:7159${p.imagen}`}
                                        className="w-14 h-14 object-cover rounded"
                                    />
                                </td>

                                <td className="p-3">{p.nombre}</td>
                                <td className="p-3">S/. {p.precio}</td>
                                <td className="p-3">{p.stock}</td>

                                <td className="p-3 flex gap-2">

                                    <button className="bg-yellow-400 px-3 py-1 rounded">
                                        Editar
                                    </button>

                                    <button
                                        onClick={() => eliminarProducto(p.id_producto)}
                                        className="bg-red-400 text-white px-3 py-1 rounded"
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