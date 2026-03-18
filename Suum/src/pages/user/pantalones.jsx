import CategoryPage from "./components/prendas/CategoryPage.jsx";

function Pantalones() {

  const productos = [
    {
      nombre: "Pantalón formal",
      precio: "129.00",
      imagen: "/src/assets/des1.jpg"
    },
    {
      nombre: "Pantalón casual",
      precio: "99.00",
      imagen: "/src/assets/des2.jpg"
    }
  ];

  return (
    <CategoryPage
      titulo="Pantalones"
      productos={productos}
    />
  );
}

export default Pantalones;