import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

export const Contact = () => {
  const { store, actions } = useContext(Context);
  const [editData, setEditData] = useState(null); // Estado para el contacto a editar

  useEffect(() => {
    actions.traerContactos();
  }, []);

  const handleEdit = (contacto) => {
    setEditData(contacto); // Cargar datos del contacto en el formulario
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    actions.actualizarContacto(editData.id, editData);
    setEditData(null); // Cerrar formulario después de actualizar
  };

  return (
    <div className="text-center text-white p-5 shadow-lg"
      style={{ background: "linear-gradient(135deg, #28a745, #218838)" }}>
      <h1>Lista de contactos:</h1>
      {store.contactos && store.contactos.length > 0 ? (
        store.contactos.map((contacto) => (
          <div key={contacto.id} className="contact-card m-5 p-3" style={{ border: "1px solid", position: "relative" }}>
            <h2>{contacto.name}</h2>
            <p>📞 {contacto.phone}</p>
            <p>✉️ {contacto.email}</p>
            <p>📍 {contacto.address}</p>
            <button className="btn btn-danger me-2" onClick={() => actions.eliminarContacto(contacto.id)}>
              🗑 Eliminar
            </button>
            <button className="btn btn-warning" onClick={() => handleEdit(contacto)}>
              ✏️ Editar
            </button>
          </div>
        ))
      ) : (
        <p>No hay ningún contacto disponible.</p>
      )}

      {editData && (
        <div className="edit-form p-4 bg-dark text-white" style={{ position: "fixed", top: "20%", left: "30%", width: "40%", borderRadius: "10px" }}>
          <h3>Editar Contacto</h3>
          <form onSubmit={handleUpdate}>
            <input type="text" value={editData.name} onChange={(e) => setEditData({ ...editData, name: e.target.value })} required />
            <input type="text" value={editData.phone} onChange={(e) => setEditData({ ...editData, phone: e.target.value })} required />
            <input type="email" value={editData.email} onChange={(e) => setEditData({ ...editData, email: e.target.value })} required />
            <input type="text" value={editData.address} onChange={(e) => setEditData({ ...editData, address: e.target.value })} required />
            <button type="submit" className="btn btn-success mt-2">💾 Guardar</button>
            <button className="btn btn-secondary mt-2 ms-2" onClick={() => setEditData(null)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
};
