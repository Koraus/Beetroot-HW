// 1) Реализовать класс, описывающий окружность. В классе должны быть следующие компоненты:
// поле, хранящее радиус окружности;
// get-свойство, возвращающее радиус окружности;
// set-свойство, устанавливающее радиус окружности;
// get-свойство, возвращающее диаметр окружности;
// метод, вычисляющий площадь окружности;
// метод, вычисляющий длину окружности.
// Продемонстрировать работу свойств и методов. 

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
    calculateArea (){
        return  Math.PI * (this._radius ** 2)
    };
    calculateLength (){
        return  Math.PI * 2 * this._radius
    };

}
const circle1 = new Circle(4);
console.log(circle1);
console.log(circle1.radius);
console.log(circle1.diameter);
console.log( circle1.calculateArea() )
console.log( circle1.calculateLength() )