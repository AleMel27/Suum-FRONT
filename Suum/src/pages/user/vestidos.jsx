import CategoryPage from "./CategoryPage.jsx";

function Vestidos() {

  const productos = [
    {
      nombre: "Vestido Polka",
      precio: "139.00",
      imagen: "/src/assets/des1.jpg"
    },
    {
      nombre: "Vestido Sara",
      precio: "89.00",
      imagen: "/src/assets/des2.jpg"
    }
  ];

  return (
    <CategoryPage
      titulo="Vestidos"
      productos={productos}
    />
  );
}

export default Vestidos;