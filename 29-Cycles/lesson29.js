// 29 Cycles

// ========================= Задача 1 початок ======================
// 1 Подсчитать сумму всех чисел в заданном пользователем диапазоне.
{
  let firstNumber = (Number(prompt('Перше число')));
  let secondNumber = (Number(prompt('Друге число')));

  let a = 0;

  for (let i = firstNumber; i <= secondNumber; i++) {
    a = a + i;
    console.log("i=" + i + " a=" + a)
  }
  console.log('Сума чисел від ' + firstNumber + ' до ' + secondNumber + ' = ' + a);

}
// ************* кінець 
// ========================= Задача 2 початок ======================
// 2 Запросить 2 числа и найти только наибольший общий делитель.
{
  function calculate(f) {
    const  a = f.numerator / f.denominator;
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
  console.log('наибольший общий делитель = '+remainder2); 
  




}
// ************* кінець 

// ========================= Задача 3 початок ======================
// 3 Запросить у пользователя число и вывести все делители этого числа.
{
  const userNumber = (Number(prompt('Введіть число')));

  for (let i = 1; i <= userNumber; i++) {

    const remainder = userNumber % i;

    const result = remainder === 0;

    if (result) {
      console.log(i);
    }
  }
}
// ************* кінець 

// ========================= Задача 4 початок ======================
// 4 Определить количество цифр в введенном числе. 
{
  let userNumber = (Number(prompt('Введіть число')));
  let userNumberStr = String(userNumber);
  let a = userNumberStr.length;
  console.log('Кількість цифр в числі: ' + a)
}
// ************* кінець 


// ========================= Задача 5 початок ======================
// 5 Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
{
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeroNumbers = 0;
  let evenNumbers = 0;
  let oddNumbers = 0;

  for (let i = 1; i <= 10; i++) {

    let userNumbers = (Number(prompt('Введіть число')));

    if (userNumbers === 0) {
      zeroNumbers = zeroNumbers + 1;
    } else if (userNumbers > 0) {
      positiveNumbers = positiveNumbers + 1;
    } else if (userNumbers < 0) {
      negativeNumbers = negativeNumbers + 1;
    }

    if (userNumbers % 2 === 0) {
      evenNumbers = evenNumbers + 1;
    } else {
      oddNumbers = oddNumbers + 1;
    }
  }
  console.log('Кількість чисел більших за нуль: ' + positiveNumbers);
  console.log('Кількість чисел менших за нуль: ' + negativeNumbers);
  console.log('Кількість чисел рівних нулю: ' + zeroNumbers);
  console.log('Кількість парних чисел: ' + evenNumbers);
  console.log('Кількість не парних чисел: ' + oddNumbers);
}
// ************* кінець 


// ========================= Задача 6 початок ======================
// 6 Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.
{

  let result;
  let userResponse;

  for (userResponse = 'Yes'; userResponse == 'Yes'; userResponse = prompt('Повторити операцію? "Yes" / "No"')) {
    let firstNumber = (Number(prompt('Введіть перше число')));
    let secondNumber = (Number(prompt('Введіть друге число')));
    let mathematicalAction = (prompt('Введіть математиную дію "-","+","/","*",'));

    switch (mathematicalAction) {
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
    }
    console.log("Результат обчислення: ", result);
  }
}
// ************* кінець 

// ========================= Задача 7 початок =====================
// 7 Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
{

  const userNumber = prompt('Введіть число');
  const userNumberShift = (Number(prompt('Введіть на скільки цифр зсунути число')));
  const userNumberShiftNormalized = userNumberShift % userNumber.length;

  let a = userNumber.substring(0, userNumberShiftNormalized);
  let b = userNumber.substring(userNumberShiftNormalized);
  let c = b + a;
  console.log(c);
}
// ************* кінець 


// =========================NG  Задача 8 початок =====================
// 8 Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
{
  let currentDay = 'Неділя';
  let isYes ;
  
  for (isYes = true ; isYes == true ; isYes = confirm(`Поточний день ${currentDay}, хочете продовжити?`) ){
          
     
        if(currentDay == 'Понеділок'){
          currentDay = 'Вівторок';
  
        } else if(currentDay == 'Вівторок'){
          currentDay = 'Середа';
        } else if (currentDay == 'Середа') {
          currentDay = 'Четвер';
        } else if (currentDay == 'Четвер') {
          currentDay = "П'ятниця";
        } else if (currentDay == "П'ятниця"){
          currentDay = 'Субота';
        } else if (currentDay == 'Субота') {
          currentDay = 'Неділя';
        } else if (currentDay == 'Неділя') {
          currentDay = 'Понеділок';
        };
  
  };
}
// ************* кінець 

// ========================= Задача 9 початок =====================
// 9 Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
{
  for (let i = 2; i <= 9; i++) {

    for (let j = 1; j <= 10; j++) {

      console.log(j);

      let a = i * j;

      console.log("i=" + i + " j=" + j + ' a=' + a);
    }
  }

}
// ************* кінець 

// ========================= Задача 10 початок =====================
// 10 Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
{ }
// ========================= Задача 10 кінець ======================





// 10 Игра «Угадай число». temp 

// Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
// каждую итерацию цикла делите диапазон чисел пополам, 
   

   
  
  alert('Загадать число от 0 до 100');

  let minN  = 0;
  let maxN = 100;
  let numberOfValues = maxN; 
  console.log('if Yes - numberOfValues start: ' + numberOfValues);   
  let  a = 'Yes';

  let t = 0;

  for (  let i = 0 ; a = 'Yes'; i= prompt(`Ваше чило більше? ${numberOfValues} Yes/No/ItsMyNumber`)   ) {

      numberOfValues = Math.floor((numberOfValues / 2));
      minN =  maxN - numberOfValues + 1;
      maxN =  maxN;
  
      console.log('if Yes - numberOfValues: ' + numberOfValues);     
      console.log('if Yes - minN: ' + minN);
      console.log('if Yes - maxN: ' + maxN);
      console.log('if Yes - numberOfValues after: ' + numberOfValues);  
    
  };
