// promise появились для того что бы упрастить работу с асинхронными операциями и избежать ада callback (большая вложенность)
// используются для получения данных с сервера

// пример кода без получения данных с сервера
//итого получилось две вложенности
/*
console.log('Request data...');

setTimeout(() => {
  console.log('Preparing data');
  const backendData = {
    server: 'aws',
    port: 2000,
    status: 'working',
  };

  setTimeout(() => {
    backendData.modified = true;
    console.log('Data received', backendData);
  }, 2000);

}, 2000);
*/

//принимает два аргумента resolve - когда успешно закончена асинхронная операция возвращает объект Promise , reject которые в свою очередь тоже являются функциями
/*
console.log('Request data...');

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData);
  }, 2000);
});

p.then((data)=> {
  console.log('Promise resolved', data);
  const p2 = new Promise((resolve, reject)=> {
    setTimeout(() => {
      data.modified = true;
      resolve(data)
    }, 2000);
  })

  p2.then(clineData => {
    console.log('Data received', clineData);
  })
})
*/
//в принципе появилась такая же вложенность но которую можно обойти

// console.log('Request data...');

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // console.log('Preparing data');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData);
  }, 2000);
});

p.then((data) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  });
}).then((clineData) => {
  // console.log('Data received', clineData);
  clineData.fromPromise = true;
  return clineData;
}).then((data) => {
  // console.log('modifide', data);
});

//чем хороши промисы еще
//catch() - отлавливать ошибки

const sleep = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
};

// sleep(2000).then(() => console.log(('After 2 sec')));

//Promise.all - выполнится тогда когда будут завершены все промисы в массиве
// с целью подождать с разных end поинтов информацию
Promise.all([sleep(2000), sleep(5000)]).then(() => {
  // console.log('All promise');
});

//Promise.race - выполнится тогда при получении данных от первого выполневшегося промиса
Promise.race([sleep(2000), sleep(5000)]).then(() => {
  // console.log('promise race');
});

/**Promise - it-incubator*/

/** === 1
 Promise - обещание, является объектом, при этом свойст у данного объекта нет, есть только методы:

 Методы
 then - по сути позволяет подписаться на момент когда промисс зарезолвится (придет ответ от сервира)
      принимает два параметра then (
                        () => {}, - для resolve
                        () => {}, - если указан для reject
                )
 catch - позволяет подписать на событие когда промисс отклонился
 finally - выполняется в любом случаи


 Promise может находится в одном из 3-х состояний:
 pending -ожидание
 fullfiled - заполненный имеет два состояния:
     resolve
     reject - отклонение - обещание не выполнено
 resolve, reject не прекращают выполнение кода в функции как return
 */

/** === 2
 статический метод  - метод класса с помощью которого был создан объект промисс
   Promise.all - возвратит другой промис и  когда возвращеннй промис зарезолвиться, а зарезолвится тогда когда
   все переданные промисы выполнятся
 * */
const otherPromise = Promise.all(['promise_1', 'promise_2']);
otherPromise.then(() => {});

/** === 3
 статический метод  - метод класса с помощью которого был создан объект промисс
 Promise.allSettled - возвратит (зарезолвится) другой промис тогдо, когда переданные промисы уйдут из состояния pending
 * */
const otherPromise_2 = Promise.allSettled(['promise_1', 'promise_2']);
otherPromise_2.then(() => {});

/** === 4
 статический метод  - метод класса с помощью которого был создан объект промисс
 Promise.resolve - промис который резолвится сразу с указанными значениеми - создание закглушки
 Promise.reject - промис который реджектится сразу с указанными значениеми - создание закглушки
 * */

const otherResolved = Promise.resolve(100);
// console.log(otherResolved);

// const otherRejected = Promise.reject({message: 'some error'});
// console.log(otherRejected);

/** === 5
 async/await создан для того что бы было проще работать с иерархическими вложениями
 await  - ожидает когда промис зарезолвится, по сути является альтернативой then

 */

/** === 6
 создание promise с логикой

 промисификация - т.е в функции вернуть промисс Promise.resolve => внедрении промиса туда где его небы, что бы интерфейс взаимодействия был через промисы

 когда нужно создавать промисы - промисификация при сохранении в localstorege
 */

const promiseForLocalStorige = new Promise((resolve, reject) => {});

/** === 7
 AJAX

 */

/** === 8*/



const createPromise = new Promise((resolve, reject) => {
//прописывается логика выполнения кода
  return resolve({
    id: '12esdf',
    firstName: 'Max',
  });
})
console.log(createPromise); //Promise{<fulfilled>: {…}}



createPromise.then((data) => {
  console.log(data) //{id: '12esdf', firstName: 'Max'}
  return {
    ...data,
    secondName: 'Androsov'
  }
})
    .then((data) => {
      console.log(data) //{id: '12esdf', firstName: 'Max', secondName: 'Androsov'}
})





/**Promise - it-incubator - Alex*/
