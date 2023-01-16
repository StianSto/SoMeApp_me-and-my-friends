import errMsg from "../../functions/errMsg.mjs";
import * as storage from "../../storage/index.mjs";
import * as constants from "../../api/constants.mjs";

/**
 * sends a post request to API to log in user. will redirect if succesful
 * @param {Object} profileData object containing  email and password
 * @param {string} profileData.email users email
 * @param {string} profileData.password users password
 * @example
 * const profileData = {
 *  email: "john@email.com",
 *  password: "myPassword"
 * }
 * const APIUrl = "https://url.com"
 *
 * login(profileData, APIUrl)
 */
export default async function login(profileData) {
  const errMsgContainer = document.querySelector(".error-msg-login");
  const APIUrl = constants.API_SOCIAL_URL + "/auth/login";

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify(profileData),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  };

  try {
    const response = await fetch(APIUrl, fetchOptions);
    const result = await response.json();

    if (result.errors) {
      errMsg(errMsgContainer, result.errors);
    }

    // save token and profile data
    const { accessToken, ...userProfile } = result;

    storage.save("accessToken", accessToken);
    storage.save("userProfile", userProfile);

    // redirect to home page on succesful homepage
    if (response.ok === true) {
      window.location.replace("/");
    }
  } catch (error) {
    console.log(error);
  }
}
