import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import createFlagString from "../../functions/createFlagString.mjs";

const method = "GET";
const action = "/posts";

const defaultFlagOptions = {
  _author: true,
  _reactions: true,
  _comments: true,
};

/**
 * Retrieve post.
 * @param {string | number} postID required. Post ID to retrieve specific post from API
 * @param {Object} [flags] optional. retrieve additional data by adding a flag.
 * @returns post object form api
 * @example
 * const postID = 123
 * const flags = {
 *  _author: true [default]
 *  _reactions: true [default]
 *  _comments: true [default]
 * };
 *
 * getPost(postID, flags)
 * // returns post response:
 * // {
 * //   title: "",
 * //   body: "",
 * //   media: "",
 * //   .
 * //   .
 * //   .
 * // }
 *
 */

export async function getPost(postID, flags) {
  if (!postID) throw new Error("retrieving a post requires an ID");
  let flagstring = flags
    ? createFlagString(flags)
    : createFlagString(defaultFlagOptions);

  const url = `${API_SOCIAL_URL}${action}/${postID}?${flagstring}`;

  const response = await authFetch(url, {
    method,
  });
  return await response.json();
}

/**
 * Retrieve last 100 posts.
 * @param {Object} [flags] optional. retrieve additional data by adding a flag.
 * @returns array of post objects form api
 * @example
 * const flags = {
 *  _author: true [default]
 *  _reactions: true [default]
 *  _comments: true [default]
 * };
 *
 * getPost(postID, flags)
 * // returns post response:
 * // {
 * //   title: "",
 * //   body: "",
 * //   media: "",
 * //   .
 * //   .
 * //   .
 * // }
 *
 */
export async function getPosts(flags) {
  let flagstring = flags
    ? createFlagString(flags)
    : createFlagString(defaultFlagOptions);

  const url = `${API_SOCIAL_URL}${action}?${flagstring}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}
