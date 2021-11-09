// ==== Типи даних та оператори ====
  
  
  
  const firstNumber = 5;
    const secondNumber = 8;

    {
        let a = 0;

        for (let i = firstNumber; i <= secondNumber; i++) {
            a = a + i;
            console.log("i=" + i + " a=" + a)
        }
        console.log(a)
    }




const userNumber = 60;

{


  for (let i = 1; i <= userNumber; i++ ){

    const remainder = userNumber % i ;

    const result = remainder === 0;

    if (result) {
      console.log(i);
    }

  }

}
==========================
const userNumber = '123' ;
const userNumberShift = '4';
const userNumberShiftNormalized = userNumberShift % userNumber.length;

let a = userNumber.substring(0, userNumberShiftNormalized );
let b = userNumber.substring(userNumberShiftNormalized );
let c = b + a;
console.log(a, b, c);
============================

let userAnswer = prompt();


for (; userAnswer === 'Yes'; userAnswer = prompt()){

    let a = 4;
    console.log(a);

 };

========================

for ( let i = 2; i <= 9 ; i++) {

    for  (let j = 1; j <= 10; j++) {

       console.log(j);

        let a = i*j;

        console.log("i="+i+ " j="+j +' a='+a);
    }
  }

=========================
