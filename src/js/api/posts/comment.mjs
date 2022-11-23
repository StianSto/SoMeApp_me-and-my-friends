import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const method = "POST";
const action = "/posts";

/**
 * adds a comment to a post.
 * @param {number, string} postID post id is required.
 * @param {string} body comment text is required.
 * @param {number} replyToId optional. links comment to another comment.
 * @returns response
 */
export async function commentOnPost(postID, body) {
  if (!postID) throw new Error("reacting to a post requires a post ID");

  const url = `${API_SOCIAL_URL}${action}/${postID}/comment`;

  const response = await authFetch(url, {
    method,
    body: body,
  });

  return await response.json();
}
