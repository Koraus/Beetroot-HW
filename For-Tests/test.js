
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