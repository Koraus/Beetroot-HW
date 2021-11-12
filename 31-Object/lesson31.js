
// 31 -- Об’єкти

// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через 4 часа дороги водителю необходимо делать перерыв на 1 час.

{
    function infoAboutCar(car) {
        console.log(car.manufacturer, car.model, car.yearOfManufacture, car.averageSpeed);
    }

    function timeForTravel(car, distance) {

        const time = distance / car.averageSpeed;
        const timeToStop = time / 4;
        const fullTime = Math.floor(timeToStop) + time;
        return fullTime;
    }

    {
        const car1 = {
            manufacturer: 'Volvo',
            model: 'ХС90',
            yearOfManufacture: 2018,
            averageSpeed: 110,
        };
        const car2 = {
            manufacturer: 'Audi',
            model: 'A6',
            yearOfManufacture: 2010,
            averageSpeed: 320,
        };

        infoAboutCar(car2);

        console.log(timeForTravel(car2, 550));
    }
}


    // 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
    // Функция сложения 2-х объектов-дробей;
    // Функция вычитания 2-х объектов-дробей;
    // Функция умножения 2-х объектов-дробей;
    // Функция деления 2-х объектов-дробей;
    // Функция сокращения объекта-дроби.

    {

        function calculate(f) {
            const a = f.numerator / f.denominator;
            return a;
        };

        function nod(firstNumber, secondNumber) {
            let remainder1 = firstNumber;
            let remainder2 = secondNumber;
            let remainder3 = remainder1 % remainder2;
            while (remainder3 !== 0) {
                remainder1 = remainder2;
                remainder2 = remainder3;
                remainder3 = remainder1 % remainder2;
            }
            return remainder2;
        }


        function normalize(f) {
            const a = nod(f.numerator, f.denominator);
            const b = f.numerator / a;
            const c = f.denominator / a;
            const fNorm = {
                numerator: b,
                denominator: c,
            };
            return fNorm;
        };

        function add(f1, f2) {
            return normalize({
                numerator: (f1.denominator * f2.numerator) + (f2.denominator * f1.numerator),
                denominator: f1.denominator * f2.denominator,
            })
        };

        function subtract(f1, f2) {
            return normalize({
                numerator: (f1.denominator * f2.numerator) - (f2.denominator * f1.numerator),
                denominator: f1.denominator * f2.denominator,
            })
        };

        function multiply(f1, f2) {
            return normalize({
                numerator: f1.numerator * f2.numerator,
                denominator: f1.denominator * f2.denominator,
            })
        };

        function divide(f1, f2) {
            return normalize({
                numerator: f1.numerator * f2.denominator,
                denominator: f1.denominator * f2.numerator,
            })
        };

        {
            const f1 = {
                numerator: 1,
                denominator: 6,
            };
            const f2 = {
                numerator: 8,
                denominator: 12,
            };

            console.log('Функция сложения 2-х объектов-дробей;  add Разультат: ' + add(f1, f2));

            console.log('Функция вычитания 2-х объектов-дробей;  subtract Разультат: ' + subtract(f1, f2));

            console.log('Функция умножения 2-х объектов-дробей;  multiply Разультат: ' + multiply(f1, f2));

            console.log('Функция деления 2-х объектов-дробей; divide Разультат: ' + divide(f1, f2));

            console.log('Функция сокращения объекта-дроби; normalize Разультат: ' + normalize(f1, f2));

        }
    }

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран; 
// Функция изменения времени на переданное количество секунд; 
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
        // Функция вывода времени на экран;
        {
            // Функция вывода времени на экран; 
            function userTime(time) {
                if (time.minute === undefined) {
                    time.minute = 0;
                }
                if (time.second === undefined) {
                    time.second = 0;
                }
                a = time.hour.toString().padStart(2, 0);
                b = time.minute.toString().padStart(2, 0);
                c = time.second.toString().padStart(2, 0);
                return (a + ':' + b + ':' + c);
            };

            //загальний час в секунди
            function userTimeInSecond(time) {
                timeInSecond = (time.hour * 3600) + (time.minute * 60) + time.second;
                return timeInSecond;
            };
            //з секунд в гг   
            function userTimeReturnFromSecond(timeInSecond) {

                hourReturn = Math.floor(timeInSecond / 3600);
                minuteReturn = Math.floor(((timeInSecond % 3600) / 60));
                secondReturn = timeInSecond % 60;

                let a = hourReturn.toString().padStart(2, 0);
                let b = minuteReturn.toString().padStart(2, 0);
                let c = secondReturn.toString().padStart(2, 0);
                return a + ':' + b + ':' + c
            }

            // Функция изменения времени на переданное количество секунд;
            function userUpSeconds(secondTime) {
                const firstTime = userTimeInSecond(time1);
                let sumTime = userTimeInSecond(time1) + secondTime;
                return userTimeReturnFromSecond(sumTime);
            };

            // Функция изменения времени на переданное количество минут;
            function userUpMinutes(secondTime) {
                const firstTime = userTimeInSecond(time1);
                let sumTime = userTimeInSecond(time1) + secondTime * 60;
                return userTimeReturnFromSecond(sumTime);
            };

            // Функция изменения времени на переданное количество часов.      
            function userUpHours(secondTime) {
                const firstTime = userTimeInSecond(time1);
                let sumTime = userTimeInSecond(time1) + secondTime * 3600;
                return userTimeReturnFromSecond(sumTime);
            };

            let time1 = {
                hour: 22,
                minute: 10,
                second: 55,
            }

            const upSec = 6;
            const upMin = 1;
            const upHr = 1;

            console.log('Початковий час ' + userTime(time1))
            console.log('Збільшимо початковий час на ' + upSec + ' sec. отримаємо ' + userUpSeconds(upSec));
            console.log('Збільшимо початковий час на ' + upMin + ' min. отримаємо ' + userUpMinutes(upMin));
            console.log('Збільшимо початковий час на ' + upHr + ' hr. отримаємо ' + userUpHours(upHr));
        }