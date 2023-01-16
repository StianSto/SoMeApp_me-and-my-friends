import { authFetch } from "../authFetch.mjs";
import { API_SOCIAL_URL } from "../constants.mjs";

const method = "PUT";
const action = "profiles";

/**
 * updates a profile mdia. name of user is required
 * @param {string} name name of user
 * @param {Object} updateBody an object containing new data for profile. currently valid inputs: banner: <string>, avatar: <string>
 * @returns response
 * @example
 * const name = "john_deer"
 * const updateBody = {
 *  banner: "https://url.com/banner-image"
 *  avatar: "https://url.com/avatar-image"
 * }
 *
 * updateProfile(name, updateBody)
 */
export async function updateProfile(name, updateBody) {
  if (!name) throw new Error("updating profile requires a profile name");

  const url = `${API_SOCIAL_URL}/${action}/${name}/media`;

  const response = await authFetch(url, {
    method,
    body: JSON.stringify(updateBody),
	});

  return response
}
