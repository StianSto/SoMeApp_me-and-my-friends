import * as storage from "../storage/index.mjs";

/**
 * makes a nav as a DOMParsed element that can be inserted into header
 * @returns nav DOM element
 * @example
 * const header = document.querySelector("header")
 * const nav = insertNavHeader()
 *
 * header.append(nav)
 */
export default function insertNavHeader() {
  const profile = storage.load("userProfile");

  const { name, avatar } = profile;
  let parsedName = name.replace("_", " ");

  const nav = new DOMParser().parseFromString(
    `
	<nav class="navbar navbar-expand-lg bg-primary shadow-sm h-100  ">
			<div class="container p-0 h-100">

					<a class="navbar-brand ms-2" href="/">
							<img src="/dist/assets/logo.svg" height="50"> 
					</a>

					<div class="h-100 position-relative nav-profile">
						<a class="nav-link active h-100 p-1 me-auto nav-profile-img" aria-current="page" href="/profile/?name=${name}" style="aspect-ratio: 1;">
							<img class="w-100 h-100 rounded-2" src="${avatar}" alt="image of ${parsedName}" style="object-fit: cover;">
						</a>
						<a href="/profile/edit/?name=${name}" class="nav-edit-profile text-white position-absolute"><i class="fa-solid fa-gear fs-4"></i></a>
					</div>


					<button class="navbar-toggler border-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon py-1" style="background-image: url('')" width="100%" >
									<div class="d-flex w-100 h-100 flex-column justify-content-between" style="position: relative;">
											<div class="bar"></div>
											<div class="bar bar-rotate"></div>
											<div class="bar bar-rotate"></div>
											<div class="bar"></div>
									</div>
							</span>
					</button>

					<div class="collapse navbar-collapse bg-primary w-100" id="navbarSupportedContent">
							<ul class="navbar-nav me-auto mb-2 mb-lg-0">
									<li class="nav-item h-100 d-flex align-items-center">
											<a class="nav-link active" aria-current="page" href="/">Home</a>
									</li>
									<!-- <li class="nav-item">
											<a class="nav-link" href="#">Link</a>
									</li>
									<li class="nav-item dropdown">
											<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
											Dropdown
									</a>
									<li>
											<ul class="dropdown-menu">
													<li><a class="dropdown-item" href="#">Action</a></li>
													<li><a class="dropdown-item" href="#">Another action</a></li>
													<li><hr class="dropdown-divider"></li>
													<li><a class="dropdown-item" href="#">Something else here</a></li>
											</ul>
									</li>
									</li>
									<li class="nav-item">
											<a class="nav-link disabled">Disabled</a>
									</li> -->
							</ul>
							<form id="site-search" class="d-flex" role="search">
									<input class="form-control" name="search" type="search" placeholder="Search" aria-label="Search">
									<button class="btn" type="submit"><i style="font-size: 1.2em" class="fa-solid fa-magnifying-glass text-dark"></i></button>
							</form>
					</div>
			</div>
	</nav>
	`,
    "text/html"
  );

  return nav;
}
