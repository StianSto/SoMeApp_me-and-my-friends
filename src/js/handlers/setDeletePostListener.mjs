import * as posts from "../api/posts/index.mjs";

/**
 * deletes a post.
 * @param {string | number} postID id of post that will be deleted
 */
export function setDeletePostListener(postID, btn) {

	console.log("adding delete event");
	
		btn.addEventListener("click", async () => {
			console.log("delete event executed")
			const response = await posts.removePost(postID);;
			console.log(response);
			// check if deletion was succesful
			if (200 <= response < 300) {
				confirmDelete();
				const deletedPostInDom = document.querySelector(`[data-post-id='${postID}']`)
				if (deletedPostInDom) deletedPostInDom.remove()
			}
		});

}

function confirmDelete() {

  // add confirmation of deletion
  const modalContent = document.querySelector(".modal-content");
  const confirmMsg = new DOMParser().parseFromString(
    `
  <div class="modal-body"> 
    <p>Post was deleted</p>
    <a href="/"> go back to home page </a>
  </div>
  `,
    "text/html"
  );

  modalContent.replaceChildren(confirmMsg.querySelector(".modal-body"));
}
