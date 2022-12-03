import * as createPostComponents from "../components/post/index.mjs";
import * as storage from "../storage/index.mjs";

export function createPostTemplate() {
  const formCreatePost = document.getElementById("form-create-post");

  const userData = storage.load("userProfile");
  let { avatar, name } = userData;
  if (!avatar) avatar = "/dist/assets/images/default-avatar.png";
  name = name.replace("_", " ");

  const createPostUserAvatar = formCreatePost.querySelector(".profile__img");
  createPostUserAvatar.innerHTML = `<img class="w-100 h-100 rounded-2" src="${avatar}" alt="">`;

  const createPostUserName = formCreatePost.querySelector(".profile__name");
  createPostUserName.innerText = name;
}
