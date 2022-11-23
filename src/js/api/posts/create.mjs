import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs"

const method = "POST";
const action = "/posts"

/**
 * creates a post on Noroff social media API under the users id. 
 * @param {*} postData input an object containing title, body. optional: tags and media.
 * @returns 
 */

export async function createPost(postData) {
  if (!postData.title  || !postData.body) throw new Error("creating a post requires a title and a post-text");
  
  const url = API_SOCIAL_URL + action;

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(postData),
  })

  return await response.json();
}