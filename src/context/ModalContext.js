import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Crear context
export const ModalContext = createContext();

const ModalProvider = (props) => {
  // State del provider
  const [idReceta, setIdReceta] = useState(null);
  const [receta, setReceta] = useState({});

  // Una vez que tenemos una receta, llamar la API
  useEffect(() => {
    const obtenerReceta = async () => {
      if (!idReceta) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`;
      const resultado = await axios.get(url);
      setReceta(resultado.data.drinks[0]);
    };
    obtenerReceta();
  }, [idReceta]);

  return (
    <ModalContext.Provider value={{ setIdReceta }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
