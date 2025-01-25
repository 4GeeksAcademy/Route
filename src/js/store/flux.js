const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//Listar mis contactos con método GET
			traerContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alex_contact/contacts")
					.then(data => data.json())
					.then(response => setStore({ contactos: response.contacts }))
			},
			//Añadir contacto con método POST
			añadirContactos: () => {
				fetch("https://playground.4geeks.com/contact/agendas/alex_contact/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(nuevoContacto)
				})
			},
			//Actualizar contacto con método PUT
			actualizarContacto: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/alex_contact/contacts/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(datosActualizados)
				})
			},
			//Eliminar contacto con método DELETE
			eliminarContacto: () => {
				fetch(`https://playground.4geeks.com/contact/agendas/alex_contact/contacts/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
			}
		}
	};
};

export default getState;
