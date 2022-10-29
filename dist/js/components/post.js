const post = `
    <div class="card post my-5 row mx-1 mx-md-auto">
        <div class="card-header col p-3">
            <a href="/profile.html" class="profile-header row m-0 align-items-center flex-nowrap" style="height: 70px;">
                <div class="profile__img | h-100 col-auto p-0"style="aspect-ratio: 1;">
                    <img class="w-100 h-100 rounded-2" src="/dist/assets/images/temp/craig-mckay-jmURdhtm7Ng-unsplash.jpg" alt="">
                </div>
                <p class="profile__name | col m-0 fs-5">Name Nameson</p>
            </a>
        </div>
        
        <div class="card-body px-4 px-md-5">
            <p class="text-muted" style="font-size: smaller;">posted: <span>21.10.2022</span></p>
            <p class="post-content">
                Text content goes in here. a statement of sort, or maybe a joke. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae autem ex omnis eos necessitatibus ea voluptatibus iure aliquid ullam officia?
            </p>
            <div>
                <button class="btn btn__like"><i class="fa-solid fa-heart fs-4 liked"></i><span class="likes ms-2">8</span></button>
                <button class="btn btn__comment"><i class="fa-solid fa-comment fs-4"></i><span class="comments ms-2">14</span></button>
            </div>
        </div>
        
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
    </div>
`

export default post;