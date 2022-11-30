import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL, API_SOCIAL_ENDPOINT_PROFILES } from "../constants.mjs";
import { postTemplate } from "../../templates/postTemplate.mjs";

const method = "GET";
const action = API_SOCIAL_ENDPOINT_PROFILES;

export async function getProfile(name, flags) {
  if (!name) throw new Error("retrieving a profile requires a profile name");

  const url = `${API_SOCIAL_URL}/${action}/${name}?${flags}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}

export async function getProfilePosts(name, flags) {
  if (!name) throw new Error("retrieving a profile requires a proile name");

  const url = `${API_SOCIAL_URL}/${action}/${name}/posts?${flags}`;

  const response = await authFetch(url, {
    method,
  });

  return await response.json();
}

function insertProfilePosts(arr) {
  const postsContainer = document.querySelector("#posts-wall");
  postsContainer.innerHTML = "";

  arr.forEach((post) => {
    templates.postTemplate(post, postContainer);
  });
}
