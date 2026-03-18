function Nosotros() {
  return (
    <section className="bg-[#ffe2e7]">

      {/* HERO */}
      <div className="w-full h-[400px] overflow-hidden">
        <img
          src="/src/assets/banner.jpg"
          alt="nosotros"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENIDO */}
      <article className="max-w-5xl mx-auto py-16 px-6 text-center">

        <h1 className="text-4xl font-bold mb-6">
          Sobre Nosotros
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          En Süüm creemos que la moda es una forma de expresión.
          Cada prenda que diseñamos busca transmitir confianza,
          estilo y autenticidad. Nuestra misión es ofrecer ropa
          moderna y elegante que acompañe a las personas en su día a día.
        </p>

        <p className="text-gray-600 text-lg leading-relaxed">
          Trabajamos con materiales de calidad y diseños pensados
          para destacar. Queremos que cada colección refleje
          personalidad, comodidad y tendencia.
        </p>

      </article>

      {/* VALORES */}
      <article className="bg-[#f8f8f8] py-16">

        <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Calidad
            </h3>
            <p className="text-gray-600">
              Prendas diseñadas con materiales seleccionados
              para garantizar durabilidad y estilo.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Estilo
            </h3>
            <p className="text-gray-600">
              Diseños modernos inspirados en tendencias
              internacionales.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              Confianza
            </h3>
            <p className="text-gray-600">
              Queremos que cada cliente se sienta seguro
              y cómodo con nuestras prendas.
            </p>
          </div>

        </div>

      </article>

    </section>
  )
}

export default Nosotros