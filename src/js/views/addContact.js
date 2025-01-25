import React from "react";

export const AddContact = () => {
  return (
    <div className="text-center mt-5">
      <h1>Añadir contacto:</h1>
      <form>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="string"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Teléfono</label>
          <input type="number"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Correo electrónico</label>
          <input type="email"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Dirección</label>
          <input type="string"/>
        </div>
        <button type="submit" className="btn btn-primary">Añadir</button>
      </form>
    </div>
  );
};