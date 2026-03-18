import ProductCard from "../home/ProductCard.jsx";

function CategoryPage({ titulo, productos }) {
  return (
    <section className="bg-[#ffe2e7] px-auto mx-auto py-10">

      <h1 className="text-3xl font-bold text-center mb-10">
        {titulo}
      </h1>

      <div className="grid gap-10 justify-items-center
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-3
                      lg:grid-cols-4">

        {productos.map((p, i) => (
          <ProductCard
            key={i}
            nombre={p.nombre}
            precio={p.precio}
            imagen={p.imagen}
          />
        ))}

      </div>

    </section>
  );
}

export default CategoryPage;