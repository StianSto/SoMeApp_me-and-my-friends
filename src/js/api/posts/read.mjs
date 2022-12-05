import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import createFlagString from "../../functions/createFlagString.mjs";

const method = "GET";
const action = "/posts";

/**
 * Retrieve posts. supply id for one specific post
 * @param {atring | number} postID required. Post ID to retrieve specific post from API
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

const defaultFlagOptions = {
  _author: true,
  _reactions: true,
  _comments: true,
};

export async function getPost(postID, flags) {
  if (!postID) throw new Error("retrieving a post requires an ID");
  let flagstring = flags
    ? createFlagString(flags)
    : createFlagString(defaultFlagOptions);
  console.log(flagstring);

  const url = `${API_SOCIAL_URL}${action}/${postID}?${flagstring}`;

  const response = await authFetch(url, {
    method,
  });
  return await response.json();
}

export async function getPosts(flags) {
  let flagstring = flags
    ? createFlagString(flags)
    : createFlagString(defaultFlagOptions);
  console.log(flagstring);

  const url = `${API_SOCIAL_URL}${action}?${flagstring}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}
