import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import FiltroCategoria from "../components/FiltroCategoria"
import Buscador from "../components/Buscador.jsx"
import TablaProductos from "../components/TablaProductos"

function Productos() {

    const navigate = useNavigate()

    const [productos, setProductos] = useState([])
    const [categorias, setCategorias] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const [expandido, setExpandido] = useState(null)
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("")

    useEffect(() => {
        cargarProductos()
        cargarCategorias()
    }, [])

    const cargarProductos = async () => {
        const res = await fetch("https://localhost:7159/api/productos")
        const data = await res.json()
        setProductos(data)
    }

    const cargarCategorias = async () => {
        const res = await fetch("https://localhost:7159/api/categorias")
        const data = await res.json()
        setCategorias(data)
    }

    const eliminarProducto = async (id) => {
        if (!confirm("¿Eliminar producto?")) return

        await fetch(`https://localhost:7159/api/productos/${id}`, {
            method: "DELETE"
        })

        setProductos(productos.filter(p => p.id_producto !== id))
    }

    const estaAgotado = (producto) => {
        return producto.producto_tallas?.every(t => t.stock === 0)
    }

    const filtrados = productos.filter(p => {
        return (
            p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
            (categoriaSeleccionada === "" || p.id_categoria == categoriaSeleccionada)
        )
    })

    return (
        <div>

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Gestión de Productos</h2>

                <button
                    onClick={() => navigate("/admin/productos/nuevo")}
                    className="bg-[#ff8abe] text-white px-5 py-2 rounded-xl"
                >
                    + Agregar Prenda
                </button>
            </div>

            <FiltroCategoria
                categorias={categorias}
                value={categoriaSeleccionada}
                onChange={setCategoriaSeleccionada}
            />

            <Buscador
                value={busqueda}
                onChange={setBusqueda}
            />

            <TablaProductos
                productos={filtrados}
                expandido={expandido}
                setExpandido={setExpandido}
                eliminarProducto={eliminarProducto}
                navigate={navigate}
                estaAgotado={estaAgotado}
            />

        </div>
    )
}

export default Productos