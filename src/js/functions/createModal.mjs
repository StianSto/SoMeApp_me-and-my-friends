export default function createModal(modalElement) {
	const modalParser = new DOMParser().parseFromString(modalElement, "text/html")

	const myModal = modalParser.querySelector(".modal")
	document.body.append(myModal)
	var modal = new bootstrap.Modal(myModal)
	return modal

}