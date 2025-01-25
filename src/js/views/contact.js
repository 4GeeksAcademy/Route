import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Contact = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.traerContactos()
	}, [])

	return (
		<div className="text-center mt-5">
			<h1>Lista de contactos:</h1>
			{
				store.contactos.map((contacto) => {
					return(
						<div>
							<h1>· {contacto.name}</h1>
						</div>
					)
				} )
			}
		</div>
	)
}
