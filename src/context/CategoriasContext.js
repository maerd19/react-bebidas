import React, { createContext, useState } from "react";

// Crear el Context
export const CategoriasContext = createContext();

// Provider es donde se encuentras las funciones y State
const CategoriasProvider = (props) => {
  // crear el state del Context
  const [hola, setHola] = useState("hola desde state");

  return (
    // El contenido de value estara disponible en todos los componentes
    <CategoriasContext.Provider value={{ hola }}>
      {/* Toda la app estara en children y asi se tendra acceso al estado de este context desde cualquier lugar de la app */}
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
