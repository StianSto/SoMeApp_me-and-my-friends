import toggleSideBar from "../enablers/sidebar.mjs";
import * as profile from "../api/profiles/index.mjs";
// import { setUpdateProfileFormListener } from "../handlers/setUpdateProfileFormListener.mjs";
import { enableBsPopovers } from "../enablers/enableBsPopovers.mjs";

export async function profilePage() {
  const params = new URL(document.location).searchParams;
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

  enableBsPopovers();
  toggleSideBar();
}
