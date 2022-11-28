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
    <div class="card-body p-0">
      <div class="post-media-container">
        <img class="img-fluid w-100" src="${media}">
      </div>
      <div class="px-4 px-md-5 pt-3 pt-md-4">
        <p class="text-bold fs-4 mb-4" style="font-size">${title}</p>
        <p class="post-content">${body}</p>
        <div class="d-flex align-end mt-5">
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
