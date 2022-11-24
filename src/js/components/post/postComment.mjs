/**
 *
 * @param {Object} comment accepts a comment from API endpoint.
 * @param {string} body accepts a comment from API endpoint.
 * @returns
 */

export default function postComment({ body, id, postID, created, owner }) {
  const parser = new DOMParser();
  const parsedComment = parser.parseFromString(
    `

  <div class="comment pt-3" data-comment-id="${id}" data-comment-postID="${postID}">
      <div class="profile d-flex align-items-center gap-2" style="height: 50px;">
          <div class="profile__img h-100 col-auto p-0" style="aspect-ratio: 1;">
              <img class="w-100 h-100 rounded-2" src="" alt="">
          </div>
          <p class="col m-0 fs-5">${owner}</p>
      </div>
      <p>${body}</p>
  </div>

  `,
    "text/html"
  );

  return parsedComment;
}
