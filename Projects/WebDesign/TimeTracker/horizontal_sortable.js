console.log("Loaded horizontal_sortable.js!");

// Do I want to have TimeBlocks as a separate class, or should they just be worked
// inside of BarChart?  It's lighter weight to handle it inside of BarChart, but
// it's less of a separation of concerns... hard to say right now
class TimeBlock {
    constructor () {

    }

    // Toggles whether this block is visible in the chart
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
        this.data = {}
        this.maxDuration = null;
    }

    // takes in a duration (integer/double) and returns the height of the bar in px (string)
    durationToHeight(duration) {
        return Math.floor(duration/this.maxDuration*this.chartheight) + "px"
    }
    // Toggles whether the chart DOM element is visible
    toggleChartDisplay() {
        if (this.barchart.style.display == "none") {
            this.barchart.style.display = "flex"
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

    redrawGraph() {
        this.barchart.style.display = 'none'
        this.barchart.style.display = 'flex'
    }

    // Resets the heights to be proportional to the maxDuration
    // Handles whether category heights need to updated or not
    updateCategoryHeights() {
        if (Object.keys(this.data).length > 0) {
        // checks whether the maxDuration has increased
            let curMax = Math.max(...Object.values(this.data))
            if (curMax > this.maxDuration) {
                this.maxDuration = curMax
                console.log("data = " + this.data)
                for (var c in this.data) {
                    console.log("c = " + c)
                    let categoryDiv = document.getElementById(c)
                    categoryDiv.style.height = this.durationToHeight(this.data[c])

                }
            }
        }
    }



    // adds {name: duration} to this.data JSON object
    // creates div element in DOM
    // updates the height of all divs based on the new category
    addCategory(name, duration) {
        this.data[name] = duration
        let newCategory = document.createElement('div')
        newCategory.setAttribute("class", "column")
        newCategory.setAttribute("id", name)
        newCategory.style.height = this.durationToHeight(duration)
        this.barchart.appendChild(newCategory)
        this.updateCategoryHeights()
        Draggable.create("#" + name)
    }

    // Toggles whether a category is visible or not
    toggleCategoryDisplay(name) {}


}
