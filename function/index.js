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

// 6  -

//endregion ******************

/**Контекст и функции. Замена контекста, bind, call, apply. Частичные функции и вычисления************/
//region
console.group('контекст и this')
// Контекст - область видимости + переменная this

//1 - this - ссылка на объект, который вызывает код в данный момент (не работает со стрелочной функцией)

let count = 0;

function f1_3() {
  console.log(count);
  console.log(this); //window
  // this.textContent = count;
  count++;
}

f1_3()

function f2_3() {
  console.log(count);
  console.log(this);
  this.textContent = count;
  count++;
}

document.querySelector('.contex_4').addEventListener('click', f2_3);

//2 - смена контекста с помощью call - позволяет вызывать функцию и передавать её необходимые аргументы и подменять контекст при запуске

let count3 = 0

function f3_3(count) {
  console.log(this);
  this.textContent = count3;
  count3++;
}

document.querySelector('.contex_5').addEventListener('click', () => {
  f3_3.call(document.querySelector('.contex_51'), count3);
});

//3 - смена контекста с помощью apply - в отличие от call может в качестве аргументов принимать массив данных [], если много аргументов, то apply удобней

//4 - bind - привязка контекста
let count4 = 0;

function f3_4() {
  console.log(this);
  this.textContent = count4;
  count4++;
}

const funcBind = f3_4.bind(document.querySelector('.contex_61'));
document.querySelector('.contex_6').addEventListener('click', funcBind);

//5 - частичные функции или функции с переопределенным аргументов (частичные вычисления)
function sum5(a, b, c) {
  console.log(arguments);
  this.innerHTML = a + b + c;
}

const sum51 = sum5.bind(document.querySelector('.contex_71'), 10); //добавился аргумент и заменяет ...

document.querySelector('.contex_7').addEventListener('click', () => {
  sum51(3, 4, 5);
});

//6 - вытягивание методов
const validate = {
  password: 'hima',
  email: 'pik@de',
  isValid: false,
  sayHi() {
    console.log(this);
    return (this.password.length > 6) ? true : false;

    //можно записать в более привычной форме
    //sayHi: function(){
    //      console.log(this);
    //      eturn (this.password.length > 6) ? true : false;
    //}
  }
}
console.log(validate.sayHi()); //false
// ? можно ли заимствовать метод sayHi по своему усмотрению - можно

const obj6 = {password: 'hellowww'};
const validatePassword = validate.sayHi.bind(obj6);
console.log(validatePassword()); //true
obj6.password = '123';
console.log(validatePassword()); //true


console.groupEnd();
//endregion ******************

/**Function Expression VS Function declaration. Особенности объявления функций***********************/
//region
console.group('Function Expression VS Function declaration')

// 1 - Function declaration
// 1.1 JS интерпритатор поднимать данные функции при запуске документа - т.е. можно вызывать до объявления


// 2 - Function Expression


console.groupEnd();
//endregion ******************

/**Pure, impure, функции высшего порядка. Side эффекты***********************************************/
//region
console.group('Pure, impure, функции высшего порядка')

// 1 - чистые функции - функции которые возвращают значения зависящие только от входящих аргументов или параметров, при этом всегда один и тот же рузультат
//позволяет потенциально уменьшить кол-во багав
function squad(n) {
  return n ** 2;
}

console.log(squad(4));
console.log(squad(4));


// 2 - side effect -когда  функция изменяет состояние вне своего собственного контекста, то рузультат является side effect- не чистые функции
// примеры API, изменение с DOM, alert, диалоговое окно


// 3 - функции высшего порядка - функция которая может принять в качестве аргумента функцию и возратить какую либо функцию
//функции в js являются своего рода объектами
//функцией можно манипулировать как объектом

function hellow() {
  console.log('hi');
}

hellow.hi = 123;

console.log(hellow.hi); //123
console.log(hellow()); //undefined


// пример №1 - функции высшего порядка

const userFunc = {
  age: 19,
  password: 'qwert123',
  agreeToTern: true
}

function checkAge(user) {
  return user.age > 18;
}

function checkPassword(user) {
  return user.password.length >= 6;
}

function checkAgreeToTern(user) {
  return user.agreeToTern === false;
}

//напишем вспомогательную функ. которая будет принимать данные функции в качестве аргумента
/*
function validateFunc(obj, ...tests){
    for (let i = 0; i < tests.length; i++) {
        if (tests[i](obj) === false) return false;
    }
    return true;
}
console.log('пример функции высш порядка №1: ', validateFunc(userFunc, checkAge, checkPassword, checkAgreeToTern ));
*/


// изменим вспомогательную функцию для обработки нескольких пользователей и разных валидаций
function createValidator(...tests) {
  return function (obj) {
    for (let i = 0; i < tests.length; i++) {
      if (tests[i](obj) === false) return false;
    }
    return true;
  }
}

const validator1 = createValidator(checkAge, checkPassword, checkAgreeToTern);
const validator2 = createValidator(checkAge, checkPassword);
console.log('пример функции высш порядка №1: ', validator1(userFunc), validator2(userFunc));


console.groupEnd();
//endregion ******************

/**Рекурсия******************************************************************************************/
//region
console.group('Рекурсия')

// 1 - большую часть задать которые реализованы через рекурсию можно решить циклом - так же и обратно
// перебор объектов с помощью рекурсии

// задача №1 - вывести все фамилии родителей
const users = {
  'ivanov': {
    age: 25,
    parent: {
      'ivanov-a': {
        age: 45,
      },
      'ivanov-b': {
        age: 43,
        parent: {
          'sergeev-a': {
            age: 88,
            'parent': {
              'lionenko': {}
            }
          }
        }
      }
    }
  },
  'kostenko': {
    age: 56,
    parent: {
      'ignatenko': {},
      'snezko': {
        age: 45
      }
    }
  },
}

function userParamsRecursion(obj) {
  if (obj.parent !== undefined) {
    for (let key in obj.parent) {
      console.log(key);
      userParamsRecursion(obj.parent[key]);
    }
  }
}

for (let key in users) {
  userParamsRecursion(users[key]);
}

// задача №2 - вычисляем факториал = произведение чисел 1 * 2 * 3 *5
function fact1(n) {
  let s = 1;
  for (let i = 1; i <= n; i++) {
    s = s * i;
  }
  console.log('факториал равен: ', s);
}

fact1(3);

//расчет факторилала через рекурсию
let s1 = 1;

function fact2(n) {
  if (n === 0) return;
  s1 = s1 * n;
  fact2(n - 1);
}

fact2(3);
console.log('факториал равен: ', s1);


console.groupEnd();
//endregion ******************

/**Замыкания******************************************************************************************/
//region
console.group('Замыкания')

// 1 - счетчик на замыкании

function createStep() {
  let counter = 0;
  return function () {
    counter++;
    console.log(counter);
  }
}

let step = createStep();
step();
step();




let aaa = (function () {
  let counter = 0;

  return function () {
    counter++;
    console.log(counter);
  };
})();

aaa();
aaa();



console.groupEnd();
//endregion ******************






