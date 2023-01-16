import { setCommentFormListener } from "../../handlers/setCommentFormListener.mjs";
import postComment from "./postComment.mjs";

/**
 * creates a DOMParsed element of a post footer. creates comments and appends them to footer.
 * @param {Array} comments array of comments
 * @param {string | number} postId id of post
 * @returns parsed element of post footer
 * @example
 * const comments = [{}, {}, ...] // array of comment-objects
 * cosnt postId = 123,
 *
 * templatePostFooter(comments, postId)
 */
export function templatePostFooter(comments, postId) {
  const parser = new DOMParser();
  const parsedPostFooter = parser.parseFromString(
    `
    <div class="card-footer py-4 px-4 px-md-5">
        <form class="comment row align-items-end" data-comment-postId="${postId}">
            <div class="col comment-content">
                <textarea name="body" id="comment-textarea" placeholder="comment here" class="form-control w-100 rounded-0"></textarea>
            </div>
            <button type="submit" class=" col-auto btn submit-comment shadow-sm mt-4">Comment</button>
        </form>
        <div class="post-comments col mt-4"></div>
    </div>
    `,
    "text/html"
  );

  setCommentFormListener(parsedPostFooter.querySelector("form"), postId);

  const commentsContainer = parsedPostFooter.querySelector(".post-comments");
  if (comments) {
    comments.forEach((el, index) => {
      try {
        let comment = postComment(el);
        if (el.replyToId) {
          const commentReplyTo = commentsContainer.querySelector(
            `[data-comment-id="${el.replyToId}"]`
          );
          commentReplyTo.append(comment.querySelector(".comment"));
        } else {
          commentsContainer.appendChild(comment.querySelector(".comment"));
        }
      } catch (error) {
        console.log(error);
        console.log("error appeared on comment object: ", el);
      }
    });
  }
  return parsedPostFooter;
}
