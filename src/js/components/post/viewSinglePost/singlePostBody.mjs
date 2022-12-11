import * as storage from "../../../storage/index.mjs";
import postOptions from "../postOptions.mjs";
import setReactionBtnListener from "../../../handlers/setReactionBtnListener.mjs";
import { postReaction } from "../postReaction.mjs";
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
 *
 * templateSinglePostBody(postData)
 */
export function templateSinglePostBody({
  id,
  author,
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
    <div class="card-body p-0 d-flex flex-column flex-md-row">
      
      <div 
        class="col col-md-6 post-media-container"
        style="background-color: #272727;">

        <img 
          class="img-fluid w-100 h-100"
          src="${media}"
          style="max-height: 80vh; min-hight: 40vh; object-fit: contain">

      </div>

      <div 
        class="col px-3 px-sm-4 px-md-5 pt-3 pt-sm-4 pt-md-5 d-flex flex-column">

        <div 
          class="d-flex mb-4 align-items-start">

          <span 
            class="text-bold fs-4 me-4" style="font-size">
            ${title}
          </span>

        </div>

        <p class="post-content mb-5">${body}</p>
        <div class="d-flex justify-content-between w-100 align-end mt-auto">
          
            <div class="row reactions gap-1 m-0">
              <button 
                class="btn btn__like"
                style="width: fit-content; position: relative"
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

  if (!media) parsedPostBody.querySelector(".post-media-container").remove();
  if (reactions)
    postReaction(reactions, parsedPostBody.querySelector(".reactions"));

  parsedPostBody.querySelectorAll(".btn-react").forEach((btn) => {
    setReactionBtnListener(btn);
  });

  return parsedPostBody;
}
