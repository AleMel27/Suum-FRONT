import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function CrearProducto() {

    const navigate = useNavigate()

    const [categorias, setCategorias] = useState([])
    const [tallas, setTallas] = useState([])
    const [preview, setPreview] = useState(null)

    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        id_categoria: "",
        imagen: null,
        tallas: []
    })

    useEffect(() => {
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        const cat = await fetch("https://localhost:7159/api/categorias").then(r => r.json())
        const tal = await fetch("https://localhost:7159/api/tallas").then(r => r.json())

        setCategorias(cat)
        setTallas(tal)
    }

    const toggleTalla = (id_talla) => {
        const existe = producto.tallas.find(t => t.id_talla === id_talla)

        if (existe) {
            setProducto({
                ...producto,
                tallas: producto.tallas.filter(t => t.id_talla !== id_talla)
            })
        } else {
            setProducto({
                ...producto,
                tallas: [...producto.tallas, { id_talla, stock: 0 }]
            })
        }
    }

    const actualizarStock = (id_talla, valor) => {
        setProducto(prev => ({
            ...prev,
            tallas: prev.tallas.map(t =>
                t.id_talla === id_talla
                    ? { ...t, stock: Number(valor) }
                    : t
            )
        }))
    }

    const guardar = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("nombre", producto.nombre)
        formData.append("precio", producto.precio)
        formData.append("id_categoria", producto.id_categoria)
        formData.append("imagen", producto.imagen)
        formData.append("tallas", JSON.stringify(producto.tallas))

        await fetch("https://localhost:7159/api/productos", {
            method: "POST",
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
                    Crear Producto
                </h2>

                <form onSubmit={guardar} className="flex flex-col gap-4">

                    <input
                        placeholder="Nombre"
                        className="border p-3 rounded-lg"
                        onChange={e => setProducto({ ...producto, nombre: e.target.value })}
                    />

                    <input
                        type="number"
                        placeholder="Precio"
                        className="border p-3 rounded-lg"
                        onChange={e => setProducto({ ...producto, precio: e.target.value })}
                    />

                    <select
                        className="border p-3 rounded-lg"
                        onChange={e => setProducto({ ...producto, id_categoria: e.target.value })}
                    >
                        <option value="">Categoría</option>
                        {categorias.map(c => (
                            <option key={c.id_categoria} value={c.id_categoria}>
                                {c.nombre}
                            </option>
                        ))}
                    </select>

                    {/* 🔥 TALLAS */}
                    <div>
                        <h3 className="font-medium mb-3">Tallas disponibles</h3>

                        <div className="grid grid-cols-2 gap-3">

                            {tallas.map(t => {
                                const seleccionada = producto.tallas.find(x => x.id_talla === t.id_talla)

                                return (
                                    <div key={t.id_talla} className="border p-3 rounded-lg">

                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                onChange={() => toggleTalla(t.id_talla)}
                                            />
                                            {t.talla}
                                        </label>

                                        {seleccionada && (
                                            <input
                                                type="number"
                                                placeholder="Stock"
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

                    <button className="bg-black text-white py-3 rounded-lg hover:opacity-90">
                        Guardar Producto
                    </button>

                </form>

            </div>

        </div>
    )
}

export default CrearProducto