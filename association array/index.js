console.log('associating array')

/** associating array - по сути является простым объектом*/

let object = {
  name: 'Max',
  age: 34,
  location: {
    city: 'Saint-Petersburg',
    id: 3453453
  },
  gumName: ['gum1', 'gum2', 'gum3']
}

//Два варинта обращения к свойствам объекта - точечная нотачия и []
let idCity = object.location.id;
let city = object['location']['city'];
// console.log(idCity, city)


//так же через [] можно и вызвать метод массива
let gumNameUpperCase = object['gumName']['map']((el)=>{
  // console.log(el);
})


// перебрать ключи массива - Object.keys
let keysObject = Object.keys(object);
//console.log(keysObject); //['name', 'age', 'location', 'gumName']


// перебрать свойства массива - Object.values
let valuesObject = Object.values(object);
//console.log(valuesObject); //['Max', 34, {…}, Array(3)]


//если присвоить ключу нестандартные значения типа {},[] то любые ключи присоединяються используя метод toString()
object[{}] = 'newObject'; // по факту будет проделано object[{}.toString()]
//console.log(object); //[object Object]: "newObject"
// но также можно переопределить метод toString()
object[ {hobby:'game', toString(){return 'Ivan'}} ] = 'objectToString';
// console.log(object)


/**
 явное приимущество использование оссоциативного массива - сложность алгоритма O(1), при этом если
 использовать массив сложность алгоритма O(n)
 * */

let car = {
  345: {id: '345', model:'Hyundai', year: 2014},
  698: {id: '698', model:'Mazda', year: 2015},
}
//найти id 698
//console.log(car['698']); // O(1)

//добавить новое значение
car['984'] = {id:984, model:'Lada', year: 2018}

//удаление любого значения O(1)
delete car['698'];



let car_2 = [
  {id: '345', model:'Hyundai', year: 2014},
  {id: '698', model:'Mazda', year: 2015}
]
// поиск можно осущетсвить только через find т.е проитерировав все значения O(n)
// при добавлении  нового значения возможно создания дубликата, или добавлять значение через фильтрацию
// при удалении значения решение только через фильтрацию (итерацию)

/**
 создание ключа объекта который равен значению переменной
 */
let newKey = '994';
let car_3 = {
  [newKey]: {id: '994', model:'Mazda', year: 2015},
}
console.log(car_3);
