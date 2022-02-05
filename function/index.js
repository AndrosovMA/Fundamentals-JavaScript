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