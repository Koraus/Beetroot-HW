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

    // let printFirstUnpurchased = shopList.slice();

    // printFirstUnpurchased.sort(function(left, right) {
    // return left.isPurchased - right.isPurchased; 
    // });
    // console.log(printFirstUnpurchased);
    // console.log(shopList); 
}

// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:

// Распечатка чека на экран;
// Подсчет общей суммы покупки;
// Получение самой дорогой покупки в чеке;
// Подсчет средней стоимости одного товара в чеке.


let list = [{
    'Product name': 1,
    'Number of units': 1,
    'Price per unit': 1,
}, {
    'Product name': 1,
    'Number of units': 1,
    'Price per unit': 1,
}, {
    'Product name': 1,
    'Number of units': 1,
    'Price per unit': 1,
}

]




function printList() { };
function amountPurchases() { };
function mostExpensivePurchase() { };
function averageCost() { };