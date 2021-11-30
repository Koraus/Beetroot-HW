
// const arr = [
//     'st', 'str', 'dsd', 'sdsds', 'dsdadhanihjagd dajsghdakhgs ', '', ',', [1]
// ];
// let arrFilered = arr.filter( a =>  a.length > 5);
// console.log(arrFilered)

// // console.log(arrFilered)
// // let s = [];
// // for (i = 0; i < arr.length; i++  ){

// //     const a = arr[i]

// //    if (a[0] == 's') {
// //        s.push(a);
// //    } 

// // }
// // console.log(s)

// function myFilter (array, fn){
//     const filteredArray = [];
//     for (i = 0; i < array.length; i++){

//         if (fn(array[i])){
//             filteredArray.push(array[i]);
//         }
//     }
//     return filteredArray;
// }


// let arrFilered1 = myFilter(arr, a =>  a.length > 5);
// console.log(arrFilered1)


// const a2 = [4, 5, 6];
// console.log(a2.map(a => a * 2));

// function myMap (array, fn){
//     const filteredArray = [];
//     for (const a of array) {

//         filteredArray.push(fn(a));

//     }
//     return filteredArray;
// }

// console.log(myMap(a2, a => a * 2));



// const arr5 = ['dd', 'erwcs', '23wes', 'de232d', 'daawnt', 'x3wvd', 'ge45'];

// function groupBy(array, keyFn) {
//     // ...
// }

// const res5 = groupBy(arr5, a => a[0])

// const res5Check = {
//     'd': ['dd', 'de232d', 'daawnt'],
//     'e': ['erwcs'],
//     '2': ['23wes'],
//     'x': ['x3wvd'],
//     'g': ['ge45']
// }

// Масив всіх перших літер 
// Масив з якого забрали всі повтори - arrПершихЛітер
// Новий масив в який arrПершихЛітер[i] формує нові масиви 

const arr5 = ['dd', 'erwcs', '23wes', 'de232d', 'daawnt', 'x3wvd', 'ge45'];

function fn(arr) {
    let arrOfFirstSimbols = []; // масив для акумулювання перших літер з вхідного масиву
    let arrOfUnicSimbols = [];// масив для акумулювання унікальних перших літер з масиву перших літер

    for (i = 0; i < arr.length; i++) { // цикл для перебору вхідного масиву

        arrOfFirstSimbols.push(arr[i][0]); // вибірка перших літер з вхідного масиву в новий масив (Сформував масив з перших літер елементів вхідного масиву)
    };

    // for (let i = 0; i < arrOfFirstSimbols.length; i++) { // цикл для перебору  масиву перших літер

        for (let j = 0; j < arrOfFirstSimbols.length; j++) {// цикл для перебору  масиву перших літер

            let tempSimbols = arrOfFirstSimbols.pop(); // присвоєння в змінну останнього елементу масиву з першими літерми

            // if(arrOfFirstSimbols.length >= 1){ // умова на випадок якщо pop не може "забрати" [0] елемент
                
                if (tempSimbols != arrOfFirstSimbols[j]) {  // потрібно ще відфільтровані перевіряти? бо цього символа вже нема в вхіднму масиві через .pop але він вже є в вихідному
                
                    for(let k = 0; k < arrOfUnicSimbols.length; k++  ) { // цикл для перебору масиву унікальних символів 

                        if (tempSimbols != arrOfUnicSimbols[k]){ // перевірка чи в масиві нових симовлів нема такого символу, якщо нема - запушити

                        arrOfUnicSimbols.push(tempSimbols);

                        } else {};
                    } 

                } else {};
                
            // } else {}
            //  if (tempSimbols != arrOfFirstSimbols[0]) {
            //     arrOfUnicSimbols.push(tempSimbols)
            // }

        }

       
    // }
    console.log(arrOfUnicSimbols)


    // return arrOfUnicSimbols;
};

fn(arr5);


// Object.keys() Возвращает массив, содержащий имена всех собственных перечислимых свойств переданного объекта.

// const res5 = groupBy(arr5, a => a[0]) ;




// if('0'){
//     console.log(0);
// }
// console.log(Boolean('0'))

// function a (){
//     let a = 10;
//     let b = '22'
//     return ;
// }
// console.log(a())

// let agd= {
//     a: 4,
// }
// console.log(agd.adr)

