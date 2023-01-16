import * as profile from "../api/profiles/index.mjs";
import * as storage from "../storage/index.mjs";

const params = new URL(document.location).searchParams;
const profileName = params.get("name");
const followBtn = document.getElementById("follow");

export default function setFollowProfileListener() {
  let followed = followBtn.getAttribute("data-followed")

  followBtn.addEventListener("click", async () => {
		if(followed === "true" || followed === true) unfollow()
			else 	{ follow() }
    followed = !followed;
		followBtn.setAttribute("data-followed", followed)
  });
}

async function follow() {
  const response = await profile.followUser(profileName);
  if (!response.ok) return;

  followBtn.classList.replace("btn-primary", "btn-outline-primary");
  followBtn.innerHTML = `<i class="fa-solid fa-check me-2"></i>Followed`;

  return await response;
}
async function unfollow() {
  const response = await profile.unfollowUser(profileName);
  if (!response.ok) return;

  followBtn.classList.replace("btn-outline-primary", "btn-primary");
  followBtn.innerHTML = `<i class="fa-solid fa-user-plus me-2"></i>Follow`;

  return await response;
}
