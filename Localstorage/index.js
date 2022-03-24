/** Localstorage - возможность хранения данных в памяти браузера
 * Имеются особенности при работе с TS, React, Redux
 *
 * Срок хранения - пока не очешена память браузера
 *
 * Значения и ключ и значение - string
 *
 * Место применения - хранение данных в корзине покупок
 *
 * */

// запись данных в LocalStorage
localStorage.setItem('name', 'max');


//получение данных из LocalStarage
let itemFromLocalStorage =  localStorage.getItem('name');
console.log(itemFromLocalStorage);


//удалить ключ из LocalStorage
localStorage.removeItem('name');

