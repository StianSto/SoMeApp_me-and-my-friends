import insertNavHeader from "./components/nav.mjs";
import isUserLoggedIn from "./functions/isUserLoggedIn.mjs";
import { setSearchFormListener } from "./handlers/setSearchFormListener.mjs";
import router from "./router.mjs";

// check if user is logged in

if (window.location.pathname !== "/profile/login/") isUserLoggedIn();
// insert navbar
(() => {
  const header = document.querySelector("header");
  if (header) header.append(insertNavHeader().querySelector("nav"));
  const searchBtn = document.querySelector("#site-search");
  if (searchBtn) setSearchFormListener(searchBtn);
})();

router();
