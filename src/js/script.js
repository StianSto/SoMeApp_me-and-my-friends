import nav from "./components/nav.mjs";
import toggleSideBar from "./components/sidebar.mjs";
import * as posts from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";

// import and add nav
const header = document.querySelector("header");
header.innerHTML = nav;

//import sidebar toggle function
setTimeout(toggleSideBar(), 200);

const formCreatePost = document.getElementById("form-create-post");

const postData = await posts.getPost(3949);
console.log(postData);

let postContainer = document.getElementById("posts-wall");
const testPost = templates.postTemplate(postData, postContainer);

console.log(postData);
