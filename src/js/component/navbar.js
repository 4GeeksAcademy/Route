import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar px-4 py-3 shadow-lg" style={{ 
      background: "linear-gradient(90deg, #007bff, #6610f2)"
    }}>
      <div className="d-flex align-items-center gap-3">
		<h1 className="text-white">Mi Agenda</h1>
        <Link to="/">
          <button className="btn btn-info fw-bold shadow" style={{ borderRadius: "20px" }}>
            Inicio
          </button>
        </Link>
        <Link to="/contact">
          <button className="btn btn-primary fw-bold shadow" style={{ borderRadius: "20px", background: " #6610f2"}}>
            Lista de contactos
          </button>
        </Link>
        <Link to="/addContact">
          <button className="btn btn-success fw-bold shadow" style={{ borderRadius: "20px" }}>
            Añadir contacto
          </button>
        </Link>
      </div>
    </nav>
  );
};
