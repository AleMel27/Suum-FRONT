import { useState } from "react"

function Perfil() {

  const [admin, setAdmin] = useState({
    nombre: "Juan Pérez",
    email: "juan@suum.com",
    edad: 32,
    dni: "12345678",
    telefono: "+51 987654321",
    direccion: "Av. Principal 123, Lima",
    ciudad: "Lima",
    pais: "Perú"
  })

  const [editar, setEditar] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setAdmin({
      ...admin,
      [name]: value
    })
  }

  const handleGuardar = () => {
    setEditar(false)
  }

  return (
    <div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Mi Perfil</h2>
        <button
          onClick={() => setEditar(!editar)}
          className={`px-6 py-2 rounded-lg font-semibold transition-all duration-200 ${
            editar
              ? "bg-gray-400 hover:bg-gray-500 text-white"
              : "bg-[#ff8abe] hover:bg-[#ff73ab] text-white"
          }`}
        >
          {editar ? "Cancelar" : "✏️ Editar"}
        </button>
      </div>

      {/* TARJETA DE PERFIL */}
      <div className="bg-white rounded-2xl shadow-sm p-8 border border-[#ffe3ec]">

        {/* FOTO DE PERFIL */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-[#ffe2e7] rounded-full flex items-center justify-center text-4xl shadow-md">
            <i className="fa-solid fa-user"></i>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="max-w-2xl mx-auto">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

            {/* NOMBRE */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre Completo
              </label>
              <input
                type="text"
                name="nombre"
                value={admin.nombre}
                onChange={handleChange}
                disabled={!editar}
                className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                  editar
                    ? "border-[#ffc4d6] focus:border-[#ff8abe] focus:ring-2 focus:ring-[#ffe2e7]"
                    : "border-gray-200 bg-gray-50"
                } disabled:cursor-not-allowed`}
              />
            </div>

            {/* EDAD */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Edad
              </label>
              <input
                type="number"
                name="edad"
                value={admin.edad}
                onChange={handleChange}
                disabled={!editar}
                className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                  editar
                    ? "border-[#ffc4d6] focus:border-[#ff8abe] focus:ring-2 focus:ring-[#ffe2e7]"
                    : "border-gray-200 bg-gray-50"
                } disabled:cursor-not-allowed`}
              />
            </div>

            {/* DNI */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                DNI
              </label>
              <input
                type="text"
                name="dni"
                value={admin.dni}
                onChange={handleChange}
                disabled={!editar}
                className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                  editar
                    ? "border-[#ffc4d6] focus:border-[#ff8abe] focus:ring-2 focus:ring-[#ffe2e7]"
                    : "border-gray-200 bg-gray-50"
                } disabled:cursor-not-allowed`}
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={admin.email}
                onChange={handleChange}
                disabled={!editar}
                className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                  editar
                    ? "border-[#ffc4d6] focus:border-[#ff8abe] focus:ring-2 focus:ring-[#ffe2e7]"
                    : "border-gray-200 bg-gray-50"
                } disabled:cursor-not-allowed`}
              />
            </div>

            {/* TELÉFONO */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Teléfono
              </label>
              <input
                type="tel"
                name="telefono"
                value={admin.telefono}
                onChange={handleChange}
                disabled={!editar}
                className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                  editar
                    ? "border-[#ffc4d6] focus:border-[#ff8abe] focus:ring-2 focus:ring-[#ffe2e7]"
                    : "border-gray-200 bg-gray-50"
                } disabled:cursor-not-allowed`}
              />
            </div>

            {/* CIUDAD */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Ciudad
              </label>
              <input
                type="text"
                name="ciudad"
                value={admin.ciudad}
                onChange={handleChange}
                disabled={!editar}
                className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                  editar
                    ? "border-[#ffc4d6] focus:border-[#ff8abe] focus:ring-2 focus:ring-[#ffe2e7]"
                    : "border-gray-200 bg-gray-50"
                } disabled:cursor-not-allowed`}
              />
            </div>

          </div>

          {/* DIRECCIÓN */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Dirección
            </label>
            <textarea
              name="direccion"
              value={admin.direccion}
              onChange={handleChange}
              disabled={!editar}
              rows="3"
              className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                editar
                  ? "border-[#ffc4d6] focus:border-[#ff8abe] focus:ring-2 focus:ring-[#ffe2e7]"
                  : "border-gray-200 bg-gray-50"
              } disabled:cursor-not-allowed`}
            />
          </div>

          {/* PAÍS */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              País
            </label>
            <input
              type="text"
              name="pais"
              value={admin.pais}
              onChange={handleChange}
              disabled={!editar}
              className={`w-full px-4 py-2 rounded-lg border-2 transition-all ${
                editar
                  ? "border-[#ffc4d6] focus:border-[#ff8abe] focus:ring-2 focus:ring-[#ffe2e7]"
                  : "border-gray-200 bg-gray-50"
              } disabled:cursor-not-allowed`}
            />
          </div>

          {/* BOTÓN GUARDAR */}
          {editar && (
            <div className="flex gap-4">
              <button
                onClick={handleGuardar}
                className="flex-1 bg-[#ff8abe] hover:bg-[#ff73ab] text-white py-2 rounded-lg font-semibold transition-all duration-200"
              >
                💾 Guardar cambios
              </button>
            </div>
          )}

        </div>

      </div>

    </div>
  )
}

export default Perfil
