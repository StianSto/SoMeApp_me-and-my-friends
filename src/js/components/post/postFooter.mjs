import postComment from "./postComment.mjs";

export function templatePostFooter(comments) {
  const parser = new DOMParser();
  const parsedPostFooter = parser.parseFromString(
    `
    <div class="card-footer py-4 px-4 px-md-5">
        <form class="comment row align-items-end">
            <div class="col comment-content">
                <textarea name="" id="comment-textarea" placeholder="comment here" class="form-control w-100 rounded-0"></textarea>
            </div>
            <button type="submit" class=" col-auto btn submit-comment shadow-sm mt-4">Comment</button>
        </form>
        <div class="post-comments col mt-4"></div>
    </div>
    `,
    "text/html"
  );

  const commentsContainer = parsedPostFooter.querySelector(".post-comments");
  if (comments) {
    comments.forEach((el, index) => {
      let comment = postComment(el);
      commentsContainer.appendChild(comment.querySelector(".comment"));

      if ((index = 2)) return; // exits function when there is three comments in place
    });
  }

  return parsedPostFooter;
}
