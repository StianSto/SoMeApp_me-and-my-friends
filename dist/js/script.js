// import and add nav 
import nav from "../js/components/nav.js";

const header = document.querySelector("header");
header.innerHTML = nav;
//

// import and add posts 
import post from "../js/components/post.js";

const allPost = document.querySelectorAll(".post--example");
allPost.forEach( postContainer => postContainer.innerHTML = post);
//

