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
    calculateArea() {
        return Math.PI * (this._radius ** 2)
    };
    calculateLength() {
        return Math.PI * 2 * this._radius
    };

}
const circle1 = new Circle(4);
console.log(circle1);
console.log(circle1.radius);
console.log(circle1.diameter);
console.log(circle1.calculateArea())
console.log(circle1.calculateLength())

// 2) Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

// поле, которое хранит цвет маркера;
// поле, которое хранит количество чернил в маркере (в процентах);
// метод для печати (метод принимает строку и выводит текст соответствующим цветом; текст выводится до тех пор, пока в маркере есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

// Продемонстрировать работу написанных методов. 

class PlainMarker {
    constructor(markerColor, markerLevel) {
        this._markerColor = markerColor;
        this._markerLevel = markerLevel;
    }


    inkConsumption(str) {
        let consumption = 0;
        for (i = 0; i < str.length; i++) {
            if (str[i] !== ' ') {
                consumption = consumption + 0.5;
                console.log('v tskl  ' + consumption);
            } else { }
        }
        return consumption;
    }
    prin(strForPrint,markerLevel ) {

        stockForPrinting = markerLevel * 2;
        let printStr;
        let consumption = 0;

        for (i = 0; i < strForPrint.length; i++) {
            if (strForPrint[i] !== ' ') {
                consumption = consumption + 0.5;
                console.log('v tskl  ' + consumption);
            } else { }
        }

        if (strForPrint.length <= stockForPrinting) {
            printStr = strForPrint;
        } else printStr = strForPrint.slice(0, stockForPrinting)

        return printStr;

    }
}



/* 
від того що можу надрукувати  - знайти пробіли к-ть пробілв (numOfSpace)
збільшити значення того що можу надуркувати на к-ть пробілів ()
від збільшеного значення того що можу надрукувати - знайти к-ть пробілів
повторно збільшити значення того що можу друкувати на к-ть пробілів
рекурсія?
/від збільшеного значення того що можу надрукувати - знайти к-ть пробілів
повторно збільшити значення того що можу друкувати на к-ть пробілів/


*/