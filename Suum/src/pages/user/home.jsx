import FeaturedProducts from "./components/home/FeaturedProducts";
import Collections from "./components/home/Collections";

function Home() {

    const productos = [
        {
            nombre: "Vestido Polka",
            precio: "39.00",
            imagen: "/src/assets/des1.jpg"
        },
        {
            nombre: "Blazer príncipe de Gales",
            precio: "69.00",
            imagen: "/src/assets/des2.jpg"
        },
        {
            nombre: "Set sastre",
            precio: "69.00",
            imagen: "/src/assets/des3.jpg"
        },
        {
            nombre: "Set vichy",
            precio: "45.00",
            imagen: "/src/assets/des4.jpg"
        },
    ];

    return (
        <section className="bg-[#ffe2e7] w-full">

            {/* BANNER */}
            <div className="w-full overflow-hidden">
                <img
                    src="/src/assets/banner.jpg"
                    alt="banner"
                    className="w-full object-cover"
                />
            </div>

            {/* DESTACADOS */}
            <div className="max-w-7xl mx-auto py-12 px-4">

                {/* Título */}
                <h2 className="text-center font-semibold text-2xl mb-6">
                    DESTACADOS
                </h2>
                <FeaturedProducts productos={productos} />
                <FeaturedProducts productos={productos} />

                {/* COLECCIONES */}
                <Collections />

                <FeaturedProducts productos={productos} />
            </div>
        </section>
    );
}

export default Home;