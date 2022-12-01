import * as profile from "../api/profiles/index.mjs";

export async function setUpdateProfileFormListener(name) {
  const form = document.querySelector("#updateMedia");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const updateProfileData = Object.fromEntries(formData.entries());
    console.log(updateProfileData);

    profile.updateProfile(name, updateProfileData);
  });
}
