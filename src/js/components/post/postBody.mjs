export function templatePostBody(body) {
  const parser = new DOMParser();
  const parsedPostBody = parser.parseFromString(
    `
    <div class="card-body px-4 px-md-5">
      <p class="text-muted" style="font-size: smaller;">posted: <span>21.10.2022</span></p>
      <p class="post-content">${body}</p>
      <div>
        <button class="btn btn__like"><i class="fa-solid fa-heart fs-4 liked"></i><span class="likes ms-2">8</span></button>
        <button class="btn btn__comment"><i class="fa-solid fa-comment fs-4"></i><span class="comments ms-2">14</span></button>
      </div>
    </div>
  );
  `,
    "text/html"
  );

  return parsedPostBody;
}
