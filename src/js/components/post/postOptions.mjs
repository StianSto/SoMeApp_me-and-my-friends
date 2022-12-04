import * as storage from "../../storage/index.mjs";

/**
 * function checks if user is author of post. returns an element that conatins options that user can interact with. returns generel options if user is not the author.
 * @param {string} name name of author
 * @param {string | number} id id of post
 * @param {Element} postOptionsElement the element where postOptions will be inserted
 * @returns element containing options for the post depending on authorization.
 * @example
 * ```js
 * // if username is localUser
 * postOptions("user", 123)
 * // returns default options: view post
 *
 * postOptions("localUser", 123)
 * // returns default options + authorized options:
 * // view post, edit post
 * ```
 */
export default function postOptions(name, id, postOptionsElement) {
  if (name === storage.load("userProfile").name) {
    postOptionsElement.setAttribute(
      "data-bs-content",
      `
      <ul class='list-group p-0 m-0'>
        <li class='list-group-item'>
          <a href='/profile/posts/?id=${id}' class='text-black text-decoration-none'><i class='fa-solid fa-expand | me-2 fs-5 pe-hover-pointer'></i>View Post</a>
        </li>
        <li class='list-group-item'>
          <a href='/profile/?name=${name}' class='text-black text-decoration-none'><i class='fa-solid fa-user | me-2 fs-5 pe-hover-pointer'></i>View Profile</a>
        </li>
        <li class='list-group-item'>
          <a href='/profile/posts/edit/?id=${id}' class='text-black text-decoration-none'><i class='fa-solid fa-edit | me-2 fs-5 pe-hover-pointer'></i>Edit Post</a>
        </li>
      </ul>
    `
    );
  } else {
    postOptionsElement.setAttribute(
      "data-bs-content",
      `
      <ul class='list-group p-0 m-0'>
        <li class='list-group-item'>
          <a href='/profile/posts/?id=${id}' class='text-black text-decoration-none'><i class='fa-solid fa-expand | me-2 fs-5 pe-hover-pointer'></i>View Post</a>
        </li>
        <li class='list-group-item'>
          <a href='/profile/?name=${name}' class='text-black text-decoration-none'><i class='fa-solid fa-user | me-2 fs-5 pe-hover-pointer'></i>View Profile</a>
        </li>
      </ul>
    `
    );
  }

  return postOptions;
}
