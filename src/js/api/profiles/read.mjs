import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL, API_SOCIAL_ENDPOINT_PROFILES } from "../constants.mjs";
import * as templates from "../../templates/postTemplate.mjs";
import createFlagString from "../../functions/createFlagString.mjs";

const method = "GET";
const action = API_SOCIAL_ENDPOINT_PROFILES;

export async function getProfile(name, flags) {
  if (!name) throw new Error("retrieving a profile requires a profile name");
  let flagstring = createFlagString(flags);

  const url = `${API_SOCIAL_URL}/${action}/${name}?${flagstring}`;
  console.log(url);
  const response = await authFetch(url, {
    method,
  });

  let userData = await response.json();
  insertProfile(userData);
}

export async function getProfilePosts(name, flags) {
  if (!name) throw new Error("retrieving a profile requires a proile name");
  let flagstring = createFlagString(flags);

  const url = `${API_SOCIAL_URL}/${action}/${name}/posts?${flagstring}`;
  console.log();
  const response = await authFetch(url, {
    method,
  });

  const result = await response.json();
  console.log(result);
  if (result.length === 0) return;

  insertProfilePosts(result);
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
    console.log(banner);
    const bannerBackground = document.querySelector("#userBanner");
    bannerBackground.style.backgroundImage = `url(${banner})`;
  }

  if (!avatar) avatar = "/dist/assets/images/default-avatar.png";
  const avatarContainer = document.querySelector("#userAvatar");
  const avatarDom = new DOMParser().parseFromString(
    `
    <img src="${avatar}" class="rounded-2 shadow" style="object-fit: cover; aspect-ratio: 1;" alt="image of ${name}">
  `,
    "text/html"
  );
  avatarContainer.appendChild(avatarDom.querySelector("img"));

  const profileName = document.querySelector("h1");
  profileName.innerText = name.replace("_", " ");

  const bio = new DOMParser().parseFromString(``, "text/html");
  const bioContainer = document.querySelector("#bio");
}

function insertProfilePosts(arr) {
  const postsContainer = document.querySelector("#posts-wall");
  postsContainer.innerHTML = "";

  arr.forEach((post) => {
    console.log(post);
    templates.postTemplate(post, postsContainer);
  });
}
