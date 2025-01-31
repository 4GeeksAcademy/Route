import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="d-flex align-items-center gap-3">
        <h1 className="text-white">Mi Agenda</h1>
        <Link to="/">
          <button className="botón btn btn fw-bold">
            Inicio
          </button>
        </Link>
        <Link to="/contact">
          <button className="botón btn btn fw-bold">
            Mis contactos
          </button>
        </Link>
        <Link to="/addContact">
          <button className="botón btn btn fw-bold">
            Añadir contacto
          </button>
        </Link>
      </div>
    </nav>
  );
};
