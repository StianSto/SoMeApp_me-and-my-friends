import toggleSideBar from "../enablers/sidebar.mjs";
import * as profile from "../api/profiles/index.mjs";
import * as storage from "../storage/index.mjs";
// import { setUpdateProfileFormListener } from "../handlers/setUpdateProfileFormListener.mjs";
import { enableBsPopovers } from "../enablers/enableBsPopovers.mjs";
import setFollowProfileListener from "../handlers/setFollowProfileListener.mjs";

const params = new URL(document.location).searchParams;


export async function profilePage() {
	const name = params.get("name");
  let flags = {
    _author: true,
    _reactions: true,
    _comments: true,
    _followers: true,
    _following: true,
  };

  const profileData = await profile.getProfile(name, flags);
  const profilePosts = await profile.getProfilePosts(name, flags);

  console.log(profileData);
  checkIfFollowing(profileData.followers);

  insertFollowers(profileData.followers);

  enableBsPopovers();
  toggleSideBar();

  // follow profile
}

function checkIfFollowing(followers) {
	const name = params.get("name");
	const userName = storage.load("userProfile").name;
  const followBtn = document.getElementById("follow");
  if (name === userName) return followBtn.remove();
  setFollowProfileListener();

  const isFollowing = followers.some((user) => {
    if (user.name === userName) return true;
  });

  console.log(isFollowing);
  followBtn.dataset.followed = isFollowing;

  if (isFollowing) {
    followBtn.classList.replace("btn-primary", "btn-outline-primary");
    followBtn.innerHTML = `<i class="fa-solid fa-check me-2"></i>Followed`;
  }
}

function insertFollowers(followers) {
  const followersList = document.getElementById("followersList");

  followers.forEach(({ avatar, name }) => {
    let parsedName = name.replace("_", " ");
    let followerParser = new DOMParser().parseFromString(
      `<a href="/profile/?name=${name}" class="follower d-flex flex-column text-decoration-none" style="width: 100px">
        <img
        class=""
        src="${avatar}"
        alt="image of ${parsedName}"
        style="object-fit: cover;"
        />
        <p class="text-black" style="word-wrap: break-word;">${name}</p>
      </a>
      `,
      "text/html"
    );

    followersList.prepend(followerParser.querySelector(".follower"));
  });
}
