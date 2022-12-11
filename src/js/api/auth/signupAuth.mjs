import errMsg from "../../functions/errMsg.mjs";
import login from "./loginAuth.mjs";
import * as constants from "../constants.mjs";

const APIUrl = constants.API_SOCIAL_URL + "/auth/register";

/**
 * register user to api. on succesful register it will attempt to login and redirect user to home page
 * @param {Object} profileData object containing users name, email and password.
 * @param {string} profileData.name name of user
 * @param {string} profileData.email users email
 * @param {string} profileData.password users password
 */
export default async function signupAuth(profileData) {
  const errMsgContainer = document.querySelector(".error-msg-signup");

  try {
    const response = await fetch(APIUrl, {
      method: "POST",
      body: JSON.stringify(profileData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    const responseError = result.errors;

    if (response.ok) {
      const loginProfileData = {
        email: profileData.email,
        password: profileData.password,
      };
      login(loginProfileData);
    }

    errMsg(errMsgContainer, responseError);
  } catch (error) {
    console.log(error);
    errMsg.innerText = error;
  }
}
