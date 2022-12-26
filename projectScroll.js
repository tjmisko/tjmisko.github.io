console.clear();

let offsetCounter = 0;
let carouselControlsUnclicked = true;

// Initialize selected elements and width variables
const projectTiles = document.querySelectorAll(".project-card");
const projectTilesWidth = projectTiles[0].offsetWidth
const projectTilesLength = projectTiles.length
const carouselBox = document.querySelector(".carousel-box");

// Assuming a spacing between tiles of 10px and uniform tile width
function nVisibleTiles() {
    return Math.floor((carouselBox.offsetWidth + 10)/(projectTilesWidth + 5))
}

function visibleIndexRange(offsetCounter) {
    const range = Array.from({ length: nVisibleTiles()}, (_, i) => i );
    return Array.from(range, (element) => indexOffset(element, offsetCounter, projectTilesLength))
}
// Order is still funky, maybe fix with flex order
// How to implement sliding?
function setVisibleElements() {
    visibleTileIndices = visibleIndexRange(offsetCounter);
    console.log(visibleTileIndices)
    undoTransform()
    for (p of projectTiles) {
        p.style.display = "none";
    }
    for (let i = 0; i < visibleTileIndices.length; i++) {
        projectTiles[visibleTileIndices[i]].style.display = "block";
        projectTiles[visibleTileIndices[i]].style.order = i;
    }

    let timeoutID = setTimeout(incrementOffsetCounter, 4000);
    return timeoutID;
}

function slideTilesLeft() {
    let visibleTileIndices = visibleIndexRange(offsetCounter);
    //adjust for flip rl
    let nextTile = projectTiles[indexOffset(visibleTileIndices.at(-1), 1, projectTilesLength)]
    let lastTile = projectTiles[visibleTileIndices[0]];
    slideAllElementsLeft();
    slideLeftmostOffscreen();
    slideRightmostOnscreen(nextTile);
}

function slideTilesRight() {
    let visibleTileIndices = visibleIndexRange(offsetCounter);
    //adjust for flip rl
    // let nextTile = projectTiles[indexOffset(visibleTileIndices.at(-1), 1, projectTilesLength)]
    // let lastTile = projectTiles[visibleTileIndices[]
    slideAllElementsRight();
    slideRightmostOffscreen();
    slideLeftmostOnscreen();
}

function slideAllElementsLeft() {
    gsap.to(projectTiles, {xPercent: -100, duration: 1})
}

function slideLeftmostOffscreen() {
    gsap.to(projectTiles[visibleIndexRange(offsetCounter)[0]], {x: -1000, duration: 1})
}

function slideRightmostOnscreen() {
    nextTile.style.position = "absolute";
    nextTile.style.display = "block";
    nextTile.style.right = "0";
    nextTile.style.transform = "translate(-100%)";
    function  setDisplayFlex() {
        nextTile.style.position = "relative";
    }
    gsap.fromTo(nextTile, {x: 1000}, {x: 0, duration: 1, onComplete: setDisplayFlex})
}



function undoTransform() {
    gsap.set(projectTiles, {clearProps: "transform"})
}

// selects first element, slides it left,
// function slideVisibleElementsLeft() {
//     console.log("slideLeft")
//     visibleTileIndices = visibleIndexRange(offsetCounter);
//     for (let i = 0; i < visibleTileIndices.length; i++){
//         if (i == 0) {
//             gsap.to(projectTiles[visibleTileIndices[i]], {xPercent: -500, duration:0.1, onComplete: incrementOffsetCounter});
//         } else {
//             gsap.to(projectTiles[visibleTileIndices[i]], {xPercent:-100, duration: 0.1});
//         }
//     }
// }

// On page load, set visible elements
let timeoutID = setVisibleElements()
addEventListener("resize", (event) => {
    timeoutID = setVisibleElements();
    clearTimeout(timeoutID);
})

// Compute the index based on the listLength and the offset to handle looping
function indexOffset(index, offset, listLength) {
    newIndex = index + offset;
    return newIndex >= 0 ? newIndex%listLength : listLength + newIndex%listLength
}

function incrementOffsetCounter() {
    console.log("increment")
    offsetCounter++
    setVisibleElements();
    //setTimeout(slideVisibleElementsLeft, 8000)

}
//
// // Compute positions of the tiles
// function computeTopLeftCornerPositions(carouselBoxWidth, projectTileWidth, spaceBetweenTiles){
//     let nVisibleTiles = Math.floor((carouselBoxWidth + spaceBetweenTiles)/(projectTileWidth + spaceBetweenTiles))
//     console.log(nVisibleTiles)
//     let xTopLeftCorner = {};
//     let computedMargin = carouselBoxWidth/2 - (nVisibleTiles*projectTileWidth - (nVisibleTiles - 1)*spaceBetweenTiles)/2;
//     for (let i = 0; i < nVisibleTiles; i++) {
//         xTopLeftCorner[i] = {x: computedMargin + (spaceBetweenTiles + projectTileWidth)*i}
//     }
//     return xTopLeftCorner
// }
//
// // Move tiles to layout of project tiles on page resize assuming all tiles are same size
// // Tiles have an origin set to top left corner
// function layoutProjectTiles(carouselBox, projectTiles, spaceBetweenTiles) {
//     // Compute array of x values
//     let xTopLeftCornerPositions = computeTopLeftCornerPositions(carouselBox.offsetWidth, projectTiles[0].offsetWidth, spaceBetweenTiles)
//     console.log(xTopLeftCornerPositions)
//     let nVisibleTiles = Object.keys(xTopLeftCornerPositions).length
//     if (nVisibleTiles == 0) {
//         console.log("scaling")
//         gsap.set(projectTiles, {scale: carouselBox.offsetWidth/projectTiles[0].offsetWidth, top: 0, left:0})
//     } else {
//         for (let i = 0; i < nVisibleTiles; i++) {
//             gsap.set(projectTiles[i], xTopLeftCornerPositions[i])
//         }
//     }
//
// }
// window.addEventListener("resize", (event) => layoutProjectTiles(carouselBox, projectTiles, 10))
//
// function slideNext() {
//     moveAllProjectTiles();
// }
//
// setInterval(increment, 10000, 0)
//
// function increment() {
//      mainIndex++
// }
//
//
//
// function setNewAnimations() {
//
// }
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
