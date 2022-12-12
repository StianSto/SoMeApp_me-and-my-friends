import * as profile from "../api/profiles/index.mjs";
import * as storage from "../storage/index.mjs";

const params = new URL(document.location).searchParams;
const profileName = params.get("name");
const followBtn = document.getElementById("follow");

export default function setFollowProfileListener() {
  let followed = followBtn.dataset.followed;
  console.log(followed);

  followBtn.addEventListener("click", () => {
    let response = followed ? follow() : unfollow();
    if (!response) throw new Error("something went wrong");
    followed = !followed;
  });
}

async function follow() {
  const response = await profile.followUser(profileName);
  console.log(response);
  if (!response.ok) return;

  followBtn.classList.replace("btn-primary", "btn-outline-primary");
  followBtn.innerHTML = `<i class="fa-solid fa-check me-2"></i>Followed`;

  return response;
}
async function unfollow() {
  const response = await profile.unfollowUser(profileName);
  console.log(response);
  if (!response.ok) return;

  followBtn.classList.replace("btn-outline-primary", "btn-primary");
  followBtn.innerHTML = `<i class="fa-solid fa-user-plus me-2"></i>Follow`;

  return response;
}
