import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const method = "PUT";
const action = "posts";

/**
 * updates a post. Post ID is required
 * @param {Object} postData input an object containing id. optional: title, body, tags and media.
 * @returns response
 * @example
 * const postData = {
 *  title: "",
 *  body: "",
 *  media: "",
 *  tags: ["", ""],
 * }
 *
 * updatePost(postData)
 * // returns response
 */
export async function updatePost(postData) {
  if (!postData.id) throw new Error("update requires a post ID");

  const url = `${API_SOCIAL_URL}/${action}/${postData.id}`;

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
