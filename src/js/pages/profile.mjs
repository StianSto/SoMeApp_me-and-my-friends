import nav from "../components/nav.mjs";
// import toggleSideBar from "./components/sidebar.mjs";
// import toggleFilterPostsVisibility from "./components/filterPosts.mjs";
import * as profile from "../api/profiles/index.mjs";
// import * as posts from "./api/posts/index.mjs";
// import * as templates from "./templates/index.mjs";
// import setCreatePostFormListener from "./handlers/setcreatePostFormListener.mjs";

// import and add nav, will be added with document.create instead
const header = document.querySelector("header");
header.innerHTML = nav;

const params = new URL(document.location).searchParams;
const name = params.get("name");

let flags = {
  _author: true,
  _followers: true,
  _following: true,
};

profile.getProfile(name, flags);
profile.getProfilePosts(name, flags);
