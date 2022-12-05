import * as pages from "./pages/index.mjs";

export default function router() {
  const path = window.location.pathname;

  // for specific pages
  switch (path) {
    case "/":
      pages.homePage();
      break;
    case "/profile/": //profile page
      profilePage();
      break;
    case "/profile/posts": //single post
      singlePostPage();
      break;
    case "/profile/posts/edit": //edit a single post
      editPostPage();
      break;
    case "/profile/edit": //edit profile
      editProfilePage();
      break;
    case "/profile/login": //register or login
      loginPage();
      break;
  }
}
