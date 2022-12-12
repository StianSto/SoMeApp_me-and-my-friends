import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";
import { load } from "../../storage/index.mjs";

const method = "PUT";
const action = "profiles";

/**
 * follows user
 * @param {string} name
 *
 */
export async function followUser(name) {
  console.log(name);
  const url = `${API_SOCIAL_URL}/${action}/${name}/follow`;
  const response = await authFetchFollow(url, { method });

  return response;
}
export async function unfollowUser(name) {
  const url = `${API_SOCIAL_URL}/${action}/${name}/unfollow`;
  const response = await authFetchFollow(url, { method });

  return response;
}

function headers() {
  const token = load("accessToken");
  return { Authorization: `Bearer ${token}` };
}

async function authFetchFollow(apiUrl, options) {
  return fetch(apiUrl, {
    ...options,
    headers: headers(),
  });
}
