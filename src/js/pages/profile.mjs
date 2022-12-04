import nav from "../components/nav.mjs";
import toggleSideBar from "../components/sidebar.mjs";
import * as profile from "../api/profiles/index.mjs";
import * as storage from "../storage/index.mjs";
import { setUpdateProfileFormListener } from "../handlers/setUpdateProfileFormListener.mjs";

// import and add nav, will be added with document.create instead
const header = document.querySelector("header");
header.innerHTML = nav;

//import sidebar toggle function, will be added with document.create instead
toggleSideBar();

const params = new URL(document.location).searchParams;
const name = params.get("name");

let flags = {
  _author: true,
  _reactions: true,
  _comments: true,
  _followers: true,
  _following: true,
};

if (window.location.pathname === "/profile/") {
  profile.getProfile(name, flags);
  profile.getProfilePosts(name, flags);
}

if (window.location.pathname === "/profile/edit/") {
  const updateForm = document.querySelector("#updateMedia");
  const updateBanner = updateForm.querySelector("#updateBanner");
  const updateAvatar = updateForm.querySelector("#updateAvatar");

  const getLatestInfo = await profile.getProfile(name, flags);
  storage.save("userProfile", getLatestInfo);

  updateBanner.value = getLatestInfo.banner;
  updateAvatar.value = getLatestInfo.avatar;

  (() => {
    const previewBtn = document.querySelector("#previewUpdateProfile");
    previewBtn.addEventListener("click", () => {
      const previewAvatar = document.querySelector("#userAvatar");
      const previewBanner = document.querySelector("#userBanner");
      previewAvatar.innerHTML = `
      <img src="${updateAvatar.value}" class="rounded-2 shadow" style="object-fit: cover; aspect-ratio: 1;" alt="image of ${name}">
      `;
      previewBanner.style.backgroundImage = `url("${updateBanner.value}")`;
      console.dir(previewBanner);
    });
  })();

  setUpdateProfileFormListener(name);
}
