const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: []
		},
		actions: {
			//Cargar la agenda llamada "alex_contact" y si no existe, la crea
			traerAgenda: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alex_contact")
					.then(response => {
						if (response.status === 404) {
							return fetch("https://playground.4geeks.com/contact/agendas/alex_contact"), {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								}
							};
						} else {
							return response.json();
						}
					})
					.catch(error => {
						console.error("Error:", error);
					});
			},

			//Listar mis contactos con método GET
			traerContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alex_contact/contacts")
					.then(data => data.json())
					.then(response => setStore({ contactos: response.contacts }))
			},

			//Añadir contacto con método POST
			añadirContactos: (nuevoContacto) => {
				fetch("https://playground.4geeks.com/contact/agendas/alex_contact/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(nuevoContacto)
				})
				.then(response => response.json())
				.then(() => {
					getActions().traerContactos();
				})
				.catch(error => console.error("Error:", error));
			},

			//Actualizar contacto con método PUT
			actualizarContacto: (id, datosActualizados) => {
				fetch(`https://playground.4geeks.com/contact/agendas/alex_contact/contacts/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(datosActualizados)
				})
				.then(() => {
					getActions().traerContactos(); // Recargar la lista de contactos
				})
				.catch(error => console.error("Error:", error));
			},

			//Eliminar contacto con método DELETE
			eliminarContacto: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/alex_contact/contacts/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
				.then(() => {
					getActions().traerContactos(); // Recargar la lista
				})
				.catch(error => console.error("Error:", error));
			}
		}
	};
};

export default getState;
