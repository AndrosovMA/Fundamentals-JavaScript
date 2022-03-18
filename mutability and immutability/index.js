/**
 mutability
 Одним из фундаментальных отличий объектов/массивов от примитивных типов данных является то, что они хранятся и копируются «по ссылке».
 */

let user = {
  name: 'max',
  age: 34,
};
let supermen = user;
supermen.age = 54;

let a = [4, 3, 2];
let b = a;
b[0] = 6;
//console.log(a, b); //[6, 3, 2]

/**
 immutability
 подразумевает копирование объекта перед изменением его свойст с целью не мутировать исходный объект

 JSON.stringify/parse  - работает только с литералом Number, String и Object без функции или свойства Symbol.
 */

//поверхностное копирование spread ...
let user_2 = JSON.parse(JSON.stringify(user)); //
let user_3 = {...user};

//поверхностное копирование через function - используется в концепциях чистых функций
//example 1
let admin = {
  id: '2323-fji1',
  fistName: 'Ivan',
  adress: {
    city: 'Mirny',
    house: 10,
  },
};

function copyObj(obj, city) {
  return {
    ...obj,
    adress: {
      ...obj.adress,
      city: city,
    },
  };
}

let copyAdmin = copyObj(admin, 'Saint');
copyAdmin.fistName = 'Max';
copyAdmin.adress.house = 15;

console.log('Admin ', admin);
console.log('copyAdmin ', copyAdmin);

//example 2 - change title in only copy
let companies = {
  'Max': [{id: 1, title: 'Epam'}, {id: 2, title: 'it-incubator'}],
  'Ivan': [{id: 2, title: 'it-incubator'}],
};

let updateCompanyTitle = (companies, userName, companyId, newTitle) => {
  let companiesCopy = {...companies};
  companiesCopy[userName] = companiesCopy[userName].map(c => c.id === companyId
      ? {...c, title: newTitle} : c);

  return companiesCopy;
};

console.log(updateCompanyTitle(companies, 'Max', 1, 'It-git'));;
console.log(companies);
















