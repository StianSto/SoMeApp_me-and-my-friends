import * as storage from "../../../storage/index.mjs";
import postOptions from "../postOptions.mjs";
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
export function templateSinglePostBody({
  id,
  author,
  title,
  body,
  created,
  media,
  _count: { comments, reactions },
}) {
  const parseDate = new Date(created).toLocaleDateString();
  const parser = new DOMParser();
  const parsedPostBody = parser.parseFromString(
    `
    <div class="card-body p-0 d-flex flex-column flex-md-row">
      <div 
        class="col col-md-6 post-media-container"
        style="background-color: #272727;"
      >
        <img 
          class="img-fluid w-100 h-100" 
          
          src="${media}"
          style="max-height: 80vh; min-hight: 40vh; object-fit: contain"
        >
      </div>
      <div class="col px-3 px-sm-4 px-md-5 pt-3 pt-sm-4 pt-md-5 d-flex flex-column">
      <div class="d-flex mb-4 align-items-center">
        <span class="text-bold fs-4 me-4" style="font-size">${title}</span>
      </div>
        <p class="post-content mb-5">${body}</p>
        <div class="d-flex align-end mt-auto">
          <button class="btn btn__like"><i class="fa-solid fa-heart fs-4 liked"></i><span class="likes ms-2">${reactions}</span></button>
          <button class="btn btn__comment"><i class="fa-solid fa-comment fs-4"></i><span class="comments ms-2">${comments}</span></button>
          <p class="text-muted mb-0 mt-auto ms-auto" style="font-size: smaller;">posted: <span>${parseDate}</span></p>
        </div>
      </div>
    </div>

  );
  `,
    "text/html"
  );

  if (!media) parsedPostBody.querySelector(".post-media-container").remove();

  return parsedPostBody;
}
