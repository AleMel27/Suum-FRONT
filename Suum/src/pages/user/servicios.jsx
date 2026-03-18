function Servicios() {
  return (
    <section className="bg-[#ffe2e7]">

      {/* TITULO */}
      <article className="max-w-6xl mx-auto py-16 px-6 text-center">

        <h1 className="text-4xl font-bold mb-6">
          Nuestros Servicios
        </h1>

        <p className="text-gray-600 text-lg">
          En Süüm buscamos ofrecer una experiencia de compra
          rápida, segura y confiable para todos nuestros clientes.
        </p>

      </article>

      {/* SERVICIOS */}
      <article className="max-w-6xl mx-auto grid grid-cols-3 gap-10 pb-16 px-6 text-center">

        <div className="p-6 border rounded-lg hover:shadow-lg transition bg-gray-100">
          <h3 className="text-xl font-semibold mb-3">
            Envíos rápidos
          </h3>
          <p className="text-gray-600">
            Entregamos tus pedidos de manera rápida y segura
            para que disfrutes tus prendas lo antes posible.
          </p>
        </div>

        <div className="p-6 border rounded-lg hover:shadow-lg transition bg-gray-100">
          <h3 className="text-xl font-semibold mb-3">
            Compra segura
          </h3>
          <p className="text-gray-600">
            Garantizamos seguridad en cada compra mediante
            sistemas de pago confiables.
          </p>
        </div>

        <div className="p-6 border rounded-lg hover:shadow-lg transition bg-gray-100">
          <h3 className="text-xl font-semibold mb-3">
            Atención al cliente
          </h3>
          <p className="text-gray-600">
            Nuestro equipo está disponible para ayudarte
            en cualquier consulta o problema.
          </p>
        </div>

      </article>

      {/* SEGUNDA FILA */}
      <article className="max-w-6xl mx-auto grid grid-cols-3 gap-10 pb-20 px-6 text-center">

        <div className="p-6 border rounded-lg hover:shadow-lg transition bg-gray-100">
          <h3 className="text-xl font-semibold mb-3">
            Cambios y devoluciones
          </h3>
          <p className="text-gray-600">
            Si el producto no cumple tus expectativas,
            podrás solicitar un cambio fácilmente.
          </p>
        </div>

        <div className="p-6 border rounded-lg hover:shadow-lg transition bg-gray-100">
          <h3 className="text-xl font-semibold mb-3">
            Nuevas colecciones
          </h3>
          <p className="text-gray-600">
            Constantemente agregamos nuevos diseños
            inspirados en tendencias actuales.
          </p>
        </div>

        <div className="p-6 border rounded-lg hover:shadow-lg transition bg-gray-100">
          <h3 className="text-xl font-semibold mb-3">
            Experiencia de compra
          </h3>
          <p className="text-gray-600">
            Diseñamos nuestra tienda para que comprar
            sea simple, rápido y agradable.
          </p>
        </div>

      </article>

    </section>
  )
}

export default Servicios