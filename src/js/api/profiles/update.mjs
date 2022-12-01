import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const method = "PUT";
const action = "profiles";

/**
 * updates a post. Post ID is required
 * @param {string} profileName input an object containing id. optional: title, body, tags and media.
 * @param {Object} updateBody an object containing new data for profile. currently valid inputs: banner: <string>, avatar: <string>
 * @returns response as json
 * @example
 * ```js
 * const updateBody = {
 *  "banner": "https://url.com/banner-image"
 *  "avatar": "https://url.com/avatar-image"
 * }
 * ```
 */
export async function updateProfile(profileName, updateBody) {
  if (!profileName) throw new Error("updating profile requires a profile name");

  const url = `${API_SOCIAL_URL}/${action}/${profileName}/media`;

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(updateBody),
  });

  return await response.json();
}
