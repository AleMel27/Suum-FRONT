import { useEffect, useState } from "react";
import FeaturedProducts from "./components/home/FeaturedProducts";
import Collections from "./components/home/Collections";

function Home() {

    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
    fetch("https://localhost:7159/api/Productos")
        .then((res) => res.json())
        .then((data) => setProductos(data))
        .catch((error) => console.error(error));
}, []);

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