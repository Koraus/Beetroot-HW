// - 30 Functions - 

// ======= Задача 1 =====
// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
{
    function numberСomparator(n1, n2) {

        if (n1 < n2) {
            return -1;
        }
        if (n1 > n2) {
            return 1;
        }
        return 0;
    const firstNumber = (Number(prompt('Введіть перше число')));
    const secondNumber = (Number(prompt('Введіть друге число')));

    const result = numberСomparator(firstNumber, secondNumber);
    console.log(firstNumber, secondNumber, result);
}
//********** 1 кінць


// ======= Задача 2 =====
// 2. Написать функцию, которая вычисляет факториал переданного ей числа.
{
    function factorial(userNumber) {
        let factorialNumber = 0;
        let n = 1;
        for (let i = 1; i < userNumber + 1; i++) {
            let j = i;
            n = (n) * (j++);
            factorialNumber = n;
            //      console.log('крок : ' + i + ' значення fN : ' + n);
        };
        console.log(factorialNumber);
    };

    factorial(Number(prompt('Введіть число')));

}
//********** 2 кінць

// ======= Задача 3 =====
// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149
{
    function numberGluer(a, b, c) {
        let number;
        ;
        number = String(a) + String(b) + String(c);
        number = Number(number);
        return number;
    }

    console.log(numberGluer(1, 4, 3), typeof (numberGluer(1, 4, 3)));
}
//********** 3 кінць

// ======= Задача 4 =====
// 4. Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
{
    function rectangleAreaCalculator(length, width) {

        let rectanglAarea = length * width;
        if (width == undefined) {
            rectanglAarea = length * length;
        };
        return rectanglAarea;
    };

    console.log('Площадь : ' + rectangleAreaCalculator(4));
}
//********** 4 кінць

//==== Задача 5  
// 5. Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.
{

    function isPerfectNumber(n) {

        let a = 0;

        for (let i = 1; i <= n; i++) {

            const remainder = n % i;

            const result = remainder === 0;

            if (result) {
                a = a + i;
            }
        }
        let g = (a - n) === n;
        return g;
    }


    let userNumber = (Number(prompt('Введіть число')));
    let b = isPerfectNumber(userNumber);

    if (b == true) {
        console.log('Совершенное число');
    } else console.log('Не совершенное число');



}
// ==== Задача 6
// 6 .Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
{

    function isPerfectNumber(n) {

        let a = 0;

        for (let i = 1; i <= n; i++) {
            const remainder = n % i;
            const result = remainder === 0;
            if (result) {
                a = a + i;
            }
        }
        let g = (a - n) === n;
        return g;
    }

    function perfectNumberForRange(firstN, lastN) {

        let lastNRevers;
        if (firstN > lastN) {
            lastNRevers = firstN;
            firstN = lastN
        } else { lastNRevers = lastN }


        for (let i = firstN; i <= lastNRevers; i++) {
            if (isPerfectNumber(i) === true) {
                console.log(i)
            }
        }
    }
    perfectNumberForRange(1, 1000);
}
//=== Задача 7
// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
{
    function userTime(hour, minute, second) {
        if (minute === undefined) {
            minute = 0;
        }
        if (second === undefined) {
            second = 0;
        }
        a = hour.toString().padStart(2, 0);
        b = minute.toString().padStart(2, 0);
        c = second.toString().padStart(2, 0);
        console.log(a + ':' + b + ':' + c);
    }
}
//=== Задача 8
// 8. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
{
    function userTimeInSecond(hour, minute, second) {
        timeInSecond = (hour * 3600) + (minute * 60) + second;
        return timeInSecond;
    }
    console.log(userTimeInSecond(1, 4, 6) + ' c');
}

// 9. Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
{
    function userTimeReturnFromSecond(timeInSecond) {

        hourReturn = Math.floor(timeInSecond / 3600);
        minuteReturn = Math.floor(((timeInSecond % 3600) / 60));
        secondReturn = timeInSecond % 60;

        let a = hourReturn.toString().padStart(2, 0);
        let b = minuteReturn.toString().padStart(2, 0);
        let c = secondReturn.toString().padStart(2, 0);
        return a + ':' + b + ':' + c
    }
    console.log(userTimeReturnFromSecond(4000));
}
// 10. .Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
{
    function userTimeReturnFromSecond(timeInSecond) {

        hourReturn = Math.floor(timeInSecond / 3600);
        minuteReturn = Math.floor(((timeInSecond % 3600) / 60));
        secondReturn = timeInSecond % 60;

        let a = hourReturn.toString().padStart(2, 0);
        let b = minuteReturn.toString().padStart(2, 0);
        let c = secondReturn.toString().padStart(2, 0);
        return a + ':' + b + ':' + c
    }

    function userTimeInSecond(hour, minute, second) {
        timeInSecond = (hour * 3600) + (minute * 60) + second;
        return timeInSecond;
    }

    function CalculatingDateDifference(firstHour, firstMinute, firstSecond, secondHour, secondMinute, secondSecond) {

        let firstDateInSecond = userTimeInSecond(firstHour, firstMinute, firstSecond);


        let secondDateInSecond = userTimeInSecond(secondHour, secondMinute, secondSecond);

        let differenceDateInSecond = secondDateInSecond - firstDateInSecond;

        return userTimeReturnFromSecond(differenceDateInSecond);

    }

    console.log(CalculatingDateDifference(1, 1, 14, 1, 2, 10));
}


