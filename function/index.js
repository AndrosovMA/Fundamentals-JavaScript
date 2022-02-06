'use strict'

/*****Function declaration - можно вызывать функцию в любом месте кода, даже до её объявления*********/
//region

function functDeclar() {
  const x = 5;
  const y = 9;
  console.log(x + y);
}

//переопределение функции - кто последний то значение и верно
function reassign() {
  console.log('f1')
}

reassign(); // выведет f2

function reassign() {
  console.log('переопределение функции -', 'f2')
}

//endregion

/**Аргументы функции - arguments - позволяет получать данные аргумента функции в виде подобия массива*/
//region

function getArgument(x, y, z, elem = 50) {
  console.log('Arguments ', arguments);
  return Array.from(arguments).reduce((accum, item) => {
    return accum += item;
  });
}
console.log('sum parameter -', getArgument(5, 7, 8));; //Arguments(3)


//использование rest параметров (остаточные параметры)
function getArgument2(...arg) {
  return arg.reduce((accum, item) => accum += item)
}
console.log('sum rest parameter -', getArgument2(5, 7, 8, 9, 11)); // 40
//endregion *****************

/**Return и возвращаемые значения*********************************************************************/
//region

//**********суммирование значений массива
const arr3 = [[3, 4, 5], [6, 7, 8]];

console.group('return')

function sumArr(arr) {
  let s = 0;
  for (let i = 0; i < arr.length; i++) {
    s += sumArrIn(arr[i]);
  }
  return s;
};

function sumArrIn(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sumArr(arr3)); // данный код можно переписать через рекурсию.


//********** return - перенос строки без () вызывает ошибку;

console.groupEnd();
//endregion ******************

/**Стрелочные функции*********************************************************************************/
//region
console.group('()=>')

// 1 - стрелочные функции позволяют заменить написание ананимных функций
// 2 - this  в стрелочной функциии ссылается на window.
const f1 = (...arg) => {
  console.log('work');
  console.log(arg);
}
f1(10, 20);

console.groupEnd();
//endregion ******************

/**callback function**********************************************************************************/
//region
console.group('callback function')

// 1 - callback - функция, которая передаётся в другую функцию в  качестве аргумента

// 2 - синхронные - код запускается поэтапно
function getUserName(fixFunc) {
  const userName = '  Max ';
  console.log(fixFunc(userName))
}

function fixUserName(str) {
  return str.trim().toLowerCase();
}

getUserName(fixUserName);

// 3 - асинхронные callback функции  - которые работают с асинхронными запросами(функциями)
/*
async function pageLoder(callback) {
 const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
 callback(data);
}
*/
function pageLoder(callback) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => callback(json))
}

function getAjax(data) {
  console.log('запрос послан и принят');
  console.log(data);
}

// pageLoder(getAjax);

// 4 - ад callback функции - большая вложенность что трудно поддерживать код
function pageLoder2() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => {
    console.log('послали запрос на страницу')
    console.log('ответ сервера')
    console.log(json);
    fetch('https://jsonplaceholder.typicode.com/users/' + json.userId)
    .then(response => response.json())
    .then(json => {
      console.log('послали запрос на страницу')
      console.log('ответ сервера')
      console.log(json);
    })
  })
}

// pageLoder2();

// 5 - обход ада callback функции

function pageLoder3(url, callback) {
  fetch(url)
  .then(response => response.json())
  .then(json => callback(json))
}

function getAjax3(data) {
  console.log('запрос послан и принят - обход ад callback');
  console.log(data);
  pageLoder3('https://jsonplaceholder.typicode.com/users/' + data.userId, showUser)
}

function showUser(user) {
  console.log(user);
}

pageLoder3('https://jsonplaceholder.typicode.com/todos/1', getAjax3);


console.groupEnd();
//endregion ******************





