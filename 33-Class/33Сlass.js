if (true) {
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
    console.log(circle1.calculateArea(50))
    console.log(circle1.calculateLength(40))
}
if (false) {
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

        printCharacter(character) {
            if (character === ' ') {
                console.log(`[space] (${this._markerLevel}% left)`);
                return "success";
            }

            if (this._markerLevel >= 0.5) {
                this._markerLevel = this._markerLevel - 0.5;
                console.log(`${character} in ${this._markerColor} (${this._markerLevel}% left)`);
                return "success";
            }

            console.log("(failed, no ink)");
            return "no ink";
        }

        print(str) {
            for (let i = 0; i < str.length; i++) {
                const printStatus = this.printCharacter(str[i]);
                if (printStatus === "no ink") {
                    break;
                }

            }

        }


    }

    const m = new PlainMarker("red", 5);
    m.print("Dmytro Kashchynets");

    class RefillableMarker extends PlainMarker {
        constructor(markerColor, markerLevel) {
            super(markerColor, markerLevel);
        }

        refill(refillLevel) {
            this._markerLevel = this._markerLevel + refillLevel;
            console.log('lvl : ' + this._markerLevel);
        }

    }

    const refillableMarker1 = new RefillableMarker('green', 1);
    refillableMarker1.print('Dmytro Kashchynets')
    refillableMarker1.refill(2);
    refillableMarker1.print('Dmytro Kashchynets')

}

if(false) {
// Завдання 3
// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().
// Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
}