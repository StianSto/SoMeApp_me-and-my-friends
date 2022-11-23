// import and add nav
import nav from "./components/nav.mjs";
const header = document.querySelector("header");
header.innerHTML = nav;

// import and add posts
import post from "./components/post.mjs";

const allPost = document.querySelectorAll(".post--example");
allPost.forEach((postContainer) => (postContainer.innerHTML = post));

//import sidebar toggle function
import toggleSideBar from "./components/sidebar.mjs";
setTimeout(toggleSideBar(), 200);

// test create post

import * as posts from "./api/posts/index.mjs";

// createPost({
//   title: "why are oranges called orange?",
//   body: "it is weird, why not call oranges for 'juicy sour apples'?"
// })

const formCreatePost = document.getElementById("form-create-post");
