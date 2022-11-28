import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const method = "PUT";
const action = "/posts";

/**
 * adds a reaction to a post.
 * @param {number, string} postID post id is required.
 * @param {string} symbol a valid emoji
 * @returns response
 */
export async function reactToPost(postID, symbol) {
  if (!postID) throw new Error("reacting to a post requires a post ID");
  if (!symbol) throw new Error("reacting to a post requires a valid emoji");

  const url = `${API_SOCIAL_URL}${action}/${postID}/react/${symbol}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}
