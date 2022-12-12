import { reactToPost } from "../api/posts/react.mjs";

/**
 *
 * @param {*} btn
 * @param {*} element
 */
export default function setReactionBtnEmojiSelectListener(btn, element) {
  let emojiPicker;
  if (!document.querySelector("emoji-picker")) {
    emojiPicker = document.createElement("emoji-picker");
    emojiPicker.classList.add("p-0", "d-none");
    emojiPicker.style.transition = "height 2000ms ease-in-out";
  }

  btn.addEventListener("click", () => {
    emojiPicker.classList.toggle("d-none");
    emojiPicker.ontransitionend = emojiPicker.remove();

    emojiPicker.addEventListener(
      "emoji-click",
      (event) => {
        let id = btn.getAttribute("data-post-id");
        reactToPost(id, event.detail.unicode);
        let newReaction = new DOMParser().parseFromString(
          `
        <button 
          class="btn btn-light text-dark btn-react"
          style="width: fit-content;"
          data-react-symbol="${event.detail.unicode}"
          data-react-postId="${id}"
        >
          <span class="align-top">${event.detail.unicode} <span data-reaction-count>1</span></span>
        </button>
      `,
          "text/html"
        );
        btn.after(newReaction.querySelector("button"));
      },
      { once: true }
    );
    element.after(emojiPicker);
  });
}
