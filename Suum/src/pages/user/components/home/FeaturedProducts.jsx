import ProductCard from "./ProductCard";

function FeaturedProducts({ productos }) {
    return (
            <div className="grid gap-10 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5">

                {productos.map((p, i) => (
                    <ProductCard
                        key={i}
                        nombre={p.nombre}
                        precio={p.precio}
                        imagen={p.imagen}
                    />
                ))}

            </div>
    );
}

export default FeaturedProducts;