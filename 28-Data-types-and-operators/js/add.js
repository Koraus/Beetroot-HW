let a = 'Dmytro';
console.log(a);
function age() {
    if (a === 'JS - вступ') {
        document.querySelector('h1').innerHTML = 'JS - вступ розпочато'
    }
    else {
        (document.querySelector('h1').innerHTML = 'JS - вступ')
    }

}

// ========================= Задача 1 початок =======================
// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
{
    let a = 3;

    if (0 <= a && a <= 2) {
        b = 'ребенок';
    } else if (3 <= a && a < 12) {
        b = 'не указано';
    } else if (12 <= a && a <= 18) {
        b = 'подросток';
    } else if (18 < a && a <= 60) {
        b = 'взрослый';
    } else if (60 < a && a <= Infinity) {
        b = 'пенсионер';
    }
    console.log(b)
}
// ========================= Задача 1 кінець ========================


// ========================= Задача 2 початок =======================
// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
{
    let a = 3;
    let b;
    let specialSymbols = {
        1: '!',
        2: '@',
        3: '#',
        4: '$',
        5: '%',
        6: '^',
        7: '&',
        8: '*',
        9: '(',
        0: ')',
    };

    if (a == 1) {
        b = specialSymbols['1'];
    }

    else if (a == 2) {
        b = specialSymbols['2'];
    }
    else if (a == 3) {
        b = specialSymbols['3'];
    }
    else if (a == 4) {
        b = specialSymbols['4'];
    }
    else if (a == 5) {
        b = specialSymbols['5'];
    }
    else if (a == 6) {
        b = specialSymbols['6'];
    }
    else if (a == 7) {
        b = specialSymbols['7'];
    }
    else if (a == 8) {
        b = specialSymbols['8'];
    }
    else if (a == 9) {
        b = specialSymbols['9'];
    }
    else if (a == 0) {
        b = specialSymbols['0'];
    };
    console.log(b);
}
// ========================= Задача 2  кінець ========================


// ========================= Задача 3 початок  =======================
// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
{
        let a = 110;

        let b;
        let c;

        b = String(a);

        let x = b[0];
        let y = b[1];;
        let z = b[2];;

        console.log(b);
        console.log(x);
        console.log(y);
        console.log(z);

        if (x == y) {
            c = 'Yes';
        }

        else if (x == z) {
            c = 'Yes';
        }
        else if (z == y) {
            c = 'Yes';
        }

        else {
            c = 'No';
        }

        console.log(c);
}
// ========================= Задача 3  кінець ========================


// ========================= Задача 4 початок  =======================
// Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
{
        let year  = 2028; 

        let year400 = year%400;
        let year100 = year%100;
        let year4 = year%4;
        let leapYear;

        if ( year400 === 0 ) {
            leapYear = 'Yes';
        } 
        else if ( year100 !== 0 ) {
            leapYear = 'No';
      }

        else if ( year4 == 0 ) {
              leapYear = 'Yes';
        }
        else {
              leapYear = 'No';
        }
        console.log(leapYear);
}
// ========================= Задача 4 кінець  ========================


// ========================= Задача 5 початок  =======================
// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
{
    const a = prompt('Введіть 5-значне число');
    let b;

    if (a[0] === a[4] && a[1] === a[3]) {
        b = 'Паліндром';
    }
    else { b = 'Не паліндром'; }
    console.log(b);
}
// ========================= Задача 5 кінець  =======================

// ========================= Задача 6 кінець  =======================
// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
{
    const USD = prompt('Сума в USD');

    const currency = prompt('EUR, UAN, AZN');

    const EUR = 1.4;
    const UAN = 4.4;
    const AZN = 3.5;
    let b;

    if (currency === 'EUR') {
        b = Number(USD) * EUR;
    } else if (currency === 'UAN') {
        b = Number(USD) * UAN;
    } else if (currency === 'AZN') {
        b = Number(USD) * AZN;
    }
    console.log(b);
}
// ===== через свіч====
{
        const USD = prompt('Сума в USD');
        const currency = prompt('EUR, UAN, AZN');

        const EUR = 1.4;
        const UAN = 4.4;
        const AZN = 3.5;
        let b;

        switch (currency) {

            case 'EUR':

                b = Number(USD) * EUR;
                break;

            case 'UAN':
                b = Number(USD) * UAN;
                break;

            case 'AZN':
                b = Number(USD) * AZN;
                break;
        }
        console.log(b);
}
// ========================= Задача 6 кінець  ========================



// ========================= Задача 7 початок  ========================
// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
{
    let paymentAmount = (Number(prompt('Сума покупок')));
    let b;

      if (200 <= paymentAmount && paymentAmount <= 300){
            b = 'Скидка 3%';
      }

      else if  (301 <= paymentAmount && paymentAmount <= 500) {
            b = 'Скидка 5%';
        }


      else if ( 501 <= paymentAmount && paymentAmount <= Infinity){
            b = 'Скидка 7%';
      }
    console.log(b);
}
// ========================= Задача 7 кінець  =========================



// ========================= Задача 8 початок  ========================
// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.

{


    // const circleLengthInput = prompt('длина окружности');
    // const circleLength = Number(circleLengthInput);

    // const diameterOfTheCircle = circleLength / Math.PI;

    // const perimeterOfTheSquareInput = prompt('периметр квадрата');
    // const perimeterOfTheSquare = Number(perimeterOfTheSquareInput);

    // const sideOfTheSquare = perimeterOfTheSquare / 4;

    // let result;

    // if (diameterOfTheCircle <= sideOfTheSquare) {
    //     result = 'может поместиться в указанный квадрат';
    // }
    // else
    //     result = 'не может поместиться в указанный квадрат';

    // console.log(result);
}
// ========================= Задача 8 кінець  =========================


// ========================= Задача 9 початок  ========================
// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
{
    
        let scoreСounter = 0;

        let question1;
        question1 = prompt('Ялинки: 1.Зелені; 2.Рожеві; 3.Жовті;')

        if (question1 == 1) {
            scoreСounter = scoreСounter + 2;
        }
        else if (question1 == 2) {
            scoreСounter = scoreСounter + 0;
        }
        else if (question1 == 3) {
            scoreСounter = scoreСounter + 0;
        }

        let question2;
        question2 = prompt('Небо: 1.Черовне; 2.Зелене; 3.Блакитне')

        if (question2 == 1) {
            scoreСounter = scoreСounter + 0;
        }
        else if (question2 == 2) {
            scoreСounter = scoreСounter + 0;
        }
        else if (question2 == 3) {
            scoreСounter = scoreСounter + 2;
        }

        let question3;
        question3 = prompt('Прискорення вільного падіння,  м/с2 : 1."9,8"; 2."15"; 3. "9800"')

        if (question3 == 1) {
            scoreСounter = scoreСounter + 2;
        }
        else if (question3 == 2) {
            scoreСounter = scoreСounter + 0;
        }
        else if (question3 == 3) {
            scoreСounter = scoreСounter + 0;
        }

        console.log(scoreСounter);
    
}
// ========================= Задача 9 кінець  =========================



// ========================= Задача 10 початок  ========================
// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.

{
   let days = (Number(prompt('Введіть дні')));
    let month = (Number(prompt('Введіть місяць')));
    let year = (Number(prompt('Введіть рік')));
    
    let daysOfMonth; 

    let year400 = year % 400;
    let year100 = year % 100;
    let year4 = year % 4;
    let leapYear;


    if (year400 == 0) {
        leapYear = true;
    }
    else if (year100 == 0) {
        leapYear = false;
    }

    else if (year4 == 0) {
        leapYear = true;
    }
    else {
        leapYear = false;
    }

        if ( month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12  ) {
            daysOfMonth = 31;

        } else if (month == 2) {
            if (leapYear == true) {
                daysOfMonth = 29;
            } else {
                daysOfMonth = 28;
            }
        } else {
            daysOfMonth = 30;
        };

        let date = ' День: ' + days + ' Місяць: ' + month + ' Рік: ' +  year ;
        console.log(date);

        let nextDays = days;
        let nextmonth = month;
        let nextyear = year;

        if (daysOfMonth > days) {
            nextDays = days + 1;
          
        } else if (daysOfMonth == days && month < 12 ) {
            nextDays = 1;
            nextmonth = month +1;
          
          
        } else if (daysOfMonth == days && month == 12 ){
             nextDays = 1;
             nextmonth = 1;
             nextyear = year +1;
          }   

     

        let nextDate = 'Наступна дата:' +  ' День: ' + nextDays + ' Місяць: ' + nextmonth + ' Рік: ' +  nextyear ;
        console.log(nextDate);

}
// ========================= Задача 10 кінець  ==========================