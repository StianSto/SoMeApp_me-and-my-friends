import { createPost } from "../api/posts/create.mjs";

export default async function setCreatePostFormListener() {
  const createPostForm = document.querySelector("#form-create-post");

  createPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // convert tags string to array of tags
    const regex = /(?:,| )+/;
    const tags = formData
      .get("tags")
      .split(regex) // split up all tags that are seperated with either spaces or commas
      .filter((tag) => tag.length > 0); // remove empty strings

    const profileData = Object.fromEntries(formData.entries());
    profileData.tags = tags;

    // createPost(profileData);
    console.log(profileData);
  });
}
