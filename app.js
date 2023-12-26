const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const itemNumber = movieLists[i].querySelectorAll("img").length;
    let clickCounter = 0;
    arrow.addEventListener("click", () => {
        const ratio = Math.floor(window.innerWidth / 270);
        clickCounter++;
        if (itemNumber - (5 + clickCounter) + (5 - ratio) >= 0) {
            movieLists[i].style.transform = `translateX(${
            movieLists[i].computedStyleMap().get("transform")[0].x.value - 290}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
".container,.movie-list-title,.nav-container,.sideBar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
    items.forEach(item=>{
        item.classList.toggle("active");
    });
    ball.classList.toggle("active");
});



// Select All Bullets


// Select All Bullets
const allLinks = document.querySelectorAll(".menu-list .menu-list-item");

function  scrollToSomewhere(element){
element.forEach(ele => {
    ele.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth"
        });
    });
});
}

scrollToSomewhere(allLinks);