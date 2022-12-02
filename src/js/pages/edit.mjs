import nav from "../components/nav.mjs";
import toggleSideBar from "../components/sidebar.mjs";

// import elements
const header = document.querySelector("header");
header.innerHTML = nav;
toggleSideBar();

const formEditPost = document.querySelector("#formEditPost");
const editTitle = formEditPost.querySelector("#editTitle");
const editBody = formEditPost.querySelector("#editBody");
const editMedia = formEditPost.querySelector("#editMedia");
const editTags = formEditPost.querySelector("#editTags");

import { examplePosts } from "../../../temp/examplePosts.mjs";
import createFlagString from "../functions/createFlagString.mjs";
import * as posts from "../api/posts/index.mjs";
import { setEditPostListener } from "../handlers/setEditPostListener.mjs";

const params = new URLSearchParams(window.location.search);
const postID = params.get("id");

const flagOptions = {
  _author: true,
  _comments: true,
  _reactions: false,
};

const flagstring = createFlagString(flagOptions);

const post = await posts.getPost(postID, flagstring);
console.log(postID);
console.log(post);

(() => {
  editTitle.value = post.title;
  editBody.value = post.body;
  editMedia.value = post.media;
  post.tags.forEach((tag, index) => {
    if (index > 0) editTags.value += ", ";
    editTags.value += tag;
  });
})();

setEditPostListener();
