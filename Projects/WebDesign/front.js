console.log("Loaded front.js!")


let svgNS = "http://www.w3.org/2000/svg"
// let newRect = document.createElementNS(svgNS, "rect");
// let secondRect = document.createElementNS(svgNS, "rect");
//
// newRect.setAttribute("x", "0");
// newRect.setAttribute("y", "0");
// newRect.setAttribute("width", "100vw");
// newRect.setAttribute("height", "100");
// newRect.setAttribute("fill", "blue");
//
// const svg = document.querySelector("svg");
// console.log(svg)
//
// gsap.set(secondRect, {
//     attr: {x: 100, y: 100, width: 100, height: 100, fill: "red"}
// });
//
// // append the new rectangle to the svg
// svg.appendChild(newRect);
// svg.appendChild(secondRect);

function drawNodeAt(x, y) {
    let svgNS = "http://www.w3.org/2000/svg"
    const svg = document.querySelector("svg");
    let newNodeInner = document.createElementNS(svgNS, "circle");
    gsap.set(newNodeInner, {
        attr: {cx: x, cy: y, r: "6px", fill: "transparent", stroke: "white", strokeWidth: "50"}
    });
    svg.appendChild(newNodeInner)
    let newNodeOuter = document.createElementNS(svgNS, "circle");
    gsap.set(newNodeOuter, {
        attr: {cx: x, cy: y, r: "9px", fill: "transparent", stroke: "white", strokeWidth: "50"}
    });
    svg.appendChild(newNodeOuter)
}

function drawTailPath(pathString) {
    let svgNS = "http://www.w3.org/2000/svg"
    const svg = document.querySelector("svg");
    let newPath = document.createElementNS(svgNS, "path");
    gsap.set(newPath, {
        attr: {d: pathString, stroke: "white", strokeWidth: "200", fill: "transparent"}
    });
    svg.appendChild(newPath)
}

let xstart;
let ystart;
for (let i = 0; i < 10; i++) {
    xstart = 100 + 25*i
    ystart = 109
    drawNodeAt(100 + 25*i, 100)
    let tailString = "M" + xstart + "," + ystart
    tailString += "L" + xstart + "," + (ystart + 200 + 25*(10 - i))
    tailString += "L" + 500 + "," + (ystart + 200 + 25*(10 - i))
    console.log(tailString)
    drawTailPath(tailString)
    tailString = ""
}
