import loginAuth from "../api/auth/loginAuth.mjs";

export default async function setLoginFormListener() {
  const logInForm = document.querySelector("#log-in-form");

	logInForm.addEventListener("submit", (event) => {
		console.log("executed logIn Listener");
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const profileData = Object.fromEntries(formData.entries());

    // send data to API
    loginAuth(profileData);
  });
}
