
let barplotData = '{"productivity": 12, "sex": 10, "personal": 14}'
const data = JSON.parse(barplotData);


class barPlot {
    constructor(pltID, width="400px", height="400px", parentElement=null) {
        this.pltID = pltID;
        this.data = {};
        var barPlotWrapper = Document.createElement("div");
        var barPlotInternal = Document.createElement("div");
        barPlotWrapper.className = "bar-plot-wrapper";
        barPlotWrapper.id = pltID;
        barPlotInternal.className = "bar-plot-internal";
    }
    // adds a bar to the existing chart
    addBar(catName, duration) {
        this.data[catName] = duration;
        return null;
    }
    // hides a bar on the existing chart, but does not delete it
    hideBar(catName) {
        return null;
    }
    // shows a hidden bar if it is in the chart
    showBar(catName) {

    }
    // removes a bar from the current chart
    removeBar(catName) {
        return null;
    }
    // adds all bars specified in the JSON input data
    plotData(data) {
        for ()
    }
    // returns the list of categories
    categories() {
        return Object.keys(this.data)
    }

    updateOrder(){

    }
}
