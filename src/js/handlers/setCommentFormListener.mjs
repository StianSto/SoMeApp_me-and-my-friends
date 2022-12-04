import { commentOnPost } from "../api/posts/comment.mjs";

/**
 * addes event listener on a comment form. sends data when submitted.
 * @param {Element} formElement the form element where the user writes their comment
 * @param {string | number} postId The id of the post. NOT the id of a comment.
 */
export function setCommentFormListener(formElement, postId) {
  formElement.addEventListener("submit", (event) => {
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

    console.log(commentData);
    commentOnPost(postId, commentData);
  });
}
