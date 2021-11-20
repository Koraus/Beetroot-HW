// 32 Масиви


// 1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

// Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
// Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.
// Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
{

    // виведення в спсиок спочатку некуплених
    let shoppingСart = shopList.slice();
    addItem(shoppingСart, 'Salt');
    console.log(shoppingСart)
    addItem(shoppingСart, 'Tomato');
    console.log(shoppingСart)

    // Добавление покупки в список.

    function addItem(list, item) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].product == item) {
                list[i].amount = list[i].amount + 1;
                return list[i];
            }
        }
        list.push({
            product: item,
            amount: 1,
            isPurchased: false,
        });
        return list[list.length - 1];

    }

    // Купити всі продукти в корзині
    function BuyItems(list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].product !== true) {
                list[i].isPurchased = true;

            }
        }
    }
    {
        const shopList = [{
            product: 'egg',
            amount: 10,
            isPurchased: false,
        }, {
            product: 'Flour',
            amount: 1,
            isPurchased: true,
        }, {
            product: 'Salt',
            amount: 1,
            isPurchased: true,
        }, {
            product: 'Pepperlt',
            amount: 2,
            isPurchased: false,
        }, {
            product: 'Onion',
            amount: 4,
            isPurchased: false,
        }
        ];

    }

    let printFirstUnpurchased = shopList.slice();

    printFirstUnpurchased.sort(function(left, right) {
    return left.isPurchased - right.isPurchased; 
    });
    console.log(printFirstUnpurchased);
    console.log(shopList); 
}

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.

{
let list = [{
    'Product name': 'Portable SSD T7 1TB USB 3.2 Type-C',
    'Number of units': 1,
    'Price per unit': 4399,
}, {
    'Product name': 'Dudao F9 Silver (AI-DudaoF9)',
    'Number of units': 2,
    'Price per unit': 999,
}, {
    'Product name': 'DataFlash (DF1624)',
    'Number of units': 4,
    'Price per unit': 292,
}
]



// Распечатка чека на экран;
function printList(a) {
    let sum;
    let printsList = a.map(a =>
        a['Product name'] + ' ' +
        a['Number of units'] + ' ' +
        a['Price per unit'] + ' UAH');
    return printsList;

};
{ console.log(printList(list)); }

// Подсчет общей суммы покупки;

function amountPurchases(a) {
    let sum = 0;
    let amountPurchases = a.map(a =>
        a['Price per unit']);
    let numberOfunits = a.map(a =>
        a['Number of units']);
    for (i = 0; i <= amountPurchases.length - 1; i++) {
        sum = sum + (amountPurchases[i] * numberOfunits[i]);

    };
    return sum;
};
{ console.log(' Загальна сума покупки : ' + amountPurchases(list)); }


// Получение самой дорогой покупки в чеке;
function mostExpensivePurchase(a) {

    let sumPriceForAmount = [];
    let sum = 0;
    let amountPurchases = a.map(a =>
        a['Price per unit']);
    let numberOfunits = a.map(a =>
        a['Number of units']);

    for (i = 0; i <= amountPurchases.length - 1; i++) {
        sum = (amountPurchases[i] * numberOfunits[i]);
        sumPriceForAmount.push(sum);
    };

    function compareNumbers(a, b) {
        return b - a;
    }
    sumPriceForAmount.sort(compareNumbers);
    return sumPriceForAmount[0];
};


{ console.log(' Найвища ціна за товар : ' + mostExpensivePurchase(list)); }

function averageCost(a) {
    
    let sum = 0;
    let sumNumberOfunits = 0;
        let amountPurchases = a.map(a =>
            a['Price per unit']);
        let numberOfunits = a.map(a =>
            a['Number of units']);
        for (i = 0; i <= amountPurchases.length - 1; i++) {
            sum = sum + (amountPurchases[i] * numberOfunits[i]);
            sumNumberOfunits = sumNumberOfunits + numberOfunits[i];
        };
      
        return Math.floor(sum / sumNumberOfunits);
      
    };
    
                                 
     {console.log(' середня ціна за 1 позицію в чеку : ' + averageCost(list));}

}

// 3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.


// 4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^

// Вывод на экран всех аудиторий;
// Вывод на экран аудиторий для указанного факультета;
// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
// Функция сортировки аудиторий по количеству мест;
// Функция сортировки аудиторий по названию (по алфавиту).

let auditorium = [
{  
    'name of seats' : 'Physical',
    'number of seats' : 15,
    'names of faculties' : 'VPI',

},{
    'name of seats' : 'Chemically',
    'number of seats' : 20,
    'names of faculties' : 'XTF',
}, {
    'name of seats' : 'Practical',
    'number of seats' : 17,
    'names of faculties' : 'MMI',
},
];


let groupCT11 = {
    
        'Group name' : 'CT-11',
        'Number of students' : 12,
        'Names of faculties' : 'VPI',
    };


//     , {
//         'Group name' : 'MT-11',
//         'Number of students' : 18,
//         'Names of faculties' : 'XTF',
//     },{
//         'Group name' : 'CM-21',
//         'Number of students' : 6,
//         'Names of faculties' : 'MMI',
//     }




// Вывод на экран всех аудиторий;
function printAuditorium (){};
function printAuditorium(a) {
    let printsList = a.map(a =>
       '\n' + ' Назва аудиторії :' + a['name of seats'] + '\n' +
       '\n' + ' Кількість студентів які може вміситити аудиторія :'  +   a['number of seats'] + '\n'  +
       '\n' + ' Назва факультету :' +  a['names of faculties'] + '\n');
    return printsList;

};

{ console.log(printAuditorium(auditorium)); }



// Вывод на экран аудиторий для указанного факультета;
function printAuditoriumOfFaculties(a, strName) {

    let printsList = a.filter(a =>  a['names of faculties'] == strName )
       return printsList;
};

{console.log(printAuditoriumOfFaculties(auditorium, 'XTF') )}

// Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
function printIsAuditoriumForGroup (auditoriums, group){
    let printsList = auditoriums.filter(auditorium =>  auditorium[ 'number of seats'] > group['Number of students'] )
    return printsList;
};
let as = printIsAuditoriumForGroup(auditorium, groupCT11 );
console.log(as)


// Функция сортировки аудиторий по количеству мест;
function sortingByNumberOfSeats (){};


// Функция сортировки аудиторий по названию (по алфавиту).
function sortingByName  (){};
