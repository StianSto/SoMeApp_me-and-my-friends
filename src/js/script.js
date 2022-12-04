import nav from "./components/nav.mjs";
import toggleSideBar from "./components/sidebar.mjs";
import toggleFilterPostsVisibility from "./components/filterPosts.mjs";
import * as posts from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import setCreatePostFormListener from "./handlers/setcreatePostFormListener.mjs";

// import and add nav, will be added with document.create instead
const header = document.querySelector("header");
header.innerHTML = nav;

//import sidebar toggle function, will be added with document.create instead
toggleSideBar();
toggleFilterPostsVisibility();

// create post form submit listener
setCreatePostFormListener();

const formCreatePost = document.getElementById("form-create-post");

//temp
import { examplePosts } from "../../temp/examplePosts.mjs";
import createFlagString from "./functions/createFlagString.mjs";

let postContainer = document.getElementById("posts-wall");
// examplePosts.forEach((post) => templates.postTemplate(post, postContainer));

// const myPost = posts.getPost(4055);
// templates.postTemplate(myPost, postContainer);

const flagOptions = {
  _author: true,
  _comments: true,
  _reactions: true,
};

const flagstring = createFlagString(flagOptions);
const loadPosts = await posts.getPosts(flagstring);

loadPosts.forEach((post) => {
  templates.postTemplate(post, postContainer);
});

import { createPostTemplate } from "./templates/createPostTemplate.mjs";
import setFilterPostsListener from "./handlers/setFilterPostsListener.mjs";
import { reactToPost } from "./api/posts/index.mjs";

createPostTemplate();

setFilterPostsListener();

// enables bootstrap popovers
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
