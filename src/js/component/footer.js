import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center text-white" style={{ 
		background: "linear-gradient(90deg, #007bff, #6610f2)"
	}}>
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a className="text-white" href="http://www.4geeksacademy.com">4Geeks Academy</a>
		</p>
		<p>© 2025 Alejandro Martínez Luján</p>
	</footer>
);
