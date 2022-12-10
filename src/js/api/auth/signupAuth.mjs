import errMsg from "../../functions/errMsg.mjs";
import login from "./loginAuth.mjs";

/**
 * register user
 * @param {string} name no punctuation symbols except "_"
 * @param {string} email must be a valid noroff email
 * @param {string} password
 * @param {string} APIUrl
 */

export default async function signupAuth(name, email, password, APIUrl) {
  const errMsgContainer = document.querySelector(".error-msg-signup");

  try {
    const response = await fetch(APIUrl, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    const responseError = result.errors;

    console.log(response);
    if (result.id) {
      const profileData = { email, password };
      login(profileData);
    }

    errMsg(errMsgContainer, responseError);
  } catch (error) {
    console.log(error);
    errMsg.innerText = error;
  }
}
