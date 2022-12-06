import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL, API_SOCIAL_ENDPOINT_PROFILES } from "../constants.mjs";
import * as templates from "../../templates/postTemplate.mjs";
import createFlagString from "../../functions/createFlagString.mjs";

const method = "GET";
const action = API_SOCIAL_ENDPOINT_PROFILES;

export async function getProfile(name, flags = "") {
  if (!name) throw new Error("retrieving a profile requires a profile name");
  let flagstring = createFlagString(flags);

  const url = `${API_SOCIAL_URL}/${action}/${name}?${flagstring}`;
  const response = await authFetch(url, {
    method,
  });

  let userData = await response.json();
  insertProfile(userData);
  return userData;
}

export async function getProfilePosts(name, flags) {
  try {
    if (!name) throw new Error("retrieving a profile requires a proile name");
    let flagstring = createFlagString(flags);

    const url = `${API_SOCIAL_URL}/${action}/${name}/posts?${flagstring}`;
    const response = await authFetch(url, {
      method,
    });

    const result = await response.json();

    if (result.errors) return result;
    if (result.length === 0) return;

    insertProfilePosts(result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

function insertProfile({
  banner,
  avatar,
  name,
  followers,
  following,
  _count: {
    followers: followersCount,
    following: followingCount,
    posts: postsCount,
  },
}) {
  if (banner) {
    const bannerBackground = document.querySelector("#userBanner");
    bannerBackground.style.backgroundImage = `url(${banner})`;
  }

  if (!avatar) avatar = "/dist/assets/images/default-avatar.png";
  const avatarImg = document.querySelector("#userAvatar img");
  avatarImg.src = avatar;

  const profileName = document.querySelector("h1");
  profileName.innerText = name.replace("_", " ");
}

function insertProfilePosts(arr) {
  const postsContainer = document.querySelector("#posts-wall");
  arr.forEach((post) => postsContainer.append(templates.postTemplate(post)));
}
