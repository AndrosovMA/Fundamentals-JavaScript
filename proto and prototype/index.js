//*******************************************************************************************************//
function studu_Proto() {
    /*
    и __proto__ и prototype это свойства объекта
        xxx. __proto__      yyy. prototype
    */

    //Свойство __proto__ есть у всех объектов - абсолютно любой объект в JavaScript имеет свойство __proto__.
    //Примеры объектов:
    let man = {}     // man.__proto__
    let users = []   // массив это объект значит у него есть users.__proto___
    let age = 18     // 18 это примитив, но если мы обращаемся к нему как к объекту ставив точку то создается объектная версия примитива age.__proto__
    let youtube = "it codind"  //youtube.__proto__

    function it() { }       // function declaration it.__proto__
    let it_1 = function () { } //function expresion it.__proto__
    let it_2 = () => { } // стрелочная функция
    class YoutubeChadnnel { } //- класс (навороченная функция - синтаксический сахар) YoutubeChadnnel.__proto__

    let car = true;  // булево значение  car.__proto__

    //Разные __proto__ разных по типу объектов это совершенно независимые разные объекты. У одинаковых по типу объектов __proto__равны.
    let it_4 = { a: "aaa" };
    let cod = { b: 'bbb' };
    console.log(it_4.__proto__ === cod.__proto__); //true


    //!!! Любой объект в JS создается с помощью класса либо функции консруктора new....
    let promise8 = new Promise(() => { }) //new Promise(...)
    let man8 = {} //new Object(...) 
    let users8 = [] //new Array(...)
    let age8 = 18 //new Number(...)
    let cat8 = 'gig' // new String (...)

    function it() { }       // new Function (...)
    let it_3 = function () { } //new Function (...)
    let it_5 = () => { } // new Function (...)
    class YoutubeChadnnel8 { } //new Function (...)

    let channel = new YoutubeChadnnel8() // new YoutubeChadnnel

    let a = true // new Boolean


    //что бы понимать что это за __proto__, нужно  ТОЧНО знать с помощью какой функции-конструктора (класса) создан данных объект (new XXX())
    //__proto__ любого объетка ссылается на prototype класса (функции конструктора), с помощью которой этот объект был создан (сконструирован)


    let man9 = {};
    console.log(man9.__proto__ === Object.prototype); //true
}
//prototype - есть олько у class либо function


//*******************************************************************************************************//
//Зачем классу нужен объект prototype
//Зачем объектам созданным с помощью этого класса свойство __proto__, которое ссылается на этот объект prototype

//Как правило речь идет именно о методах
let tast = { number: 1 };
//task.keys()
//task.__proto__ => Object.prototype = {  to keys(){}  }


//Классы в языках программирования нужны что бы клепать однотипные объекты



//*******************************************************************************************************//
/*
При обращении к любому свойству объекта, оно в первую очередь ищется в самом объекте, но если его там нет, поиск происходит в свойстве __proto__
если его нет и там, оно ищется дальше по цепочке: Эта цепочка называется цепочкой прототипов (prototype chain).
*/
/*
__proto__ всех конструкторов / функций указывает на Function.prototype, который является пустой функцией (Пустая функция).
Это иллюстрирует один момент:Все конструкторы происходят из Function.prototype, даже сам корневой конструктор Object и Function. Все конструкторы наследуют свойства и методы Function.prototype.
*/
Number.__proto__ === Function.prototype  // true
Boolean.__proto__ === Function.prototype // true
String.__proto__ === Function.prototype  // true
Object.__proto__ === Function.prototype  // true
Function.__proto__ === Function.prototype // true
Array.__proto__ === Function.prototype   // true
RegExp.__proto__ === Function.prototype  // true
Error.__proto__ === Function.prototype   // true
Date.__proto__ === Function.prototype    // true


// __proto__ всех объектов указывает на прототип своего конструктора
var obj = { name: 'jack' }
var arr = [1, 2, 3]
var reg = /hello/g
var date = new Date
var err = new Error('exception')

console.log(obj.__proto__ === Object.prototype) // true
console.log(arr.__proto__ === Array.prototype)  // true
console.log(reg.__proto__ === RegExp.prototype) // true
console.log(date.__proto__ === Date.prototype)  // true
console.log(err.__proto__ === Error.prototype)  // true


//пример ссылочно типа данных { value: 18 } на который указывают три ссылки a; b,age; c
let a = { value: 18 };
let b = { age: a };
let c = a;

console.log(a === b.age); // true
console.log(a === c);     // true

b.age.value = 21;
console.log(a);

console.log(a.value === 21);
console.log(c.value === 21);


