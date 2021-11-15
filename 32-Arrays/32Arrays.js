// 32 Масиви

// Module code





// User code
{

    // Список покупок

    // Яйця  10 шт  (куплено)
    // Борошно 1 шт (куплено)
    // Сіль 1 шт (не куплено)
    // Перець 5 шт (куплено 3 / 5)
    // Цибуля 4 шт (не куплено)



    const shopList = [{
        product: 'egg',
        amount: 10,
        isPurchased: true,
    }, {
        product: 'Flour',
        amount: 1,
        isPurchased: true,
    }, {
        product: 'Salt',
        amount: 1,
        isPurchased: false,
    }, {
        product: 'Pepperlt',
        amount: 1,
        isPurchased: false,
    }, {
        product: 'Pepperlt',
        amount: 1,
        isPurchased: false,
    }



    ];

    printShopList(shopList);

    //   addItem(shopList, "Salt");
    //   printShopList(shopList);

    //   purchaseItem(shopList, "Salt");
    //   printShopList(shopList);
}