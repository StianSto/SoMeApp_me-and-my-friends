/**
 * makes a DOMParsed element for the header of the post.
 * @param {Object} author
 * @param {string} author.name author's name
 * @param {string} author.avatar author's profile image / avatar
 * @returns element
 */
export function templatePostHeader({ name, avatar }) {
  if (!avatar || avatar.length === 0)
    avatar = "/dist/assets/images/default-avatar.png";

  const parser = new DOMParser();
  const parsedPostHeader = parser.parseFromString(
    `
    <div class="card-header col p-3">
        <a href="/profile" class="profile-header row m-0 align-items-center flex-nowrap" style="height: 70px;">
            <div class="profile__img | h-100 col-auto p-0"style="aspect-ratio: 1;">
                <img class="w-100 h-100 rounded-2" src="${avatar}" alt="profile of ${name}">
            </div>
            <p class="profile__name | col m-0 fs-5">${name}</p>
        </a>
    </div>
  `,
    "text/html"
  );
  return parsedPostHeader;
}
