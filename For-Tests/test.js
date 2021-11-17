
// {

//     if (condion) { expreshion1 } else { expreshion2 }

//     if (condion) {
//         expreshion1
//     } else {
//         if (condion) {
//             expreshion1
//         } else {
//             expreshion2
//         }

//     }

//     if (condion) {
//         expreshion1
//     } else {
//         if (condion) {
//             expreshion1
//         } else {
//             expreshion2
//         }
//     }

//     if (condion) {
//         expreshion1
//     } else if (condion) {
//         expreshion1
//     } else {
//         expreshion2
//     }
// }

function rectangleAreaCalculator(length, width){
  
    let  rectanglAarea =  length * width;
    
    if (width = false){
     rectanglAarea = length * length;
    };
    
    return rectanglAarea;
   
  };
  
  console.log(rectangleAreaCalculator(2) , typeof(rectangleAreaCalculator(2)) );





{
    let a;
    let b;
    let n = (b - a) / 2 ;
    n = 50;
   
    let answer = prompt('`Ваше число більше за ${n}, менше  за ${n}, рівне ${n}`');
  
    if (answer == 'рівне'){
      alert('`${n} - Ваше число рівне`');
    } else if ( answer == 'більше'){
      alert('`${n} - Ваше більше`')
    } else if ( answer == 'менше'){
      alert('`${n} - Ваше менше`')
    }
  
  

}





const f1 = function (a, b, c) {
return a + b + c;
}

const f2 = (a, b, c) => {
return a + b + c;
}

const f3 = (a, b, c) => a + b + c;