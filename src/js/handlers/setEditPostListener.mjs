import * as posts from "../api/posts/update.mjs";
import { convertTagsStringToArray } from "../functions/convertTagsToArray.mjs";
export async function setEditPostListener() {
  const editPostForm = document.querySelector("#formEditPost");

  editPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = new FormData(form);
    const postID = new URLSearchParams(window.location.search).get("id");
    formData.append("id", postID);

    const tagsArray = convertTagsStringToArray(formData.get("tags"));

    const editPostData = Object.fromEntries(formData.entries());
    editPostData.tags = tagsArray;

    console.log(editPostData);
    posts.updatePost(editPostData);
  });
}
