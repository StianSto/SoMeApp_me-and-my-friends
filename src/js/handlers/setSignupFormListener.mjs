import signupAuth from "../api/auth/signupAuth.mjs";
import * as constants from "../api/constants.mjs"

export default function setSignupFormListener() {

  const signUpForm = document.querySelector("#sign-up-form")
  signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    //concatenate names and replace spaces with underscores. this will be reversed on displaying name.
    const firstName = document.getElementById("first-name-sign-up");
    const lastName = document.getElementById("last-name-sign-up");
    const name = `${firstName.value}_${lastName.value}`
    const nameString = name.replace(/\s+/g, "_");
    
    
    // const form = event.target;
    // const formData = new FormData(form);
    // const profileData = Object.fromEntries(formData.entries())
    
    // const { email, password } = profileData;
    // console.log(email, password)
    
    
    let email = document.getElementById("email-sign-up");
    let password = document.getElementById("password-sign-up");
    
    signupAuth(nameString, email.value, password.value, constants.API_SOCIAL_URL + "/auth/register")
  })
}