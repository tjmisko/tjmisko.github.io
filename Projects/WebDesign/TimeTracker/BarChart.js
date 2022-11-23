console.log("Loaded BarChart.js!");

// Do I want to have TimeBlocks as a separate class, or should they just be worked
// inside of BarChart?  It's lighter weight to handle it inside of BarChart, but
// it's less of a separation of concerns... hard to say right now


class BarChart {
    // Creates a new barchart div
    // Initializes a new JSON data map of column name keys and duration values
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
    }

    // takes in a duration (integer/double) and returns the height of the bar in px (string)
    durationToHeight(duration) {
        return Math.floor(duration/this.maxDuration*this.chartheight) + "px"
    }

    // selects a column width (in px) based on the current number of columns
    resizeWidth(){
        return this.chartwidth/this.ncol - 15 + "px"
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
    // Handles whether column heights need to updated or not
    resizeAllColumns() {
        if (Object.keys(this.data).length > 0) {
            // checks whether the maxDuration has increased (only updates heights when necessary)
            let curMax = Math.max(...Object.values(this.data))
            let updatedMax = false;
            if (curMax > this.maxDuration) {
                console.log("updated the maxDuration from " + this.maxDuration + " to " + curMax)
                this.maxDuration = curMax
                updatedMax = true;
            }
            for (var c in this.data) {
                let column = document.getElementById(c)
                column.style.width = this.resizeWidth()
                if (updatedMax) {
                    column.style.height = this.durationToHeight(this.data[c])
                }


            }
        }
    }

    // creates the HTML
    createColumn(name, duration) {
        let newColumn = document.createElement('div');
        newColumn.setAttribute("class", "column");
        newColumn.setAttribute("id", name);
        newColumn.style.height = this.durationToHeight(duration);
        newColumn.style.width = this.colsize + "px";
        return newColumn
    }

    createLabel(name) {
        let columnLabel = document.createElement('span');
        columnLabel.setAttribute("class", "column-label");
        columnLabel.setAttribute("id", name);
        columnLabel.innerHTML = name;
        columnLabel.style.fontSize = Math.floor(14/(name.length)**0.2) + "pt"
        return columnLabel;
    }

    // adds {name: duration} to this.data JSON object
    // creates div element in DOM
    // updates the height and width of all columns based on the new column
    addColumn(name, duration) {
        if (name in this.data) {
            throw "duplicate column name"
        }
        this.data[name] = duration;
        this.ncol += 1;
        let newColumn = this.createColumn(name, duration);
        let columnLabel = this.createLabel(name);
        newColumn.appendChild(columnLabel);
        // newColumn.style.left = 20 + (this.ncol - 1)*110 + "px"
        this.barchart.appendChild(newColumn);
        this.makeSortable();
        this.resizeAllColumns();
    }

    // Toggles whether a column is visible or not
    toggleColumnDisplay(name) {
        let column = document.getElementById(name);
        if (column.style.display != "none") {
            column.style.display = "none";
        } else {
            column.style.display = "block";
        }
    }

    makeSortable(){
        var colSize   = b.chartwidth/b.ncol; // => container height / number of items
        var container = b.barchart;
        var listItems = Array.from(document.querySelectorAll(".column")); // Array of elements
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

          var dragger = new Draggable(element, {
            onDragStart: downAction,
            onRelease: upAction,
            onDrag: dragAction,
            type: "x",
            bounds: b.barchart,
            edgeResistance: 0.8
          });

          // Public properties and methods
          var sortable = {
            dragger:  dragger,
            element:  element,
            index:    index,
            setIndex: setIndex
          };

          TweenLite.set(element, { x: index * colSize });

          function setIndex(index) {

            sortable.index = index;

            // Don't layout if you're dragging
            if (!dragger.isDragging) layout();
          }

          function downAction() {
            this.update();
          }

          function dragAction() {

            // Calculate the current index based on element's position
            var index = clamp(Math.round(this.x / colSize), 0, total - 1);

            if (index !== sortable.index) {
              console.log("switched position");
              changeIndex(sortable, index);
            }
          }

          function upAction() {
            layout();
          }

          function layout() {
            TweenLite.to(element, 0.25, { x: sortable.index * colSize });
          }

          return sortable;
        }
    }

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let b = new BarChart("graph-container", "myplt")

async function demo() {
    b.addColumn("productivity", 10);
    b.addColumn("sex", 5);
    b.addColumn("enrichment", 14);
    b.addColumn("sleep", 11);
    await sleep(1000);
}

demo();


TweenLite.to(b.barchart, 1, {autoAlpha: 1});

// var colSize   = b.chartwidth/b.ncol; // => container height / number of items
// var container = b.barchart;
// var listItems = Array.from(document.querySelectorAll(".column")); // Array of elements
// var sortables = listItems.map(Sortable); // Array of sortables
// var total     = sortables.length;
//
// function changeIndex(item, to) {
//
//   // Change position in array
//   arrayMove(sortables, item.index, to);
//
//   // Change element's position in DOM. Not always necessary. Just showing how.
//   if (to === total - 1) {
//     container.appendChild(item.element);
//   } else {
//     var i = item.index > to ? to : to + 1;
//     container.insertBefore(item.element, container.children[i]);
//   }
//
//   // Set index for each sortable
//   sortables.forEach((sortable, index) => sortable.setIndex(index));
// }
//
// function Sortable(element, index) {
//
//   var dragger = new Draggable(element, {
//     onDragStart: downAction,
//     onRelease: upAction,
//     onDrag: dragAction,
//     type: "x",
//     bounds: b.barchart,
//     edgeResistance: 0.8
//   });
//
//   // Public properties and methods
//   var sortable = {
//     dragger:  dragger,
//     element:  element,
//     index:    index,
//     setIndex: setIndex
//   };
//
//   TweenLite.set(element, { x: index * colSize });
//
//   function setIndex(index) {
//
//     sortable.index = index;
//
//     // Don't layout if you're dragging
//     if (!dragger.isDragging) layout();
//   }
//
//   function downAction() {
//     this.update();
//   }
//
//   function dragAction() {
//
//     // Calculate the current index based on element's position
//     var index = clamp(Math.round(this.x / colSize), 0, total - 1);
//
//     if (index !== sortable.index) {
//       console.log("switched position");
//       changeIndex(sortable, index);
//     }
//   }
//
//   function upAction() {
//     layout();
//   }
//
//   function layout() {
//     TweenLite.to(element, 0.5, { x: sortable.index * colSize });
//   }
//
//   return sortable;
// }

// Changes an elements's position in array
function arrayMove(array, from, to) {
  array.splice(to, 0, array.splice(from, 1)[0]);
}

// Clamps a value to a min/max
function clamp(value, a, b) {
  return value < a ? a : (value > b ? b : value);
}
