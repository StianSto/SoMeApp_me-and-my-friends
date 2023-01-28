import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL, API_SOCIAL_ENDPOINT_PROFILES } from "../constants.mjs";
import * as templates from "../../templates/postTemplate.mjs";
import createFlagString from "../../functions/createFlagString.mjs";
import defaultAvatarUrl from '../../../images/default-avatar.png'

const method = "GET";
const action = API_SOCIAL_ENDPOINT_PROFILES;

/**
 * returns info of a user that is submitted in the function.
 * @param {string} name name of visited user profile
 * @param {Object} [flags] [optional] flags to retrieve more info
 * @returns userData
 * @example
 * const name = "john_deer"
 * const flags = {
 *  _following: true,
 *  _followers: true,
 * }
 *
 * getProfile(name, flags)
 */
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

/**
 * returns all posts made by a user
 * @param {string} name name of user
 * @param {Object} [flags] [optional] flags for more info
 * @returns result
 * @example
 * const name = "john_deer"
 * const flags = {
 *  _author: boolean,
 *  _comments: boolean,
 *  _reactions: boolean,
 * }
 * getProfilePosts(name, flags);
 */
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

/**
 * renders profile into the profile page
 * @param {Object} profileInfo object containing info on user
 * @param {string} profileInfo.banner banner image, submit as url
 * @param {string} profileInfo.avatar avatar image, submit as url
 * @param {string} profileInfo.name name of profile
 * @param {Object[]} profileInfo._followers array of user profiles followers. available with "_followers=true" flag.
 * @param {Object[]} profileInfo._following array of user profiles that this user is following. available with "_following=true" flag.
 * @param {Object} profileInfo._count counters
 * @param {string | number} profileInfo._count.followersCount count of followers
 * @param {string | number} profileInfo._count.followingCount count of following
 * @param {string | number} profileInfo._count.postsCount count of posts
 */
function insertProfile({
  banner,
  avatar,
  name,
  _followers,
  _following,
  _count: { followersCount, followingCount, postsCount },
}) {
  if (banner) {
    const bannerBackground = document.querySelector("#userBanner");
    bannerBackground.style.backgroundImage = `url(${banner})`;
  }

  if (!avatar) avatar = defaultAvatarUrl;
  const avatarImg = document.querySelector("#userAvatar img");
  avatarImg.src = avatar;

  const profileName = document.querySelector("h1");
  profileName.innerText = name.replace("_", " ");
}

function insertProfilePosts(arr) {
  const postsContainer = document.querySelector("#posts-wall");
  arr.forEach((post) => postsContainer.append(templates.postTemplate(post)));
}
