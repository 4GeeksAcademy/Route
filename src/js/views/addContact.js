import { useState } from "react";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions } = useContext(Context);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.añadirContactos(formData);
    setFormData({ name: "", phone: "", email: "", address: "" });
  };

  return (
    <div className="formulario">
      <div className="añadir">
        <h1>Añadir contacto:</h1>
        <form onSubmit={handleSubmit}>
          <div className="campo">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="campo">
            <label htmlFor="phone">Teléfono</label>
            <input type="number" name="phone" id="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="campo">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="campo">
            <label htmlFor="address">Dirección</label>
            <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} required />
          </div>
          <button type="submit" className="botón btn btn fw-bold shadow">Añadir</button>
        </form>
      </div>
    </div>
  );
};
