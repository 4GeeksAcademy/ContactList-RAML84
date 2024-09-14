import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faAddressBook, faEnvelope, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';




export const Contact = () => {
	const { store, actions } = useContext(Context);
	const [id, setId] = useState("");
	function deleteOneContact(element) {
		setId(element);
	}
	function confirmDelete() {
		actions.deleteContact(id);
	}
	function idUpdateContact(id, name, address, phone, email) {
		actions.setIdForUpdate(id, name, address, phone, email);
	}
	return (
		<div>
			{store.Contacts.length === 0 && <span className="m-5 p-5 text-danger">No existe ningún contacto</span>}
			{store.Contacts.map((contact) => {
				return (
					<div key={contact.id} className="row border rounded m-2">
						<div className="col-3 col-lg-2 p-2 mx-4 my-auto">
							<img src="https://estaticos-cdn.prensaiberica.es/clip/1679ed64-223a-48e9-a2b7-8567e7339e32_alta-libre-aspect-ratio_default_0.jpg" className="card-img square" alt="..." />
						</div>
						<div className="col p-2 my-auto">
							<div className="row d-flex">
								<div className="col-12 py-3">
									<h2 className="pt-2">{contact.name}</h2>
								</div>
								<div className="col">
									<div className="d-flex align-items-center">
										<FontAwesomeIcon icon={faPhone} /> {contact.phone}
									</div>
									<div className="d-flex align-items-center">
										<FontAwesomeIcon icon={faAddressBook} /> {contact.address}
									</div>
									<div className="d-flex align-items-center">
										<FontAwesomeIcon icon={faEnvelope} /> {contact.email}
									</div>
								</div>
							</div>
						</div>
						<div className="container-fluid d-flex justify-content-end mb-2 mt-2">
							<div className="d-flex align-items-start mt-3">
								<Link to="/updateContact">
									<button onClick={() => idUpdateContact(contact.id, contact.name, contact.address, contact.phone, contact.email)} className="btn">
										<FontAwesomeIcon icon={faPenToSquare} />
									</button>
								</Link>
							</div>
							<div className="d-flex align-items-start mt-3">
								<button onClick={() => deleteOneContact(contact.id)} className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
									<FontAwesomeIcon icon={faTrash} />
								</button>
							</div>
						</div>
					</div>
				);
			})}
			<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Seguro?</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Se eliminará de los contactos!!!
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Mejor no</button>
							<button onClick={() => confirmDelete()} type="button" className="btn btn-danger" data-bs-dismiss="modal">Eliminar de todos modos!</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

