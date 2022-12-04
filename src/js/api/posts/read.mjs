import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const method = "GET";
const action = "/posts";

/**
 * Retrieve posts. supply id for one specific post
 * @param {*} postID required. Post ID to retrieve specific post from API
 * @param {Object} flags optional. retrieve additional data by adding a flag. ex:
 * @returns post
 * @example
 * ```js
 * // postID
 * const id = 123
 *
 * // flags
 * const flagstring = "_author=true/false&_comments=true/false&_reactions=true/false";
 *
 * getPost(123, flagstring)
 * // returns Post Object. ex:
 * // {
 * //   id: "123",
 * //   title: "post title",
 * //   body: "post body",
 * //   .
 * //   .
 * //   .
 * // }
 * ```
 */

export async function getPost(postID, flags) {
  if (!postID) throw new Error("retrieving a post requires an ID");

  const url = `${API_SOCIAL_URL}${action}/${postID}?${flags}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}

export async function getPosts(flags) {
  const url = `${API_SOCIAL_URL}${action}?${flags}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}
