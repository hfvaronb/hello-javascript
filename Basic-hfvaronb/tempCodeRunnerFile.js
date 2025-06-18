class AllBoard {
    constructor(type) {
        this.type = type
    }

    way() {
        console.log("Via de transito")
    }

}

class Land extends AllBoard {

    way() {
        console.log("Transita por tierra")
    }
}

class Air extends AllBoard {

    way() {
        console.log("Transita por el aire")
    }
}

let myTrain = new Land("Bus")
myTrain.way()

let myPlane = new Air("Avión")
myPlane.way()