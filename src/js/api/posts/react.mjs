import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";
import { API_SOCIAL_URL, API_SOCIAL_ENDPOINT_REACT } from "../constants.mjs";

/**
 * adds a reaction to a post.
 * @param {number, string} postID post id is required.
 * @param {string} symbol a valid emoji
 * @returns response
 */
export async function reactToPost(postID, symbol) {
  const method = "PUT";
  const action = `posts/${postID}/${API_SOCIAL_ENDPOINT_REACT}/${symbol}`;
  if (!postID) throw new Error("reacting to a post requires a post ID");
  if (!symbol) throw new Error("reacting to a post requires a valid emoji");

  try {
    const url = `${API_SOCIAL_URL}/${action}`;

    const response = await authFetchReact(url, {
      method,
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

function headers() {
  const token = load("accessToken");

  return {
    Authorization: `Bearer ${token}`,
  };
}

async function authFetchReact(apiUrl, options) {
  return fetch(apiUrl, {
    ...options,
    headers: headers(),
  });
}
