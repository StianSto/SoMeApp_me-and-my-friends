import createModal from '../../functions/createModal.mjs'
import {setDeletePostListener} from '../../handlers/setDeletePostListener.mjs'
/**
 * makes a DOMParsed element for the header of the post.
 * @param {Object} author object containing name and avatar image(url)
 * @param {string} author.name author's name
 * @param {string} author.avatar author's profile image / avatar
 * @param {string | number} id id of Post
 * @returns element
 * @example
 * const author = {
 *  name: "john_deer",
 *  avatar: "https://url.image.com"
 * }
 * const id = 123
 *
 * templatePostHeader(author, id)
 */
export function templatePostHeader({ name = "", avatar }, id) {
  if (!avatar || avatar.length === 0)
    avatar = "/dist/assets/images/default-avatar.png";

  let parsedName = name.replace("_", " ");

  const parser = new DOMParser();
  const parsedPostHeader = parser.parseFromString(
    `
    <div class="card-header row p-3 m-0">
      <a href="/profile/?name=${name}" class="profile-header | col m-0 p-0 d-flex align-items-center flex-nowrap" style="height: 70px;">
        <div class="profile__img | h-100 p-0"style="aspect-ratio: 1;">
            <img class="w-100 h-100 rounded-2" src="${avatar}" alt="profile of ${parsedName}">
        </div>
        <p class="profile__name | col m-0 ms-2 fs-5">${parsedName}</p>
      </a>
        <button type="button" class="post-options | btn col-auto" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="right" data-bs-html="true" data-bs-content="">
          <i class="theme-bg-primary-text fa fa-solid fa-ellipsis-vertical | ms-auto w-auto fs-3 text-black"></i>
        </button>
    </div>
  `,
    "text/html"
	);
	
	const popoverElement = parsedPostHeader.querySelector(".post-options")
	popoverElement.addEventListener("click", () => {			
		const deleteBtn = document.getElementById(`remove-post-${id}`)
		
		if (deleteBtn) {
			deleteBtn.addEventListener("click", () => {
				const modal = createModal(modalElement(id));
				modal.show()
				const modalDelBtn = modal._element.querySelector(`[data-delete-post='${id}']`)
				setDeletePostListener(id, modalDelBtn)
		})
	}

	})

  return parsedPostHeader;
}


function modalElement(postId) {
	const modalElement = `
	<div class="modal fade show" id="modalConfirmDeletePost" tabindex="-1" aria-labelledby="previewPostLabel" aria-modal="true" role="dialog" style="display: block;">
	<div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h1 class="modal-title fs-5" id="previewPostLabel">
					Delete Post
				</h1>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<p class="fs-4">are you sure you want to delete this post?</p>
				<p>this action is <i>irreversible</i>!</p>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
					No! take me back!
				</button>
				<button type="button" class="btn btn-danger" data-delete-post="${postId}" data-ol-has-click-handler="">
					<i class="fa-solid fa-trash-can"></i>
					Delete
				</button>
			</div>
		</div>
	</div>
</div>
	`
	return modalElement
}