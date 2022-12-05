import insertNavHeader from "./components/nav.mjs";
import { setSearchFormListener } from "./handlers/setSearchFormListener.mjs";
import router from "./router.mjs";

(() => {
  const header = document.querySelector("header");
  if (header) header.append(insertNavHeader().querySelector("nav"));
  const searchBtn = document.querySelector("#site-search");
  if (searchBtn) setSearchFormListener(searchBtn);
})();

router();
