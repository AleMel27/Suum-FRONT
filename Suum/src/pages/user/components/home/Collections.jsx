import CollectionCard from "./CollectionCard";

function Collections() {

  const colecciones = [
    {
      titulo: "Vestidos",
      imagen: "/src/assets/gal1.jpg",
      link: "/vestidos"
    },
    {
      titulo: "Blusas",
      imagen: "/src/assets/gal4.jpg",
      link: "/blusas"
    },
    {
      titulo: "Pantalones",
      imagen: "/src/assets/gal5.jpg",
      link: "/pantalones"
    }
  ];

  return (
    <article className="max-w-6xl mx-auto py-10 pt-0">

      <h2 className="text-center font-semibold text-2xl mb-8">
        COLECCIONES
      </h2>

      <div className="flex justify-center gap-8 flex-wrap">

        {colecciones.map((c, i) => (
          <CollectionCard
            key={i}
            titulo={c.titulo}
            imagen={c.imagen}
            link={c.link}
          />
        ))}

      </div>

    </article>
  );
}

export default Collections;