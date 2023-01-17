import { Modal } from "bootstrap";

export default function createModal(modalElement) {
	console.log("create a modal");
	
	let modal = document.querySelector(".modal")
	console.log(modal)
	if (modal) modal.remove()

	const modalParser = new DOMParser().parseFromString(modalElement, "text/html")
	modal = modalParser.querySelector(".modal") 
	var myModal = new Modal(modal)
	document.body.append(modal)

	return myModal

}