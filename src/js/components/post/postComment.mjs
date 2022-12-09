/**
 *
 * @param {Object} comment accepts a comment from API endpoint.
 * @returns
 */

import { setCommentFormListener } from "../../handlers/setCommentFormListener.mjs";

export default function postComment({
  body,
  id,
  postId,
  replyToId,
  created,
  author: { name, avatar },
}) {
  if (!avatar || avatar.length === 0)
    avatar = "/dist/assets/images/default-avatar.png";
  const parser = new DOMParser();
  const parsedComment = parser.parseFromString(
    `

  <div class="comment pt-3" data-comment-id="${id}" data-comment-postId="${postId}" data-comment-replytoId="${replyToId}">
      <div class="profile d-flex align-items-center gap-2" style="height: 50px;">
          <div class="profile__img h-100 col-auto p-0" style="aspect-ratio: 1;">
              <img class="w-100 h-100 rounded-2" src="${avatar}" alt="">
          </div>
          <p class="col m-0 fs-5">${name}</p>
      </div>
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
