import insertNavHeader from "./components/nav.mjs";
import { setSearchFormListener } from "./handlers/setSearchFormListener.mjs";
import router from "./router.mjs";

// check for token to determine if user is logged in.
(async () => {
  const storage = await import("./storage/index.mjs");
  const token = storage.load("accessToken");
  // if (!token) window.location.replace("/profile/login");
})();

// insert navbar
(() => {
  const header = document.querySelector("header");
  if (header) header.append(insertNavHeader().querySelector("nav"));
  const searchBtn = document.querySelector("#site-search");
  if (searchBtn) setSearchFormListener(searchBtn);
})();

router();
