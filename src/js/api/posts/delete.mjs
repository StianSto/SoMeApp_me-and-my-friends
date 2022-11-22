import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs"

const method = "DELETE";
const action = "/posts"


/**
 * Deletes a post. Post ID is required
 * @param {*} postData input an object containing id
 * @returns response
 */
export async function updatePost(postData) {
  if (!id) throw new Error("update requires a post ID");

  const url = `${API_SOCIAL_URL}${action}/${postData.id}`;

  const response = await authFetch(url, {
    method,
  })

  return await response.json();
}