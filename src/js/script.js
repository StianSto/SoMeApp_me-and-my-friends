import insertNavHeader from "./components/nav.mjs";
import isUserLoggedIn from "./functions/isUserLoggedIn.mjs";
import { setColorTheme } from "./functions/setColorTheme.mjs";
import { setSearchFormListener } from "./handlers/setSearchFormListener.mjs";
import router from "./router.mjs";
import * as storage from './storage'

// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from '/node_modules/bootstrap'

//import avatar image
import * as defaultAvatar from '../images/default-avatar.png'

// check if user is logged in

if (window.location.pathname !== "/profile/login/" || window.location.pathname !== "/dist/profile/login/") isUserLoggedIn();
// insert navbar
(() => {
  const header = document.querySelector("header");
  if (header) header.append(insertNavHeader().querySelector("nav"));
  const searchBtn = document.querySelector("#site-search");
  if (searchBtn) setSearchFormListener(searchBtn);
})();

router();

(() => {
  // import user theme
  const theme = storage.load("user-theme");
  if (theme) setColorTheme(theme);
})();
