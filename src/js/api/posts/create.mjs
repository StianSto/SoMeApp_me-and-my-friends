import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const method = "POST";
const action = "/posts";

/**
 * creates a post on Noroff social media API under the users id.
 * @param {Object} postData input an object containing title, body. optional: tags and media.
 * @param {string} postData.title title
 * @param {string} postData.body body text
 * @param {string} [postData.tags] tags [optional]
 * @param {string} [postData.media]  media [optional]
 * @returns response from api
 * @example
 * const postData = {
 *  title: "my title",
 *  body: "post text",
 *  tags: "['tag', 'another']",
 *  media: "https://media.url.com"
 * }
 *
 * createPost(postData)
 */

export async function createPost(postData) {
  if (!postData.title || !postData.body)
    throw new Error("creating a post requires a title and a post-text");

  const url = API_SOCIAL_URL + action;

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(postData),
  });

  return await response.json();
}
