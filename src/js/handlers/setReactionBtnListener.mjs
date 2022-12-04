import { reactToPost } from "../api/posts/react.mjs";

export default function setReactionBtnListener(btn) {
  btn.addEventListener(
    "click",
    async (event) => {
      let postId = btn.getAttribute("data-react-postid");
      let symbol = btn.getAttribute("data-react-symbol");
      let counter = btn.querySelector("[data-reaction-count]");
      let count = parseFloat(counter.innerText);

      const response = reactToPost(postId, symbol);
      if ((response.ok = true)) counter.innerText = count + 1;
    },
    { once: true }
  );
}
