import { enableBsPopovers } from "./enablers/enableBsPopovers.mjs";
import * as pages from "./pages/index.mjs";

export default async function router() {
  const path = window.location.pathname;

  // for specific pages
  switch (path) {
    case "/":
      pages.homePage(); // home page
      break;
    case "/profile/": //profile page
      pages.profilePage();
      break;
    case "/profile/posts/": //single post
      pages.singlePostPage();
      break;
    case "/profile/posts/edit/": //edit a single post
      pages.editPostPage();
      break;
    case "/profile/edit/": //edit profile
      pages.editProfilePage();
      break;
    case "/profile/login/": //register or login
      console.log("login");
      pages.loginPage();
      break;
  }
}
