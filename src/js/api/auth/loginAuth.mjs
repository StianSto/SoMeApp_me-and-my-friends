import errMsg from "../../functions/errMsg.mjs";
import * as storage from "../../storage/index.mjs";

/**
 * user log in. needs valid email and password.
 * @param {string} email valid email
 * @param {string} password enter valid password
 * @param {string} APIUrl url to api login endpoint
 */
export default async function login(email, password, APIUrl) {
  const errMsgContainer = document.querySelector(".error-msg-login");

  const fetchOptions = {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
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
