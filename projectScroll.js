console.clear();

let mainIndex = 0;
let carouselControlsUnclicked = true;

// Initialize selected elements and width functions
const projectTiles = document.querySelectorAll(".project-card");
let projectTileWidth = (projectTiles) => projectTiles[0].offsetWidth
let carouselBox = document.querySelector(".carousel-box")
let carouselBoxWidth = (carouselBoxWidth) => carouselBox.offsetWidth

// Compute the index based on the listLength and the offset to handle looping
function indexOffset(index, offset, listLength) {
    newIndex = index + offset;
    return newIndex >= 0 ? newIndex%listLength : listLength + newIndex%listLength
}


// Compute layout of project tiles on page resize
function layoutProjectTiles(projectTiles, carouselBox) {
    // Compute number of project tiles to display
    let n = Math.floor(carouselBoxWidth(carouselBox)/projectTileWidth(projectTiles))
    if (n == 0) {

        gsap.set(projectTiles, {scale: carouselBoxWidth(carouselBox)/projectTileWidth(projectTiles), top: 0, left:0})
    } else {
        gsap.set(projectTiles, {scale: 1, top: 0, left: 0, x: (carouselBoxWidth(carouselBox)/2 - projectTileWidth(projectTiles)/2)})
    }
    console.log([n, carouselBoxWidth(carouselBox), projectTileWidth(projectTiles)])
}

layoutProjectTiles(projectTiles, carouselBox)
addEventListener("resize", (event) => {layoutProjectTiles(projectTiles, carouselBox)})





// gsap.set(targets, { xPercent: 0 });
// gsap.set(targets[0], { xPercent: 0 });
//
// // Returns the list index of the element at the index + offset

//
// // Next button
// function slideOneNext() {
//     gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 0.25, duration: 1.0, xPercent: 0, zIndex: 0, opacity: 0});
//     count = count < targets.length - 1 ? ++count : 0;
//     gsap.fromTo(targets[count], { xPercent: 100, zIndex: 10 }, { duration: 1.25, xPercent: 0, zIndex: 1, opacity: 1});
// }
// nextButton.addEventListener("click", function() {
//     slideOneNext();
//     unclicked = false;
// });
//
// // Previous button
// function slideOnePrev() {
//   gsap.fromTo(targets[count], { xPercent: 0, zIndex: 10 }, {xPercent: 0, zIndex: 0});
//   gsap.fromTo(targets[count], { xPercent: 0, zIndex: 0 }, { delay: 0, duration: 1.2, xPercent: 100, zIndex: 0 });
//   count = count < targets.length ? --count : 0;
// }
//
// prevButton.addEventListener("click", function() {
//   slideOnePrev();
//   unclicked = false;
// });
