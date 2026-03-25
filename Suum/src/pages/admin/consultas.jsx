import { useState } from "react"

function Consultas() {
  const [busqueda, setBusqueda] = useState("")
  const [consultaActiva, setConsultaActiva] = useState(null)

  const consultas = [
    {
      id: 1,
      nombre: "María Gómez",
      email: "maria@example.com",
      mensaje: `Hola equipo, espero que estén muy bien. Les escribo porque necesito información detallada sobre el stock de la blusa fucsia talla M y de otras prendas relacionadas. En la última semana fui al local físico y me comentaron que posiblemente quedaba poca unidad, pero no obtuve confirmación. Por eso ahora estoy revisando el sitio web y me gustaría saber qué cantidad exacta hay disponible de ese mismo modelo en fucsia, y si existe disponibilidad en colores alternativos como blanco, negro, azul y rosa pastel. Además, quisiera saber si el corte es el mismo en todas las tallas o si hay diferencias de ajuste. Mi experiencia anterior con la misma prenda fue excelente, pero ahora me gustaría tener certeza porque quiero realizar un pedido grande para una sesión de fotos que tenemos la próxima semana.

También quiero preguntar sobre tiempos de envío a Lima Metropolitana. La última vez mi pedido tardó 4 días, pero en esta ocasión necesito que llegue lo antes posible, idealmente antes del viernes. ¿Tienen alguna opción express o prioridad? En caso de no haber stock inmediato, ¿es posible reservar el producto y avisarme cuando entre nuevamente? ¿Cuáles son las condiciones para reserva, y cuánto tiempo dura la disponibilidad reservada?

Otra duda relacionada es si tienen algún sistema de descuentos por compras superiores a cierto monto, o si hay códigos promocionales vigentes para esta temporada. Si se puede aplicar algún descuento a un pedido consistente en varias tallas, sería perfecto.

Por último, quisiera saber si el envío incluye una caja de regalo opcional o envoltorio especial; sería para un regalo de cumpleaños. Agradezco su tiempo y espero su respuesta detallada para poder finalizar mi compra hoy mismo.`,
      fecha: "2026-03-19"
    },
    {
      id: 2,
      nombre: "Carlos Díaz",
      email: "carlos@example.com",
      mensaje: "¿Cuánto demora el envío a provincia?",
      fecha: "2026-03-18"
    },
    {
      id: 3,
      nombre: "Luisa Rojas",
      email: "luisa@example.com",
      mensaje: "Necesito cambiar la dirección de mi pedido N° 2458.",
      fecha: "2026-03-17"
    }
  ]

  const consultasFiltradas = consultas.filter(({ nombre, email, fecha }) => {
    const termino = busqueda.toLowerCase()
    return (
      nombre.toLowerCase().includes(termino) ||
      email.toLowerCase().includes(termino) ||
      fecha.includes(termino)
    )
  })

  const abrirDetalle = (consulta) => {
    setConsultaActiva(consulta)
  }

  const cerrarDetalle = () => {
    setConsultaActiva(null)
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Consultas recibidas</h2>
          <p className="text-sm text-gray-500">Listado con filtros en tabla y detalles en modal</p>
        </div>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre, email o fecha..."
          className="w-full md:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#ff8abe]"
        />
      </div>

      <div className="w-full bg-white border border-[#ffe3ec] rounded-2xl overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#fff1f7]">
            <tr>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Nombre</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Email</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Fecha</th>
              <th className="px-6 py-3 text-sm font-semibold text-gray-700">Acción</th>
            </tr>
          </thead>
          <tbody>
            {consultasFiltradas.length ? (
              consultasFiltradas.map((consulta) => (
                <tr key={consulta.id} className="border-t border-[#ffe3ec] hover:bg-[#fff4f9]">
                  <td className="px-6 py-4 text-sm text-gray-800">{consulta.nombre}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{consulta.email}</td>
                  <td className="px-6 py-4 text-sm text-gray-800">{consulta.fecha}</td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => abrirDetalle(consulta)}
                      className="px-3 py-1 rounded-lg bg-[#ff8abe] text-white hover:bg-[#ff73ab] transition"
                    >
                      Ver detalle
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-gray-500">
                  No se encontraron consultas que coincidan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {consultaActiva && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 overflow-y-auto">
          <div className="w-full max-w-lg sm:max-w-2xl bg-white rounded-2xl shadow-xl border border-[#ffd6e2] p-6 relative">
            <button
              onClick={cerrarDetalle}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-gray-800 mb-2">Detalle de consulta</h3>
            <p className="text-sm text-gray-500 mb-4">{consultaActiva.fecha}</p>

            <div className="grid grid-cols-1 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Nombre</p>
                <p className="font-medium text-gray-700">{consultaActiva.nombre}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-medium text-gray-700">{consultaActiva.email}</p>
              </div>
            </div>

            <div className="mb-4">
              <p className="text-xs text-gray-500">Mensaje</p>
              <p className="border border-[#ffe3ec] rounded-lg p-4 text-gray-700 bg-[#fff5f9]">{consultaActiva.mensaje}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Consultas
