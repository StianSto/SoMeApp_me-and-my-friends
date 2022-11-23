export function templatePostHeader() {
  const parser = new DOMParser();
  const parsedPostHeader = parser.parseFromString(
    `
    <div class="card-header col p-3">
        <a href="/profile" class="profile-header row m-0 align-items-center flex-nowrap" style="height: 70px;">
            <div class="profile__img | h-100 col-auto p-0"style="aspect-ratio: 1;">
                <img class="w-100 h-100 rounded-2" src="" alt="">
            </div>
            <p class="profile__name | col m-0 fs-5">Name Nameson</p>
        </a>
    </div>
  `,
    "text/html"
  );
  return parsedPostHeader;
}
