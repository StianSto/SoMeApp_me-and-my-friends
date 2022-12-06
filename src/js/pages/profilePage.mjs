import toggleSideBar from "../components/sidebar.mjs";
import * as profile from "../api/profiles/index.mjs";
// import { setUpdateProfileFormListener } from "../handlers/setUpdateProfileFormListener.mjs";
import { enableBsPopovers } from "../enablers/enableBsPopovers.mjs";

export function profilePage() {
  const params = new URL(document.location).searchParams;
  const name = params.get("name");

  let flags = {
    _author: true,
    _reactions: true,
    _comments: true,
    _followers: true,
    _following: true,
  };

  profile.getProfile(name, flags);
  profile.getProfilePosts(name, flags);

  enableBsPopovers();
  toggleSideBar();
}
