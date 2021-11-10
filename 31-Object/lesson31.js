
// 31 -- Об’єкти


// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через 4 часа дороги водителю необходимо делать перерыв на 1 час.

{
    let car = {
        manufacturer: 'Volvo',
        model: 'ХС90',
        yearOfManufacture: 2018,
        averageSpeed: 110,
    }

    function infoAboutCar (){
        console.log(car.manufacturer, car.model, car.yearOfManufacture, car.averageSpeed)
    }

    function timeForTravel (distance, averageSpeed){

            let  time = distance / averageSpeed;
            let  timeToStop = time / 4 ;
            let  fullTime =  Math.floor(timeToStop) + time;
            return fullTime;
    }
  
  console.log(timeForTravel(550, car.averageSpeed));
}






// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// Функция сложения 2-х объектов-дробей;
// Функция вычитания 2-х объектов-дробей;
// Функция умножения 2-х объектов-дробей;
// Функция деления 2-х объектов-дробей;
// Функция сокращения объекта-дроби.

// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран; - userTime
// Функция изменения времени на переданное количество секунд; userTimeInSecond
// Функция изменения времени на переданное количество минут;
// Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

{
    let time = {
        hour: 22,
        minute: 10,
        second: 55,
    }

    function userTime(hour, minute, second){
        if (minute === undefined){
            minute = 0;
        }
        if (second === undefined){
            second = 0;
        }       
        a = hour.toString().padStart(2,0);
        b = minute.toString().padStart(2,0);
        c = second.toString().padStart(2,0);
        console.log(a + ':' + b + ':'+ c)
    }

    function userTimeInSecond(hour, minute, second) {

        timeInSecond = (hour * 3600) + (minute * 60) + second;
        return timeInSecond;

    }

    function userTimeReturnFromSecond(timeInSecond) {

        hourReturn = Math.floor(timeInSecond/3600);
        minuteReturn =  Math.floor( ((timeInSecond % 3600) / 60) ) ;
        secondReturn = timeInSecond % 60 ;
  
       let a = hourReturn.toString().padStart(2,0);
       let b = minuteReturn.toString().padStart(2,0);
       let c = secondReturn.toString().padStart(2,0);
        console.log(a + ':' + b + ':'+ c)

    }

    function userUpSeconds (upSecond ) {
            let sumSecond = userTimeInSecond(0, 1, 11) + upSecond;
             userTimeReturnFromSecond(sumSecond);



    }
}   