import * as constants from "../api/constants.mjs";
import loginAuth from "../api/auth/loginAuth.mjs"

export default async function setLoginFormListener() {
  const logInForm = document.querySelector("#log-in-form");
  const loginURL = constants.API_SOCIAL_URL + "/auth/login";
 
  logInForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profileData = Object.fromEntries(formData.entries())
    const { email, password } = profileData;

    console.log(email, password)

    // send data to API
    loginAuth(email, password, loginURL);
  })
} 

