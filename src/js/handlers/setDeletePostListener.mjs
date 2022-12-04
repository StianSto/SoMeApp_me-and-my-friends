import * as posts from "../api/posts/index.mjs";

/**
 *
 * @param {string | number} postID id of post that will be deleted
 */
export function setDeletePostListener(postID) {
  const delBtn = document.querySelector("#deletePost");

  delBtn.addEventListener("click", () => {
    console.log("delete post " + postID);
    posts.removePost(postID);
  });
}
