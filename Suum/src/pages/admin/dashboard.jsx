function Dashboard() {

  const stats = [
    {
      titulo: "Ventas de hoy",
      valor: "S/. 2,450",
      icono: "💰"
    },
    {
      titulo: "Productos registrados",
      valor: "128",
      icono: "👗"
    },
    {
      titulo: "Clientes",
      valor: "54",
      icono: "🧍"
    },
    {
      titulo: "Pedidos pendientes",
      valor: "7",
      icono: "📦"
    }
  ]

  return (
    <div>

      {/* TARJETAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
          >

            <div className="flex items-center justify-between mb-3">

              <h3 className="text-gray-500 text-sm font-semibold">
                {item.titulo}
              </h3>

              <span className="text-2xl">
                {item.icono}
              </span>

            </div>

            <p className="text-3xl font-bold text-gray-800">
              {item.valor}
            </p>

          </div>
        ))}

      </div>


      {/* SECCION ACTIVIDAD */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* ventas recientes */}
        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h2 className="text-lg font-bold mb-4">
            Ventas recientes
          </h2>

          <ul className="space-y-3 text-gray-600">

            <li className="flex justify-between">
              <span>Vestido Floral</span>
              <span className="font-semibold">S/. 129</span>
            </li>

            <li className="flex justify-between">
              <span>Pantalón Casual</span>
              <span className="font-semibold">S/. 99</span>
            </li>

            <li className="flex justify-between">
              <span>Blusa Elegante</span>
              <span className="font-semibold">S/. 89</span>
            </li>

          </ul>

        </div>


        {/* actividad */}
        <div className="bg-white p-6 rounded-xl shadow-sm">

          <h2 className="text-lg font-bold mb-4">
            Actividad reciente
          </h2>

          <ul className="space-y-3 text-gray-600">

            <li>📦 Nuevo pedido recibido</li>
            <li>👤 Nuevo cliente registrado</li>
            <li>👗 Producto agregado</li>
            <li>💳 Pago confirmado</li>

          </ul>

        </div>

      </div>

    </div>
  )
}

export default Dashboard