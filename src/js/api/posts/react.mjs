import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL, API_SOCIAL_ENDPOINT_REACT } from "../constants.mjs";

const method = "PUT";

/**
 * adds a reaction to a post.
 * @param {number, string} postID post id is required.
 * @param {string} symbol a valid emoji
 * @returns response
 */
export async function reactToPost(postID, symbol) {
  const action = `/posts/${postID}/${API_SOCIAL_ENDPOINT_REACT}/${symbol}`;
  console.log(action);
  if (!postID) throw new Error("reacting to a post requires a post ID");
  if (!symbol) throw new Error("reacting to a post requires a valid emoji");

  const url = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}
