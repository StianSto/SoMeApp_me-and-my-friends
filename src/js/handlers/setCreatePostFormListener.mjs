import * as posts from "../api/posts/index.mjs";
import { createPost } from "../api/posts/create.mjs";
import { convertTagsStringToArray } from "../functions/convertTagsToArray.mjs";
import { postTemplate } from "../templates/postTemplate.mjs";
import createFlagString from "../functions/createFlagString.mjs";
import * as storage from "../storage/index.mjs";
import createModal from "../functions/createModal.mjs";
import { setDeletePostListener } from "./setDeletePostListener.mjs";

export async function setCreatePostFormListener() {
  const createPostForm = document.querySelector("#form-create-post");

  createPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // convert tags string to array of tags
    const tags = convertTagsStringToArray(formData.get("tags"));

    const profileData = Object.fromEntries(formData.entries());
    profileData.tags = tags;

    (async () => {
      const response = await createPost(profileData);
      console.log(response);
      if (response.id) {
        const newPost = await posts.getPost(response.id, flagstring);
        const container = document.querySelector("#posts-wall");

        const addAuthor = { author: storage.load("userProfile") };

        const prependNewPost = {
          ...newPost,
          ...addAuthor,
        };

				container.prepend(postTemplate(prependNewPost));

				const modal = createModal(modalElement(response.id));
				console.log(modal)
				const deleteBtn = modal._element.querySelector(`[data-delete-post='${response.id}']`)
				console.log(deleteBtn)

				modal.show()
				setDeletePostListener(response.id, deleteBtn)
      }
      console.log(profileData);
    })();
	});	
}

const flags = {
  _author: true,
  _reactions: true,
  _comments: true,
};

const flagstring = createFlagString(flags);


function modalElement(postId) {

	const modalElement = `
	<div class="modal fade" id="modalCreatedPost" tabindex="-1" aria-labelledby="modalCreatedPost" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="modalCreatedPost">Modal title</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					post created!
				</div>
				<div class="modal-footer">
					<a href="/profile/posts/edit/?id=${postId}" class="btn btn-secondary"><i class="fa-solid fa-edit"></i> oops, i need to edit this</a>
					<button type="button" class="btn btn-danger" data-delete-post="${postId}"><i class="fa-solid fa-trash"></i> oh no! delete this!</button>
				</div>
			</div>
		</div>
	</div>
	`
	return modalElement
}