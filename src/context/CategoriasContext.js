import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentras las funciones y State
const CategoriasProvider = (props) => {
  // crear el state del Context
  const [categorias, setCategorias] = useState([]);

  // Ejecutar el llamado a la API
  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const categorias = await axios.get(url);

      setCategorias(categorias.data.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    // El contenido de value estara disponible en todos los componentes
    <CategoriasContext.Provider value={{ categorias }}>
      {/* Toda la app estara en children y asi se tendra acceso al estado de este context desde cualquier lugar de la app */}
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
