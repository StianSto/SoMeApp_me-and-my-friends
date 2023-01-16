import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const method = "DELETE";
const action = "posts";

/**
 * Deletes a post. Post ID is required
 * @param {string | number} postid input id of post to be deletes
 * @returns nothing unless an error ocurrs
 */
export async function removePost(postID) {
  try {
    if (!postID) throw new Error("removing a post requires a post ID");

    const url = `${API_SOCIAL_URL}/${action}/${postID}`;

    await authFetch(url, {
      method,
    });
  } catch (error) {
    return error;
  }
}
