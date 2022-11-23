import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const method = "GET";
const action = "/posts";

/**
 * Retrieve posts. supply id for one specific post
 * @param {*} id optional. Post ID
 * @param {*} flag optional. input flags like "sort=created" "_count"
 * @returns post
 */
export async function getPost(postID) {
  if (!postID) throw new Error("retrieving a post requires an ID");

  const url = `${API_SOCIAL_URL}${action}/${postID}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}
export async function getPosts() {
  const url = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(url, {
    method,
  });

  console.log(await response.json());
  return await response.json();
}
