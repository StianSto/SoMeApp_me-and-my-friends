import nav from "./components/nav.mjs";
import toggleSideBar from "./components/sidebar.mjs";
import * as posts from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

// import and add nav, will be added with document.create instead
const header = document.querySelector("header");
header.innerHTML = nav;

//import sidebar toggle function, will be added with document.create instead
setTimeout(toggleSideBar(), 200);

const formCreatePost = document.getElementById("form-create-post");

//temp
import { examplePosts } from "../../temp/examplePosts.mjs";
import createFlagString from "./functions/createFlagString.mjs";

let postContainer = document.getElementById("posts-wall");
examplePosts.forEach((post) => templates.postTemplate(post, postContainer));

// const myPost = posts.getPost(4055);
// templates.postTemplate(myPost, postContainer);

const flagOptionsTest = {
  _author: true,
  _comments: true,
  _reactions: false,
};

const flagstring = createFlagString(flagOptionsTest);

console.log(flagstring);

// const loadPosts = await posts.getPosts(flagstring);
// console.log(typeof loadPosts);
// console.log(loadPosts);

// loadPosts.forEach((post) => {
//   templates.postTemplate(post, postContainer);
// });
