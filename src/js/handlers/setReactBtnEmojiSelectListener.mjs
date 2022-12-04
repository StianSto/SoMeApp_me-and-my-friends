import { reactToPost } from "../api/posts/react.mjs";

export default function setReactionBtnEmojiSelectListener(btn, element) {
  const emojiPicker = document.createElement("emoji-picker");
  emojiPicker.classList.add("p-0");

  btn.addEventListener("click", () => {
    element.style = `
      position: relative;
    `;
    console.log(emojiPicker);
    emojiPicker.addEventListener("emoji-click", (event) => {
      let id = btn.getAttribute("data-post-id");
      console.log(id);
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
    });
    element.after(emojiPicker);
  });
}
