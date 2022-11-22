import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs"

const method = "POST";
const action = "/posts"

/**
 * 
 * @param {*} postData input an object containing title, body. optional: tags and media.
 * @returns 
 */

export async function createPost(postData) {
  if (!postData.title || !postData.body) return;
  
  const url = API_SOCIAL_URL + action;

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(postData),
  })

  return await response.json();
}