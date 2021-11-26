class Circle {

    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    get diameter() {
        return this._radius * 2;
       
    }
    // diameter1() {
    //     return this._radius * 2;
    // }
    calculateArea() {
        return Math.PI * (this._radius ** 2)
    };
    calculateLength() {
        return Math.PI * this.diameter
       
    };

}

const myCircle = new Circle (10);
console.log(myCircle.calculateLength())
