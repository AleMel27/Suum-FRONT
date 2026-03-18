import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function CrearProducto() {

    const navigate = useNavigate()

    const [categorias, setCategorias] = useState([])
    const [preview, setPreview] = useState(null)

    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        stock: "",
        id_categoria: "",
        imagen: null
    })

    useEffect(() => {
        fetch("https://localhost:7159/api/categorias")
            .then(res => res.json())
            .then(data => setCategorias(data))
    }, [])

    const handleImagen = (e) => {
        const file = e.target.files[0]
        setProducto({ ...producto, imagen: file })
        setPreview(URL.createObjectURL(file))
    }

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

        alert("Prenda agregada correctamente 🎀")
        navigate("/admin/productos")
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow border border-[#ffe3ec]">

            <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
                Nueva Prenda
            </h2>

            <form onSubmit={agregarProducto} className="flex flex-col gap-4">

                <input
                    type="text"
                    placeholder="Nombre"
                    onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
                    className="border p-3 rounded-xl"
                />

                <input
                    type="number"
                    placeholder="Precio"
                    onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
                    className="border p-3 rounded-xl"
                />

                <input
                    type="number"
                    placeholder="Stock"
                    onChange={(e) => setProducto({ ...producto, stock: e.target.value })}
                    className="border p-3 rounded-xl"
                />

                <select
                    onChange={(e) => setProducto({ ...producto, id_categoria: e.target.value })}
                    className="border p-3 rounded-xl"
                >
                    <option value="">Seleccionar categoría</option>

                    {categorias.map(c => (
                        <option key={c.id_categoria} value={c.id_categoria}>
                            {c.nombre}
                        </option>
                    ))}
                </select>

                <input type="file" onChange={handleImagen} />

                {preview && (
                    <img src={preview} className="w-32 rounded-xl mt-2" />
                )}

                <button className="bg-[#ff8abe] hover:bg-[#ff73ab] text-white py-3 rounded-xl">
                    Guardar Prenda
                </button>

            </form>

        </div>
    )
}

export default CrearProducto