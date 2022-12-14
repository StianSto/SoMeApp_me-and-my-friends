import { enableBsPopovers } from "./enablers/enableBsPopovers.mjs";
import * as pages from "./pages/index.mjs";

export default async function router() {
  const path = window.location.pathname;

  // for specific pages
  switch (path) {
    case "/":
    case "/index.html": // home page
      pages.homePage();
      break;
    case "/profile/":
    case "/profile/index.html": //profile page
      pages.profilePage();
      break;
    case "/profile/posts/":
    case "/profile/posts/index.html": //single post
      pages.singlePostPage();
      break;
    case "/profile/posts/edit/":
    case "/profile/posts/edit/index.html": //edit a single post
      pages.editPostPage();
      break;
    case "/profile/edit/":
    case "/profile/edit/index.html": //edit profile
      pages.editProfilePage();
      break;
    case "/profile/login/":
    case "/profile/login/index.html": //register or login
      console.log("login");
      pages.loginPage();
      break;
  }
}
