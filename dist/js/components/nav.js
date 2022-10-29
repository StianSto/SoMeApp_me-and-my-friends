const nav = `
<nav class="navbar navbar-light navbar-expand-lg bg-primary">
    <div class="container">

        <a class="navbar-brand" href="/wall.html">
            <img src="/dist/assets/logo.svg" height="50"> 
        </a>

        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon py-1" style="background-image: url('')" width="100%" >
                <div class="d-flex w-100 h-100 flex-column justify-content-between" style="position: relative;">
                    <div class="bar"></div>
                    <div class="bar bar-rotate"></div>
                    <div class="bar bar-rotate"></div>
                    <div class="bar"></div>
                </div>
            </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/wall.html">Home</a>
                </li>
                <!-- <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                <li class="nav-item">
                <a class="nav-link disabled">Disabled</a>
                </li> -->
            </ul>
            <form id="site-search" class="d-flex" role="search">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search">
                <button class="btn" type="submit"><i style="font-size: 1.2em" class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>
    </div>
</nav>

`

export default nav;