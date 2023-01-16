import { commentOnPost } from "../api/posts/comment.mjs";
import postComment from "../components/post/postComment.mjs";

/**
 * addes event listener on a comment form. sends data when submitted.
 * @param {Element} formElement the form element where the user writes their comment
 * @param {string | number} postId The id of the post. NOT the id of a comment.
 */
export function setCommentFormListener(formElement, postId) {
  formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(formElement);
    const checkReplyTo = formElement.getAttribute("data-comment-reply");
    const commentBody = Object.fromEntries(formData.entries());

    let commentData;

    if (checkReplyTo !== "null" || checkReplyTo !== null) {
      // formData.append("replyToId", parseFloat(checkReplyTo));
      const replyTo = { replyToId: parseFloat(checkReplyTo) };
      commentData = {
        ...commentBody,
        ...replyTo,
      };
    }
    const response = await commentOnPost(postId, commentData);
    console.log(response);
    if (!response)
      return alert(
        "sorry, something went wrong. check your comment and try again :) "
      );

    const renderComment = await postComment(response);
    const repliedToCommentContainer = event.target.nextElementSibling;
    repliedToCommentContainer.prepend(renderComment.querySelector(".comment"));
  });
}
