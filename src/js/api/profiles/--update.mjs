// import { authFetch } from "../authFetch.mjs";
// import { API_SOCIAL_URL } from "../constants.mjs";

// const method = "PUT";
// const action = "profile";

// /**
//  * updates a post. Post ID is required
//  * @param {string} profileName input an object containing id. optional: title, body, tags and media.
//  * @returns response as json
//  */
// export async function updateProfile(profileName, update) {
//   if (!profileName) throw new Error("updating profile requires a profile name");

//   const url = `${API_SOCIAL_URL}/${action}/${profileName}`;

//   const response = await authFetch(url, {
//     method,
//     body: JSON.stringify(profileName),
//   });

//   return await response.json();
// }
