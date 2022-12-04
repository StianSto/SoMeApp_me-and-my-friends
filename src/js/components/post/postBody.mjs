import { postReaction } from "./postReaction.mjs";
import setReactionBtnListener from "../../handlers/setReactionBtnListener.mjs";
import setReactionBtnEmojiSelectListener from "../../handlers/setReactBtnEmojiSelectListener.mjs";

/**
 * makes a DOMParsed element for the body of the post.
 * @param {Object} postData
 * @param {string} postData.title Post Title.
 * @param {string} postData.body Post Body text.
 * @param {string} postData.created Date when post was created.
 * @param {object} postData._count
 * @param {string | number} postData._count.reactions count of reactions
 * @param {string | number} postData._count.comments count of comments
 * @returns body element for post
 * @example
 * ```js
 * // input an object that hold all data
 * const postData = {
 *  "title": "",
 *  "body": "",
 *  "created": "",
 *  "_count": {
 *    "reactions": "",
 *    "comments": "",
 *  },
 * }
 * ```
 */
export function templatePostBody({
  id,
  title,
  body,
  created,
  media,
  _count,
  reactions,
}) {
  const parseDate = new Date(created).toLocaleDateString();
  const parser = new DOMParser();
  const parsedPostBody = parser.parseFromString(
    `
    <div class="card-body p-0">
      <div class="post-media-container">
        <img class="img-fluid w-100" src="${media}">
      </div>
      <div class="post-content-container | px-4 px-md-5 pt-3 pt-md-4">

        <div class="d-flex mb-4 align-items-center">
          <span class="text-bold fs-4 me-4" style="font-size">${title}</span><a class="ms-auto text-black" href="/profile/posts/?id=${id}"><i class="fa-solid fa-expand fs-5 pe-hover-pointer"></i></a>
        </div>
        <p class="post-content">${body}</p>

        <div class="d-flex justify-content-between w-100 align-end mt-auto position-relative">  
          <div class="row reactions gap-1 m-0">
            <button 
              class="btn btn-emoji-picker"
              style="width: fit-content"
              data-post-id="${id}"
            >
              <i class="fa-solid fa-plus fs-4"></i><span class="likes ms-2 align-top">react</span>
            </button>
          </div>
        </div>
        <div class="row justify-content-between align-items-start mt-3 ms-2">
          <span 
            class="btn btn__comment m-0 me-auto p-0"
            style="width: fit-content; font-size: smaller"
            >
            <i class="fa-solid fa-comment"></i>
          <span class="comments">${_count.comments} comments</span>
          </span>
          <span class="text-muted mb-0 mt-auto ms-auto" style="font-size: smaller; width: fit-content">posted: <span>${parseDate}</span></span>
        </div>
        
      </div>
    </div>
  );
  `,
    "text/html"
  );

  // series of classlist adds, removing elemts etc. if user is on a single post view page.
  if (window.location.pathname === "/profile/posts/") {
    parsedPostBody
      .querySelector(".card-body")
      .classList.add("flex-column", "flex-md-row", "row", "m-0");

    const mediaContainer = parsedPostBody.querySelector(
      ".post-media-container"
    );
    mediaContainer.classList.add("col", "col-md-6");
    mediaContainer.style = "background-color: #272727";

    parsedPostBody.querySelector(".post-media-container img").style =
      "max-height: 70vh; object-fit: contain";

    parsedPostBody
      .querySelector(".post-content-container")
      .classList.add("col", "d-flex", "flex-column");

    parsedPostBody.querySelector(".fa-expand").remove();
  }

  if (!media) parsedPostBody.querySelector(".post-media-container").remove();
  if (reactions)
    postReaction(reactions, parsedPostBody.querySelector(".reactions"));

  parsedPostBody.querySelectorAll(".btn-react").forEach((btn) => {
    setReactionBtnListener(btn);
  });

  setReactionBtnEmojiSelectListener(
    parsedPostBody.querySelector(".btn-emoji-picker"),
    parsedPostBody.querySelector(".card-body")
  );

  return parsedPostBody;
}
