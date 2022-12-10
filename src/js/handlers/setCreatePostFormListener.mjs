import * as posts from "../api/posts/index.mjs";
import { createPost } from "../api/posts/create.mjs";
import { getPost } from "../api/posts/read.mjs";
import { convertTagsStringToArray } from "../functions/convertTagsToArray.mjs";
import { postTemplate } from "../templates/postTemplate.mjs";
import createFlagString from "../functions/createFlagString.mjs";
import * as storage from "../storage/index.mjs";

export async function setCreatePostFormListener() {
  const createPostForm = document.querySelector("#form-create-post");

  createPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // convert tags string to array of tags
    const tags = convertTagsStringToArray(formData.get("tags"));

    const profileData = Object.fromEntries(formData.entries());
    profileData.tags = tags;

    (async () => {
      const response = await createPost(profileData);
      console.log(response);
      if (response.id) {
        const newPost = await posts.getPost(response.id, flagstring);
        const container = document.querySelector("#posts-wall");

        const addAuthor = { author: storage.load("userProfile") };

        const prependNewPost = {
          ...newPost,
          ...addAuthor,
        };

        console.log(prependNewPost);
        container.prepend(postTemplate(prependNewPost));
      }
      console.log(profileData);
    })();
  });
}

const flags = {
  _author: true,
  _reactions: true,
  _comments: true,
};

const flagstring = createFlagString(flags);
