import { setCommentFormListener } from "../../handlers/setCommentFormListener.mjs";
import defaultAvatarUrl from '../../../images/default-avatar.png'


/**
 *
 * @param {{body: string, id: string, postId: string, replyToId: string, created: string, author:{name: string, avatar: string}}} comment accepts a comment from API endpoint
 * @returns
 */

export default function postComment({
  body,
  id,
  postId,
  replyToId,
  created,
  author: { name, avatar },
}) {
  let parsedName = name.replace("_", " ");
  if (!avatar || avatar.length === 0)
    avatar = defaultAvatarUrl;
  const parser = new DOMParser();
  const parsedComment = parser.parseFromString(
    `

  <div class="comment pt-3" data-comment-id="${id}" data-comment-postId="${postId}" data-comment-replytoId="${replyToId}">
      <a href="/profile/?name=${name}" class="profile d-flex align-items-center gap-2 text-decoration-none" style="height: 50px;">
          <div class="profile__img h-100 col-auto p-0" style="aspect-ratio: 1;">
              <img class="w-100 h-100 rounded-2" src="${avatar}" alt="">
          </div>
          <p class="col m-0 fs-5 text-dark">${parsedName}</p>
      </a>
      <p>${body}</p>
      <span
        class="fw-bold m-0 p-0 reply-to pe-hover-pointer ms-auto w-100 text-dark"
        style="font-size: smaller;"
        data-bs-toggle="collapse"
        data-bs-target="#replyToComment${id}"
      >
        <i class="fa-solid fa-comment me-2"></i>reply
      </span>
      <form id="replyToComment${id}" class="row align-items-end collapse" data-post-id="${postId}" data-comment-reply="${id}">
        <div class="col comment-content">
            <textarea name="body" id="comment-textarea" placeholder="comment here" class="form-control w-100 rounded-0"></textarea>
        </div>
        <button type="submit" class=" col-auto btn submit-comment shadow-sm mt-4">Comment</button>
      </form>
      <div class="comment pt-3" ></div>
  </div>

  `,
    "text/html"
  );

  const replyToCommentForm = parsedComment.querySelector(
    `#replyToComment${id}`
  );
  setCommentFormListener(replyToCommentForm, postId);

  return parsedComment;
}
