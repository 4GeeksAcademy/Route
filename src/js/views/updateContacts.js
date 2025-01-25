import React from "react";

export const UpdateContacts = () => (
    <div className="text-center mt-5">
        <h1>Actualizar contacto:</h1>
        <h2>
            <Link to={"/contact"} >
                <button className="btn btn-info">Lista de contactos</button>
            </Link>
        </h2>
    </div>
);
