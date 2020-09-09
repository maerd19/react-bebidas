import React, { useContext } from "react";
import { ModalContext } from "./../context/ModalContext";

import PropTypes from "prop-types";

const Receta = ({ receta }) => {
  // Extraer valores del context
  const { setIdReceta } = useContext(ModalContext);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>

        <img
          src={receta.strDrinkThumb}
          alt={`Imagen de ${receta.strDrink}`}
          className="card-img-top"
        />

        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => setIdReceta(receta.idDrink)}
          >
            Ver Receta
          </button>
        </div>
      </div>
    </div>
  );
};

Receta.propTypes = {
  receta: PropTypes.object.isRequired,
};

export default Receta;
