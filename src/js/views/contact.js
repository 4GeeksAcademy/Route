import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    actions.traerContactos();
  }, []);

  const handleEdit = (contacto) => {
    setEditData(contacto);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    actions.actualizarContacto(editData.id, editData);
    setEditData(null);
  };

  return (
    <div className="lista">
      <h1>Lista de contactos:</h1>
      {store.contactos && store.contactos.length > 0 ? (
        store.contactos.map((contacto) => (
          <div key={contacto.id} className="card">
            <div className="card-body">
              <h2>{contacto.name}</h2>
              <p>📞 {contacto.phone}</p>
              <p>✉️ {contacto.email}</p>
              <p>📍 {contacto.address}</p>
              <button className="botón2 btn btn fw-bold mx-2" onClick={() => actions.eliminarContacto(contacto.id)}>
                🗑 Eliminar
              </button>
              <button className="botón2 btn btn fw-bold mx-2" onClick={() => handleEdit(contacto)}>
                ✏️ Editar
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No hay ningún contacto disponible.</p>
      )}

      {editData && (
        <div className="editar">
          <h3>Editar Contacto</h3>
          <form onSubmit={handleUpdate}>
            <div className="campo">
              <label htmlFor="name">Nombre</label>
              <input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} required />
            </div>
            <div className="campo">
              <label htmlFor="phone">Teléfono</label>
              <input type="text" value={editData.phone} onChange={(e) => setEditData({ ...editData, phone: e.target.value })} required />
            </div>
            <div className="campo">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} required />
            </div>
            <div className="campo">
              <label htmlFor="address">Dirección</label>
              <input type="text" value={editData.address} onChange={(e) => setEditData({ ...editData, address: e.target.value })} required />
            </div>
            <div className="campo2">
              <button type="submit" className="botón btn btn fw-bold mx-2">💾 Guardar</button>
              <button className="botón btn btn fw-bold mx-2" onClick={() => setEditData(null)}>❌ Cancelar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
