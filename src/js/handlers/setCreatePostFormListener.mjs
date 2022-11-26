import { createPost } from "../api/posts/create.mjs";

export default async function setCreatePostFormListener() {
  const createPostForm = document.querySelector("#form-create-post");

  createPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profileData = Object.fromEntries(formData.entries());
    const { email, password } = profileData;

    createPost(profileData);
    console.log(profileData);
  });
}
