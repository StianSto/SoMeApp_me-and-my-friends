import * as profile from "../api/profiles/index.mjs";

export async function setUpdateProfileFormListener(name) {
  const form = document.querySelector("#updateMedia");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const updateProfileData = Object.fromEntries(formData.entries());

		const response = await profile.updateProfile(name, updateProfileData);

		const successMsgParser = new DOMParser().parseFromString(`
				<p id="profileUpdatedMsg"></p>
			`, "text/html")
		const successMsg = successMsgParser.querySelector("#profileUpdatedMsg")

		if (response.ok) {
  		const previewBanner = document.querySelector("#userBanner");
  		const previewAvatar = document.querySelector("#userAvatar img");
			previewBanner.style.backgroundImage = `url("${updateBanner.value}")`;
			previewAvatar.src = updateAvatar.value;

			successMsg.textContent = "your profile has been updated"
		} else {
			successMsg.textContent = "something went wrong"
		}
		form.append(successMsg)
		setTimeout(() => {
			form.querySelector("#profileUpdatedMsg").remove()
		}, 5000);
  });
}
