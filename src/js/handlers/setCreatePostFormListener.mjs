import { createPost } from "../api/posts/create.mjs";
import { convertTagsStringToArray } from "../functions/convertTagsToArray.mjs";

export default async function setCreatePostFormListener() {
  const createPostForm = document.querySelector("#form-create-post");

  createPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // convert tags string to array of tags
    const tags = convertTagsStringToArray(formData.get("tags"));

    const profileData = Object.fromEntries(formData.entries());
    profileData.tags = tags;

    createPost(profileData);
    console.log(profileData);
  });
}
