console.clear();

let mainIndex = 0;
let carouselControlsUnclicked = true;

// Initialize selected elements and width functions
const projectTiles = document.querySelectorAll(".project-card");
let carouselBox = document.querySelector(".carousel-box")


// Compute the index based on the listLength and the offset to handle looping
function indexOffset(index, offset, listLength) {
    newIndex = index + offset;
    return newIndex >= 0 ? newIndex%listLength : listLength + newIndex%listLength
}

// Compute positions of the tiles
function computeTopLeftCornerPositions(carouselBoxWidth, projectTileWidth, spaceBetweenTiles){
    let nVisibleTiles = Math.floor((carouselBoxWidth + spaceBetweenTiles)/(projectTileWidth + spaceBetweenTiles))
    let xTopLeftCorner = {};
    let computedMargin = carouselBoxWidth/2 - (nVisibleTiles*projectTileWidth - (nVisibleTiles - 1)*spaceBetweenTiles)/2;
    for (let i = 0; i < nVisibleTiles; i++) {
        xTopLeftCorner[i] = computedMargin + (spaceBetweenTiles + projectTileWidth)*i
    }
    return xTopLeftCorner
}

// Move tiles to layout of project tiles on page resize assuming all tiles are same size
// Tiles have an origin set to top left corner
function layoutProjectTiles(carouselBox, projectTiles, spaceBetweenTiles) {
    // Compute array of x values
    let xTopLeftCorner = computeTopLeftCornerPositions(carouselBox.offsetWidth, projectTiles[0].width, spaceBetweenTiles)
    if (Object.keys(xTopLeftCorner).length == 0) {
        gsap.set(projectTiles, {scale: carouselBox.offsetWidth/projectTiles[0].offsetWidth, top: 0, left:0})
    }

}

layoutProjectTiles(carouselBox, projectTiles, 10)


// layoutProjectTiles(projectTiles, carouselBox)
// addEventListener("resize", (event) => {layoutProjectTiles(projectTiles, carouselBox)})
//
//



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
