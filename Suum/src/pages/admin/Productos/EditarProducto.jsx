import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

function EditarProducto() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [categorias, setCategorias] = useState([])
    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        stock: "",
        id_categoria: ""
    })

    // cargar producto
    const cargarProducto = async () => {
        const res = await fetch(`https://localhost:7159/api/productos/${id}`)
        const data = await res.json()

        setProducto({
            nombre: data.nombre || "",
            precio: data.precio || "",
            stock: data.stock || "",
            id_categoria: data.id_categoria || "",
            imagen: null // importante
        })
    }

    // cargar categorias
    const cargarCategorias = async () => {
        const res = await fetch("https://localhost:7159/api/categorias")
        const data = await res.json()
        setCategorias(data)
    }

    useEffect(() => {
        cargarProducto()
        cargarCategorias()
    }, [])

    // actualizar
    const actualizarProducto = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        if (producto.nombre !== "")
            formData.append("nombre", producto.nombre)

        if (producto.precio !== "")
            formData.append("precio", producto.precio)

        if (producto.stock !== "")
            formData.append("stock", producto.stock)

        if (producto.id_categoria !== "")
            formData.append("id_categoria", producto.id_categoria)

        if (producto.imagen) {
            formData.append("imagen", producto.imagen)
        }

        const res = await fetch(`https://localhost:7159/api/productos/${id}`, {
            method: "PUT",
            body: formData
        })

        const data = await res.json()
        console.log("respuesta:", data)

        navigate("/admin/productos")
    }

    return (

        <div>

            <h2 className="text-2xl font-bold mb-6">
                Editar Producto
            </h2>

            <form
                onSubmit={actualizarProducto}
                className="bg-white p-6 rounded-2xl shadow border"
            >

                <div className="grid md:grid-cols-4 gap-4">

                    <input
                        type="text"
                        value={producto.nombre}
                        onChange={(e) => setProducto({ ...producto, nombre: e.target.value })}
                        className="border p-2 rounded-xl"
                    />

                    <input
                        type="number"
                        value={producto.precio}
                        onChange={(e) => setProducto({ ...producto, precio: e.target.value })}
                        className="border p-2 rounded-xl"
                    />

                    <input
                        type="number"
                        value={producto.stock}
                        onChange={(e) => setProducto({ ...producto, stock: e.target.value })}
                        className="border p-2 rounded-xl"
                    />

                    <input
                        type="file"
                        onChange={(e) =>
                            setProducto({ ...producto, imagen: e.target.files[0] })
                        }
                    />

                    <select
                        value={producto.id_categoria}
                        onChange={(e) => setProducto({ ...producto, id_categoria: e.target.value })}
                        className="border p-2 rounded-xl"
                    >
                        {categorias.map(c => (
                            <option key={c.id_categoria} value={c.id_categoria}>
                                {c.nombre}
                            </option>
                        ))}
                    </select>

                </div>

                <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-xl">
                    Guardar cambios
                </button>

            </form>

        </div>
    )
}

export default EditarProducto