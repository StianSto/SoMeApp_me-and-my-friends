import * as constants from "../api/constants.mjs";

console.log(constants.API_SOCIAL_URL);
//log in
import login from "../forms/login.mjs";
const logInForm = document.querySelector("#log-in-form")

logInForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = document.getElementById("email-log-in")
  let password = document.getElementById("password-log-in")

  login(email.value, password.value, API_SOCIAL_URL + "/auth/login")
})


//sign up

import signUp from "../forms/signup.mjs";

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

  signUp(nameString, email.value, password.value, API_BASE_URL + "/auth/register")
})

