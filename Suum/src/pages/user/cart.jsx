import { useState } from "react"

function Cart() {

    const [carrito, setCarrito] = useState([
        { id: 1, nombre: "Vestido Polka", talla: "M", precio: 139.00 },
        { id: 2, nombre: "Blusa Floral", talla: "S", precio: 95.00 },
        { id: 3, nombre: "Pantalón Vichy", talla: "L", precio: 120.00 }
    ])

    const eliminarProducto = (id) => {
        setCarrito(carrito.filter(p => p.id !== id))
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const total = carrito.reduce((acc, p) => acc + p.precio, 0)

    return (
        <section className="bg-[#fff0e6] px-4 py-10 min-h-screen">
            <div className="max-w-[1000px] mx-auto mt-12 p-6 bg-white rounded-2xl shadow-md">

                <h3 className="text-2xl font-semibold mb-6">
                    Carrito de Compras
                </h3>

                <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">

                    {carrito.length === 0 ? (
                        <p>El carrito está vacío</p>
                    ) : (

                        carrito.map(producto => (

                            <div
                                key={producto.id}
                                className="flex flex-col justify-between bg-white rounded-2xl p-4 shadow-md transition-transform duration-200 hover:scale-105"
                            >

                                <div className="text-center flex-grow">

                                    <h4 className="text-lg text-[#353535] mb-1 font-semibold">
                                        {producto.nombre}
                                    </h4>

                                    <p className="text-sm text-gray-600">
                                        Talla: {producto.talla}
                                    </p>

                                    <p className="font-bold text-[#f07368] text-base mt-2">
                                        S/ {producto.precio.toFixed(2)}
                                    </p>

                                </div>

                                <button
                                    onClick={() => eliminarProducto(producto.id)}
                                    className="mt-3 bg-[#ff8abe] text-white py-2 rounded-lg text-sm hover:bg-[#e965a4] transition"
                                >
                                    Eliminar
                                </button>

                            </div>

                        ))

                    )}

                </div>

                <p className="pt-5 text-right text-lg font-semibold">
                    Total: S/ {total.toFixed(2)}
                </p>

                <button
                    onClick={vaciarCarrito}
                    className="mt-6 px-5 py-2 text-white bg-[#ffa8a8] rounded-xl hover:bg-[#f26b6b] transition"
                >
                    Vaciar carrito
                </button>

            </div>
        </section>

    )
}

export default Cart