function Consultas() {
  return (
    <section className="bg-[#ffe2e7]">

      <article className="max-w-4xl mx-auto py-16 px-6">

        <h1 className="text-4xl font-bold text-center mb-8">
          Consultas
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Si tienes alguna duda sobre nuestros productos o pedidos,
          puedes enviarnos una consulta y nuestro equipo te responderá
          lo antes posible.
        </p>

        <form className="grid gap-6">

          <input
            type="text"
            placeholder="Nombre"
            className="border p-3 rounded"
          />

          <input
            type="email"
            placeholder="Correo electrónico"
            className="border p-3 rounded"
          />

          <textarea
            placeholder="Escribe tu consulta..."
            className="border p-3 rounded h-32"
          />

          <button
            className="bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          >
            Enviar consulta
          </button>

        </form>

      </article>

    </section>
  )
}

export default Consultas