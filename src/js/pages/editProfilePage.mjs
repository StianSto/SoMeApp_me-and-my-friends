import * as storage from "../storage/index.mjs";
import { setUpdateProfileFormListener } from "../handlers/setUpdateProfileFormListener.mjs";
import { getProfile } from "../api/profiles/read.mjs";
import toggleSideBar from "../enablers/sidebar.mjs";
import { setUpdateColorTheme } from "../handlers/setUpdateColorTheme.mjs";

export async function editProfilePage() {
  const updateForm = document.querySelector("#updateMedia");
  const updateBanner = updateForm.querySelector("#updateBanner");
  const updateAvatar = updateForm.querySelector("#updateAvatar");

  const previewAvatar = document.querySelector("#userAvatar img");
  const previewBanner = document.querySelector("#userBanner");

  const userName = storage.load("userProfile").name;
  const profile = await getProfile(userName);
  const { avatar, banner } = profile;
  let parsedName = userName.replace("_", " ");

  updateBanner.value = banner;
  updateAvatar.value = avatar;

  (function preview() {
    previewAvatar.src = updateAvatar.value;
    previewAvatar.alt = "image of" + parsedName;
    previewBanner.src = updateBanner.value;
  })();

  (() => {
		const previewBtnProfile = document.querySelector("#previewUpdateProfile");
		previewBtnProfile.addEventListener("click", () => {
			previewBanner.style.backgroundImage = `url("${updateBanner.value}")`;
			previewAvatar.src = updateAvatar.value;
    });
  })();

	setUpdateProfileFormListener(userName);
  toggleSideBar();
  setUpdateColorTheme();
}
