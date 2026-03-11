import ProductCard from "./components/ProductCard";

function Home() {

    const productos = [
        {
            nombre: "Vestido Polka",
            precio: "139.00",
            imagen: "/src/assets/des1.jpg"
        },
        {
            nombre: "Blazer príncipe de Gales",
            precio: "169.00",
            imagen: "/src/assets/des2.jpg"
        },
        {
            nombre: "Set sastre",
            precio: "239.00",
            imagen: "/src/assets/des3.jpg"
        },
        {
            nombre: "Set vichy",
            precio: "130.00",
            imagen: "/src/assets/des4.jpg"
        },
    ];

    return (
        <section className="bg-[#fab168] w-full">

            {/* BANNER */}
            <div className="w-full overflow-hidden">
                <img
                    src="/src/assets/banner.jpg"
                    alt="banner"
                    className="w-full object-cover"
                />
            </div>

            {/* DESTACADOS */}
            <article className="max-w-7xl mx-auto py-6">

                <h2 className="text-center font-semibold text-2xl mb-6">
                    DESTACADOS
                </h2>

                <div className="grid grid-cols-4 gap-8 justify-items-center">

                    {productos.map((p, i) => (
                        <ProductCard
                            key={i}
                            nombre={p.nombre}
                            precio={p.precio}
                            imagen={p.imagen}
                        />
                    ))}

                </div>

            </article>

            {/* GALERIA */}
            <article className="max-w-7xl mx-auto grid grid-cols-4 grid-rows-2 gap-6 pb-6">

                <img src="/src/assets/gal1.jpg" className="w-full h-full object-cover" />
                <img src="/src/assets/gal2.jpg" className="w-full h-full object-cover" />

                <img
                    src="/src/assets/gal3.jpg"
                    className="col-span-2 row-span-2 w-full h-full object-cover"
                />

                <img src="/src/assets/gal4.jpg" className="w-full h-full object-cover" />
                <img src="/src/assets/gal5.jpg" className="w-full h-full object-cover" />

            </article>

        </section>
    );
}

export default Home;