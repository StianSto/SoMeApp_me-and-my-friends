import { examplePosts } from "../../../temp/examplePosts.mjs";
import * as postTemplates from "../templates/index.mjs";
import * as posts from "../api/posts/index.mjs";
import nav from "../components/nav.mjs";
import createFlagString from "../functions/createFlagString.mjs";

// import and add nav, will be added with document.create instead
const header = document.querySelector("header");
header.innerHTML = nav;

const mainContent = document.querySelector(".main-content");

const params = new URLSearchParams(window.location.search);
const postID = params.get("id");

const flagOptions = {
  _author: true,
  _comments: true,
  _reactions: true,
};

const flagstring = createFlagString(flagOptions);

const post = await posts.getPost(postID, flagstring);
postTemplates.viewSinglePostTemplate(post, mainContent);
