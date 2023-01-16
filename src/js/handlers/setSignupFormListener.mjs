import signupAuth from "../api/auth/signupAuth.mjs";
import * as constants from "../api/constants.mjs";

export default function setSignupFormListener() {
  const signUpForm = document.querySelector("#sign-up-form");
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //concatenate names and replace spaces with underscores. this will be reversed on displaying name.
    const firstName = document.getElementById("first-name-sign-up");
    const lastName = document.getElementById("last-name-sign-up");
    const name = `${firstName.value}_${lastName.value}`;
    const nameString = name.replace(/\s+/g, "_");

    let email = document.getElementById("email-sign-up");
    let password = document.getElementById("password-sign-up");

    const profileData = {
      name: nameString,
      email: email.value,
      password: password.value,
    };

    signupAuth(profileData);
  });
}
