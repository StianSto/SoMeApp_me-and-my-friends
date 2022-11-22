import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs"

const method = "GET";
const action = "/posts"

/**
 * Retrieve posts. supply id for one specific post
 * @param {*} id optional. Post ID
 * @param {*} flag optional. input flags like "sort=created" "_count"
 * @returns post(s)
 */
export async function getPosts(id = "", flags = "") {
  if(id) {let id = `/${id}`}

  if(flags) {
    let flag = "?";
    flags.forEach( (i, index) => {
      flag += `${i}`;
      if(index > 0); flag += "&";
    } )
  }

  const url = API_SOCIAL_URL + action + id;

  const response = await authFetch(url, {
    method
  })

  return await response.json();
}