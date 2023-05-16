const body = document.querySelector('body');
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector("#hamburger");
const navlinks = document.querySelectorAll(".navLink");

hamburger.addEventListener("click", function () {

    if (navbar.classList.contains("responsive")) {
        console.log("responsive");
        navbar.classList.remove("responsive");
        body.classList.remove("noscroll");
    }
    else {
        console.log("not responsive");
        navbar.classList.add("responsive");
        body.classList.add("noscroll");
    }
});

navlinks.forEach(navLink => navLink.addEventListener('click', function () {
    body.classList.remove("noscroll");
    navbar.classList.remove("responsive");
}));