/**Liskov substitution - принцип подстановки Барбары Лисков
 *  представляет собой некоторое руководство по созданию иерархий наследования.
 *
 *  функции которые используют базовый тип должны с ним взаимодействовать + взаимодействовать с подтипами данного базового типа при это ни чего не зная  про это
 *
 * если есть кусок кода куда приходит базовый класс то в этот же кусочек кода без каких либо помех может приходить любой его наследник
 *
 * */

// example 1

class Person {

}

class Member extends Person {
  acces() {
    console.log('У тебя есть доступ')
  }
}

class Guest extends Person {
  isGuest = true
}


class Frontend extends Member {
  canCreateFronted() {}
}

class Backend extends Member {
  canCreateBackend() {
  }
}

class PersonFromDifferentCompany extends Guest {
  acces() {
    throw new Error('У тебя нет доступа, иди к себе!!!')
  }
}

function openSecretDoor(member) {
  member.acces()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())


