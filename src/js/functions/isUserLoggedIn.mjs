import * as storage from "../storage/index.mjs";

/**
 * checks if the user is logged in based on token in local storage. redirects user to login page if token is not found.
 */
export default function isUserLoggedIn() {
  const token = storage.load("accessToken");
  if (!token) window.location.replace("/profile/login");
}
