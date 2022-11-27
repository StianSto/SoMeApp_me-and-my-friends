import * as postComponents from "../components/post/index.mjs";
// import { templatePostHeader } from "../components/post/index.mjs";

/**
 * creates a template for a post that will be inserted into a parent element
 * @param {*} postData post data retrieved from API
 * @param {*} parent the parent element where the post eill be inserted
 */
export function postTemplate(postData, parent) {
  const { id, title, body, tags, media, created, updated, author, ...other } =
    postData;

  const parser = new DOMParser();
  const parsedPostContainer = parser.parseFromString(
    `<div id="${id}" class="card post my-5 row mx-1 mx-md-auto"> </div>`,
    "text/html"
  );

  const postHeader = postComponents.templatePostHeader(author);
  const postBody = postComponents.templatePostBody(postData);
  const postFooter = postComponents.templatePostFooter(other.comments);

  const post = parsedPostContainer.querySelector(".card");
  post.appendChild(postHeader.querySelector(".card-header"));
  post.appendChild(postBody.querySelector(".card-body"));
  post.appendChild(postFooter.querySelector(".card-footer"));

  parent.appendChild(post);
}
