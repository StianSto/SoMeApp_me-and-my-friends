import * as constants from "../api/constants.mjs";

//log in
import { setLoginFormListener } from "../handlers/setLoginFormListener.mjs";

setLoginFormListener();

//sign up

import signUp from "../handlers/signup.mjs";

const signUpForm = document.querySelector("#sign-up-form")
signUpForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let firstName = document.getElementById("first-name-sign-up");
  let lastName = document.getElementById("last-name-sign-up");
  let name = `${firstName.value}_${lastName.value}`
  let nameString = name.replace(/\s+/g, "_");
  console.log(nameString)

  let email = document.getElementById("email-sign-up");
  let password = document.getElementById("password-sign-up");

  signUp(nameString, email.value, password.value, constants.API_SOCIAL_URL + "/auth/register")
})

