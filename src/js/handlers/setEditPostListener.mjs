import * as posts from "../api/posts/update.mjs";
import { convertTagsStringToArray } from "../functions/convertTagsToArray.mjs";
import createModal from "../functions/createModal.mjs";
export async function setEditPostListener() {
  const editPostForm = document.querySelector("#formEditPost");

  editPostForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const postID = new URLSearchParams(window.location.search).get("id");
    formData.append("id", postID);

    const tagsArray = convertTagsStringToArray(formData.get("tags"));

    const editPostData = Object.fromEntries(formData.entries());
    editPostData.tags = tagsArray;

    console.log(editPostData);
		const response = await posts.updatePost(editPostData);
		console.log(response)
		if (response.ok) {
			const modal = createModal(modalElement)
			modal.show()
		}
  });
}

function modalElement() {

	const modalElement = `
	<div class="modal fade" id="modalCreatedPost" tabindex="-1" aria-labelledby="modalCreatedPost" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="modalCreatedPost">Modal title</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					post was edited!
				</div>
			</div>
		</div>
	</div>
	`
	return modalElement
}