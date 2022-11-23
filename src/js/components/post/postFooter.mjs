export function templatePostFooter() {
  const parser = new DOMParser();
  const parsedPostFooter = parser.parseFromString(
    `
    <div class="card-footer py-4 px-4 px-md-5">
        <form class="comment row align-items-end">
            <div class="col comment-content">
                <textarea name="" id="comment-textarea" placeholder="comment here" class="form-control w-100 rounded-0"></textarea>
            </div>
            <button type="submit" class=" col-auto btn submit-comment shadow-sm mt-4">Comment</button>
        </form>

        <div class="post-comments col mt-4">
            
            <div class="comment pt-3">
                <div class="profile d-flex align-items-center gap-2" style="height: 50px;">
                    <div class="profile__img h-100 col-auto p-0"style="aspect-ratio: 1;">
                        <img class="w-100 h-100 rounded-2" src="/dist/assets/images/temp/stefan-stefancik-QXevDflbl8A-unsplash.jpg" alt="">
                    </div>
                    <p class="col m-0 fs-5">Name Nameson</p>
                </div>
                <p class="comment-content">I like this post :D </p>
            </div>
            
            <div class="comment pt-3">
                <div class="profile d-flex align-items-center gap-2" style="height: 50px;">
                    <div class="profile__img h-100 col-auto p-0"style="aspect-ratio: 1;">
                        <img class="w-100 h-100 rounded-2" src="/dist/assets/images/temp/stefan-stefancik-QXevDflbl8A-unsplash.jpg" alt="">
                    </div>
                    <p class="col m-0 fs-5">Name Nameson</p>
                </div>
                <p class="comment-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci possimus qui recusandae temporibus non fuga natus rerum repellat maiores consequuntur, deleniti necessitatibus eligendi unde earum molestiae inventore autem vero! </p>
            </div>

        </div>
    </div>
  `,
    "text/html"
  );

  return parsedPostFooter;
}
