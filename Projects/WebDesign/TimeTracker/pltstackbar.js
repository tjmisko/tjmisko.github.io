
class TimeBlock {
    constructor(startDT, endDT, title, description = "") {
        this.startDT = startDT;
        this.timeBlockID = startDT.toString();
        this.endDT = endDT
        this.duration = (endDT - startDT)/60000;
        this.title = title;
        this.description = description;
    }
    // Creates a block element with the appropriate height to represent
    // the timeBlock in the graph
    displayTimeBlock(categoryID){
        return null;
    }

    static constructTimeBlockFromDuration(startDT, duration, title, categoryID, description="") {
        return new TimeBlock(startDT, new Date(startDT + duration*60000), title, categoryID);
    }

}

class Category {
    constructor(categoryID) {
        this.categoryID = categoryID;
        this.blockMap = new Map();
    }
    // Creates the div in the appropriate graph
    displayCategory(graphID) {
        return null;
    }

    addTimeBlock(startDT, endDT, title, description = "") {
        let newTimeBlock = new TimeBlock(startDT, endDT, title, description);
        let newTimeBlockID = newTimeBlock.timeBlockID;
        this.blockMap.set(newTimeBlockID, newTimeBlock);
    }
}

class StackBar {
    // Constructs the StackBar Graph Object
    constructor(graphID) {
        this.graphID;
        this.categoryMap = new Map();
    }
    // Adds a category to category Map
    addCategory(categoryID) {
        let newCategory = new Category(categoryID);
        this.categoryMap.set(categoryID, newCategory);
    }
    // Returns the category with the given ID from the Category Map
    getCategory(categoryID) {
        return this.categoryMap.get(categoryID);
    }

    // Returns an array containing the names of the categories
    getCategoryNames() {
        return Array.from(this.categoryMap.keys());
    }

    // Adds a timeblock to the given category
    addTimeBlock(categoryID, startDT, endDT, title, description) {
        this.categoryMap.get(categoryID).addTimeBlock(startDT, endDT, title, description);
    }

    //
    displayGraph() {
        return null;
    }
}

let graph = new StackBar("plt");
graph.addCategory("productivity");
graph.addCategory("sleep");
graph.addTimeBlock("sleep", Date("2022-10-17T23:00:00"), Date("2022-10-18T08:00:00"), "sleep", "slept well")
