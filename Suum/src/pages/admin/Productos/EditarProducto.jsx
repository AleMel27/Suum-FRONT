import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function EditarProducto() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [categorias, setCategorias] = useState([])
    const [tallas, setTallas] = useState([])
    const [preview, setPreview] = useState(null)

    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        id_categoria: "",
        imagen: null,
        producto_tallas: []
    })

    useEffect(() => {
        cargarData()
    }, [])

    const cargarData = async () => {
        const prod = await fetch(`https://localhost:7159/api/productos/${id}`).then(r => r.json())
        const cat = await fetch("https://localhost:7159/api/categorias").then(r => r.json())
        const tal = await fetch("https://localhost:7159/api/tallas").then(r => r.json())

        setCategorias(cat)
        setTallas(tal)

        setProducto({
            nombre: prod.nombre || "",
            precio: prod.precio || "",
            id_categoria: prod.id_categoria || "",
            imagen: null,
            producto_tallas: prod.producto_tallas || []
        })
    }

    const toggleTalla = (id_talla) => {
        const existe = producto.producto_tallas.find(t => t.id_talla === id_talla)

        if (existe) {
            setProducto({
                ...producto,
                producto_tallas: producto.producto_tallas.filter(t => t.id_talla !== id_talla)
            })
        } else {
            setProducto({
                ...producto,
                producto_tallas: [...producto.producto_tallas, { id_talla, stock: 0 }]
            })
        }
    }

    const actualizarStock = (id_talla, valor) => {
        setProducto(prev => ({
            ...prev,
            producto_tallas: prev.producto_tallas.map(t =>
                t.id_talla === id_talla
                    ? { ...t, stock: Number(valor) }
                    : t
            )
        }))
    }

    const actualizarProducto = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("nombre", producto.nombre)
        formData.append("precio", producto.precio)
        formData.append("id_categoria", producto.id_categoria)

        if (producto.imagen) {
            formData.append("imagen", producto.imagen)
        }

        formData.append("tallas", JSON.stringify(producto.producto_tallas))

        await fetch(`https://localhost:7159/api/productos/${id}`, {
            method: "PUT",
            body: formData
        })

        navigate("/admin/productos")
    }

    return (
        <div className="max-w-2xl mx-auto p-6">

            {/* VOLVER */}
            <button
                onClick={() => navigate("/admin/productos")}
                className="mb-4 text-sm text-gray-500 hover:text-black"
            >
                ← Volver
            </button>

            <div className="bg-white p-6 rounded-xl shadow">

                <h2 className="text-xl font-semibold mb-6">
                    Editar Producto
                </h2>

                <form onSubmit={actualizarProducto} className="flex flex-col gap-4">

                    <input
                        value={producto.nombre}
                        className="border p-3 rounded-lg"
                        placeholder="Nombre"
                        onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
                    />

                    <input
                        type="number"
                        value={producto.precio}
                        className="border p-3 rounded-lg"
                        placeholder="Precio"
                        onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
                    />

                    <select
                        value={producto.id_categoria}
                        className="border p-3 rounded-lg"
                        onChange={(e) => setProducto({ ...producto, id_categoria: e.target.value })}
                    >
                        <option value="">Categoría</option>
                        {categorias.map(c => (
                            <option key={c.id_categoria} value={c.id_categoria}>
                                {c.nombre}
                            </option>
                        ))}
                    </select>

                    {/* TALLAS */}
                    <div>
                        <h3 className="font-medium mb-3">Tallas</h3>

                        <div className="grid grid-cols-2 gap-3">

                            {tallas.map(t => {
                                const seleccionada = producto.producto_tallas.find(x => x.id_talla === t.id_talla)

                                return (
                                    <div key={t.id_talla} className="border p-3 rounded-lg">

                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                checked={!!seleccionada}
                                                onChange={() => toggleTalla(t.id_talla)}
                                            />
                                            {t.talla}
                                        </label>

                                        {seleccionada && (
                                            <input
                                                type="number"
                                                value={seleccionada.stock}
                                                className="mt-2 border p-2 rounded w-full"
                                                onChange={(e) =>
                                                    actualizarStock(t.id_talla, e.target.value)
                                                }
                                            />
                                        )}

                                    </div>
                                )
                            })}

                        </div>
                    </div>

                    {/* IMAGEN */}
                    <input
                        type="file"
                        onChange={(e) => {
                            setProducto({ ...producto, imagen: e.target.files[0] })
                            setPreview(URL.createObjectURL(e.target.files[0]))
                        }}
                    />

                    {preview && (
                        <img src={preview} className="w-32 rounded-lg" />
                    )}

                    <button className="bg-black text-white py-3 rounded-lg">
                        Guardar cambios
                    </button>

                </form>

            </div>

        </div>
    )
}

export default EditarProducto