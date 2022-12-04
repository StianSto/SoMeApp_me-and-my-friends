/**
 * makes a DOMParsed element for the header of the post.
 * @param {Object} author
 * @param {string} author.name author's name
 * @param {string} author.avatar author's profile image / avatar
 * @param {string | number} id id of Post
 * @returns element
 */
export function templatePostHeader({ name = "", avatar }, id) {
  if (!avatar || avatar.length === 0)
    avatar = "/dist/assets/images/default-avatar.png";

  name = name.replace("_", " ");

  const parser = new DOMParser();
  const parsedPostHeader = parser.parseFromString(
    `
    <div class="card-header row p-3 m-0">
      <a href="/profile/?name=${name}" class="profile-header | col m-0 p-0 d-flex align-items-center flex-nowrap" style="height: 70px;">
        <div class="profile__img | h-100 p-0"style="aspect-ratio: 1;">
            <img class="w-100 h-100 rounded-2" src="${avatar}" alt="profile of ${name}">
        </div>
        <p class="profile__name | col m-0 ms-2 fs-5">${name}</p>
      </a>
        <button type="button" class="post-options | btn col-auto" data-bs-container="body" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="right" data-bs-html="true" data-bs-content="">
          <i class="fa fa-solid fa-ellipsis-vertical | ms-auto w-auto fs-3 text-black"></i>
        </button>
    </div>
  `,
    "text/html"
  );
  return parsedPostHeader;
}
