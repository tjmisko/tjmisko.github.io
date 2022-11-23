console.log("Loaded BarChart.js!");

// Do I want to have TimeBlocks as a separate class, or should they just be worked
// inside of BarChart?  It's lighter weight to handle it inside of BarChart, but
// it's less of a separation of concerns... hard to say right now

var rowSize   = 100; // => container height / number of items
var container = document.querySelector(".container");
var listItems = Array.from(document.querySelectorAll(".list-item")); // Array of elements
var sortables = listItems.map(Sortable); // Array of sortables
var total     = sortables.length;

function changeIndex(item, to) {

  // Change position in array
  arrayMove(sortables, item.index, to);

  // Change element's position in DOM. Not always necessary. Just showing how.
  if (to === total - 1) {
    container.appendChild(item.element);
  } else {
    var i = item.index > to ? to : to + 1;
    container.insertBefore(item.element, container.children[i]);
  }

  // Set index for each sortable
  sortables.forEach((sortable, index) => sortable.setIndex(index));
}

function Sortable(element, index) {

  var content = element.querySelector(".item-content");

  var animation = TweenLite.to(content, 0.3, {
    boxShadow: "rgba(0,0,0,0.2) 0px 16px 32px 0px",
    force3D: true,
    scale: 1.1,
    paused: true
  });

  var dragger = new Draggable(element, {
    onDragStart: downAction,
    onRelease: upAction,
    onDrag: dragAction,
    cursor: "inherit",
    type: "y"
  });

  // Public properties and methods
  var sortable = {
    dragger:  dragger,
    element:  element,
    index:    index,
    setIndex: setIndex
  };

  TweenLite.set(element, { y: index * rowSize });

  function setIndex(index) {

    sortable.index = index;

    // Don't layout if you're dragging
    if (!dragger.isDragging) layout();
  }

  function downAction() {
    animation.play();
    this.update();
  }

  function dragAction() {

    // Calculate the current index based on element's position
    var index = clamp(Math.round(this.y / rowSize), 0, total - 1);

    if (index !== sortable.index) {
      console.log("switched position");
      changeIndex(sortable, index);
    }
  }

  function upAction() {
    animation.reverse();
    layout();
  }

  function layout() {
    TweenLite.to(element, 5, { y: sortable.index * rowSize });
  }

  return sortable;
}

// Changes an elements's position in array
function arrayMove(array, from, to) {
  array.splice(to, 0, array.splice(from, 1)[0]);
}

// Clamps a value to a min/max
function clamp(value, a, b) {
  return value < a ? a : (value > b ? b : value);
}


class BarChart {
    // Creates a new barchart div
    // Initializes a new JSON data map of category name keys and duration values
    //      data.keys = horizontal axis labels
    //      data.values ~ bar heights
    //      bar heights are computed dynamically using the chartheight
    constructor(parentId, chartId="") {
        let barchart = document.createElement('div')
        barchart.setAttribute("class", "barchart")
        barchart.setAttribute("id", chartId)
        const graphContainer = document.getElementById(parentId)
        graphContainer.appendChild(barchart)
        this.barchart = barchart
        this.chartheight = barchart.offsetHeight
        this.chartwidth = barchart.offsetWidth
        this.data = {}
        this.ncol = 0
        this.maxDuration = null;
        this.colsize = Math.min(this.chartwidth/this.ncol, 100)
    }

    // takes in a duration (integer/double) and returns the height of the bar in px (string)
    durationToHeight(duration) {
        return Math.floor(duration/this.maxDuration*this.chartheight) + "px"
    }

    // Toggles whether the chart DOM element is visible
    toggleChartDisplay() {
        if (this.barchart.style.display == "none") {
            this.barchart.style.display = "block"
        } else {
            this.barchart.style.display = "none"
        }
    }

    // Toggle Vertical Gridlines
    toggleVerticalGridlines() {}
    // Set Vertical Gridline Spacing
    setVerticalGridlineSpacing() {}
    // Toggle Vertical Axis
    toggleVerticalAxis() {}
    // Toggle Horizontal Axis Titles
    toggleHorizontalAxisTitles(){}

    // Resets the heights to be proportional to the maxDuration
    // Handles whether category heights need to updated or not
    updateCategoryHeights() {
        if (Object.keys(this.data).length > 0) {
        // checks whether the maxDuration has increased
            let curMax = Math.max(...Object.values(this.data))
            if (curMax > this.maxDuration) {
                this.maxDuration = curMax
                for (var c in this.data) {
                    let categoryDiv = document.getElementById(c)
                    categoryDiv.style.height = this.durationToHeight(this.data[c])
                }
            }
        }
    }

    repositionAll() {}
    updateTransformThreshold() {}

    moveToStartPosition(){}
    // adds {name: duration} to this.data JSON object
    // creates div element in DOM
    // updates the height of all divs based on the new category

    // creates the HTML
    createColumn(name, duration) {
        let newCategory = document.createElement('div');
        newCategory.setAttribute("class", "column");
        newCategory.setAttribute("id", name);
        newCategory.style.height = this.durationToHeight(duration);
        newCategory.style.width = this.colsize + "px";
        return newCategory
    }

    createLabel(name) {
        let categoryLabel = document.createElement('span');
        categoryLabel.setAttribute("class", "column-label");
        categoryLabel.setAttribute("id", name);
        categoryLabel.innerHTML = name;
        categoryLabel.style.fontSize = Math.floor(14/(name.length)**0.12) + "pt"
        return categoryLabel;
    }

    addCategory(name, duration) {
        if (name in this.data) {
            throw "duplicate column name"
        }
        this.data[name] = duration;
        this.ncol += 1;
        this.colsize = Math.min(100, this.chartwidth/this.ncol);
        let newCategory = this.createColumn(name, duration);
        let categoryLabel = this.createLabel(name);
        newCategory.appendChild(categoryLabel);
        newCategory.style.left = 20 + (this.ncol - 1)*110 + "px"
        this.barchart.appendChild(newCategory);
        this.updateCategoryHeights();
        Draggable.create("#" + name,
        {
            "type": "x",
            "bounds": "#graph-container",
            "edgeResistance": 0.8,
            "boxShadow": "rgba(0,0,0,1) 0px 16px 32px 0px"
        });
    }


    xCoordinate(columnId) {
        let column = document.getElementById(columnId)
        console.log(column._gsTransform.x )
        return null
    }
    // resets all orders based on the current position of draggable bar


    // Toggles whether a category is visible or not
    toggleCategoryDisplay(name) {}


}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let b = new BarChart("graph-container", "myplt")

async function demo() {
    b.addCategory("productivity", 10)
    await sleep(1000);
    b.addCategory("sex", 5);
    await sleep(1000);
    b.addCategory("enrichment", 14)
    await sleep(1000);
    b.addCategory("sleep", 11)
}

demo();
