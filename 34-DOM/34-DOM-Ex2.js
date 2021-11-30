// Створити HTML-сторінку з кнопкою "Відкрити" 
// і модальним вікном. 
//На модальном вікні повинен бути текст і кнопка "Закрити". 
//Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

let btnEx = document.getElementById('closeModal');

btnEx.onclick = function () { 
    document.querySelector('.modal-window').style = 'display: none;'
}

let btnOpn = document.getElementById('openModal');

btnOpn.onclick = function (){
    document.querySelector('.modal-window').style = `display: block;`
}