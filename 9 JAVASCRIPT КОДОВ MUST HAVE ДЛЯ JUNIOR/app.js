///////////////////////////////////////////
// 9 JAVASCRIPT КОДОВ MUST HAVE ДЛЯ JUNIOR
///////////////////////////////////////////


// #1 - Аргумент как объект
function about(name, age) {
    console.log('your name: ' + name);
    console.log('your age: ' + age);
}
about('Max', 34);

function about2(arg) {
    console.log('your name: ' + arg.name);
    console.log('your age: ' + arg.age);
}
about2({
    name: 'Max',
    age: 34
});

// #2 - function* - Функция генератор
function* idGenerator() {
    let id = 177;
    while (true) {
        yield id++;
    }
}
const myIdGenerator = idGenerator();
console.log(myIdGenerator.next().value);

// №3 - Работа с JSON данными - логирорование JSON и вывод значений
const arg = {
    name: 'maks',
    age: 34,
    data: ['vf87897vf8', 'sdfdsfs3434', 'sdfsdf'],
};
console.log(JSON.stringify(arg));
console.log(JSON.stringify(arg, null, 2));

// #4 - прерывание операции с помощью ?
const subway = {
    green: ['station1', 'station2', 'station3'],
    red: ['station4', 'station4', 'station5'],
}
console.log(subway.green.join(' '));
console.log(subway.blue?.join(' ')); //идет прерывание после ?, если данные не найдены

// #5 - Деструктуризация - это новый синтаксис ES6 - вытаскивание данных из объекта
const { name, age } = arg;
console.log(name, age);
const { 0: pass, 1: uac } = arg.data;
console.log(pass, uac);

// #6 - Деструктуризация - работа с одномерными массивами, добавление данных
let arr = [44, 55];
console.log(...arr, 33, 44, 55);

// #7 - удаление дубликатов
const myArr = [3, 4, 5, 6, 7, 8, 3, 6, 8, 9, 3];
console.log(new Set(myArr)); //объект
console.log(...new Set(myArr)); //массив

// #8 - приводим к Number через map
const arr8 = [8, '7', ['4'], 'df', 56];
const arr8Num = arr8.map(Number);
console.log(arr8Num);

// #9 - определение время на выполнение кода
console.time('ex-1');
let a = 11;
let b = 22;
// задача поменять местами значения a b
[a, b] = [b, a];
console.log(a, b);
console.timeEnd('ex-1');


// ТОП ЗАДАЧ НА СОБЕСЕДОВАНИИ





///////////////////////////////////////////
//ООП в JS - подход проектирования классов (задание методов, наследование классов)
// классы в JS являются синтаксическим сахаром
///////////////////////////////////////////


// function myAlert() {
//     let a = 'Error';
//     let b = `<p class="orange">${a}</p>`;
//     document.querySelector('.alert').innerHTML = b;
// }

// модифицируем вышеизложенную функции через задание аргументов
function myAlert(a, c, d) {
    let b = `<p class=${c}>${a}</p>`;
    document.querySelector(d).innerHTML = b;
}
myAlert('Error', 'orange', '.alert');

// любое изменение не гарантирует правильность работы, таким образом перепишем ч/з ООП
class Alert {
    constructor(a, c, d) {
        this.massage = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class=${this.cssClass}>${this.massage}</p>`;
    }
}

let m = new Alert('my massage', 'red', '.alert');
console.log(m);

//вызов созданного метода
m.showAlert();

//преимущетсво подхода -  унаследование от метода
// класс Alert2 расширяет возможности класса Alert
class Alert2 extends Alert {
    constructor(a, c, d, icon) {
        super(a, c, d);  // передаем параметры в Alert
        this.icon = icon;
    }
    showIconAlert() {
        document.querySelector(this.out).innerHTML =
            `<p class=${this.cssClass}>
        <span class="material-icons">${this.icon}</span>
        ${this.massage}</p>`;
    }
}

let m2 = new Alert2('my massage2', 'orange', '.alert2', 'thumb_up');
console.log(m2);

m2.showIconAlert();



// должны посмотреть что такое сеттеры и геттеры
// разные типы методы


///////////////////////////////////////////
//ООП в JS - работа с прототипами
///////////////////////////////////////////