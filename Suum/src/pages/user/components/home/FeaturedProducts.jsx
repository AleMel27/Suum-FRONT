import ProductCard from "./ProductCard";

function FeaturedProducts({ productos }) {
    return (
        <div className="grid gap-10 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-5">

            {productos.map((p) => (
                <ProductCard
                    key={p.id_producto}
                    nombre={p.nombre}
                    precio={p.precio}
                    imagen={p.imagen ? p.imagen : "/src/assets/no-image.jpg"}
                />
            ))}

        </div>
    );
}

export default FeaturedProducts;