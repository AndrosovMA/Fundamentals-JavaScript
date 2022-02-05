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
  console.log('f2')
}

//endregion