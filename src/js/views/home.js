import React from "react";
import agenda from "../../img/agenda.png";
import "../../styles/home.css";

export const Home = () => {

	return (
		<div className="text-center mt-5">
			<h1>Mi Agenda:</h1>
			<p>
				<img src={agenda} />
			</p>
		</div>
	)
}
