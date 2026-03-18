import CategoryPage from "./components/prendas/CategoryPage.jsx";

function Blusas() {

  const productos = [
    {
      nombre: "Blusa elegante",
      precio: "79.00",
      imagen: "/src/assets/des1.jpg"
    },
    {
      nombre: "Blusa floral",
      precio: "69.00",
      imagen: "/src/assets/des2.jpg"
    }
  ];

  return (
    <CategoryPage
      titulo="Blusas"
      productos={productos}
    />
  );
}

export default Blusas;