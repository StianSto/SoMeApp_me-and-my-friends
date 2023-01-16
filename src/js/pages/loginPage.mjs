//log in and signup
import setLoginFormListener from "../handlers/setLoginFormListener.mjs";
import setSignupFormListener from "../handlers/setSignupFormListener.mjs";

export function loginPage() {
  setLoginFormListener();
  setSignupFormListener();
}
