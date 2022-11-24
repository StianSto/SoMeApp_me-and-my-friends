/**
 * makes a DOMParsed element for the body of the post.
 * @param {object} postData
 * @param {string} postData.title Post Title.
 * @param {string} postData.body Post Body text.
 * @param {string} postData.created Date when post was created.
 * @param {object} postData._count
 * @param {string | number} postData._count.reactions count of reactions
 * @param {string | number} postData._count.comments count of comments
 * @returns element
 */
export function templatePostBody({
  title,
  body,
  created,
  _count: { comments, reactions },
}) {
  const parseDate = new Date(created).toLocaleDateString();

  const parser = new DOMParser();
  const parsedPostBody = parser.parseFromString(
    `
    <div class="card-body px-4 px-md-5">
    <p class="text-muted" style="font-size: smaller;">posted: <span>${parseDate}</span></p>
    <p class="text-bold fs-4 mb-4" style="font-size">${title}</p>
      <p class="post-content">${body}</p>
      <div>
        <button class="btn btn__like"><i class="fa-solid fa-heart fs-4 liked"></i><span class="likes ms-2">${reactions}</span></button>
        <button class="btn btn__comment"><i class="fa-solid fa-comment fs-4"></i><span class="comments ms-2">${comments}</span></button>
      </div>
    </div>
  );
  `,
    "text/html"
  );

  return parsedPostBody;
}
