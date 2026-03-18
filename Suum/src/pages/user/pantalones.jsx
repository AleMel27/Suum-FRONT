import { useEffect, useState } from "react";
import CategoryPage from "./components/prendas/CategoryPage.jsx";

function Pantalones() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {

    fetch("https://localhost:7159/api/Productos")
      .then(res => res.json())
      .then(data => {

        const pantalones = data.filter(
          p => p.id_categoria === 3
        );

        setProductos(pantalones);

      })
      .catch(err => console.error(err));

  }, []);

  return (
    <CategoryPage
      titulo="Pantalones"
      productos={productos}
    />
  );
}

export default Pantalones;