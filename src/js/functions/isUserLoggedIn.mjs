import * as storage from "../storage/index.mjs";

// check for token to determine if user is logged in.
export default function isUserLoggedIn() {
  const token = storage.load("accessToken");
  if (!token) window.location.replace("/profile/login");
}
