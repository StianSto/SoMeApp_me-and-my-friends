import postOptions from "../components/post/postOptions.mjs";
import * as postComponents from "../components/post/index.mjs";
// import { templatePostHeader } from "../components/post/index.mjs";

/**
 * creates a template for a post that will be inserted into a parent element
 * @param {*} postData post data retrieved from API
 * @param {*} parent the parent element where the post will be inserted
 */
export function postTemplate(postData, parent) {
  const { id, title, body, tags, media, created, updated, author, ...other } =
    postData;

  const parser = new DOMParser();
  const parsedPostContainer = parser.parseFromString(
    `<div class="card post my-5 row mx-1 mx-md-auto" data-post-id="${id}"> </div>`,
    "text/html"
  );

  const postHeader = postComponents.templatePostHeader(author, id);
  const postBody = postComponents.templatePostBody(postData);
  const postFooter = postComponents.templatePostFooter(other.comments, id);

  const postOptionsBtn = postHeader.querySelector(".post-options");
  if (postOptionsBtn !== undefined)
    postOptions(author.name, id, postOptionsBtn);

  const post = parsedPostContainer.querySelector(".card");
  post.appendChild(postHeader.querySelector(".card-header"));
  post.appendChild(postBody.querySelector(".card-body"));
  post.appendChild(postFooter.querySelector(".card-footer"));

  parent.appendChild(post);
}

/**
 * creates a template for a view a single specific post
 * @param {*} postData post data retrieved from API
 * @param {*} parent the parent element where the post will be inserted
 */

export function viewSinglePostTemplate(postData, parent) {
  const { id, title, body, tags, media, created, updated, author, ...other } =
    postData;

  const parser = new DOMParser();
  const parsedPostContainer = parser.parseFromString(
    `<div 
      class="card post my-5 row mx-1 mx-md-auto" 
      data-post-id="${id}"
      style="max-width: 1000px"> 
    </div>`,
    "text/html"
  );

  const postHeader = postComponents.templatePostHeader(author, id);
  // const postBody = templateSinglePostBody(postData);
  const postBody = postComponents.templatePostBody(postData);
  const postFooter = postComponents.templatePostFooter(other.comments, id);

  const postOptionsBtn = postHeader.querySelector(".post-options");
  if (postOptionsBtn !== undefined)
    postOptions(author.name, id, postOptionsBtn);

  const post = parsedPostContainer.querySelector(".card");
  post.appendChild(postHeader.querySelector(".card-header"));
  post.appendChild(postBody.querySelector(".card-body"));
  post.appendChild(postFooter.querySelector(".card-footer"));

  parent.appendChild(post);
}
