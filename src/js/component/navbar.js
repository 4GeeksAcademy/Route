import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<button className="btn btn-info">Inicio</button>
				</span>
			</Link>
			<h1>
				<Link to={"/contact"} >
					<button className="btn btn-warning">Lista de contactos</button>
				</Link>
				<Link to={"/addContact"} >
					<button className="btn btn-success">Añadir contacto</button>
				</Link>
			</h1>
		</nav>
	);
};
