/**Dependency inversion principal - принцип инверсии зависимости
 верхний уровнеь модулей не должен зависить от абстракций нижнего уровня
 */
/*
class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json());
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage'
    return dataFromLocalStorage;
  }
}

class Database {
  constructor() {
    // this.fetch = new Fetch();
    this.localStorage = new LocalStorage()
  }

  getData() {
    // return this.fetch.request('vk.com');
    return this.localStorage.get('ls key')
  }

}

const db = new Database()
console.log(db.getData())
*/



//Как перепивать вышеизложенный код который будет поддреживать данный принцип
// Создать дополнительный класс который будет яыляться некоторым интерфейсом для взаимодпйствия м\д всеми сущностями
class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json());
    return Promise.resolve('data from fetch');
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage';
    return dataFromLocalStorage;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet() {
    return this.fetch.request('vk.com');
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  clientGet() {
    return this.localStorage.get(key);
  }
}

class Database {
  constructor(client) {
    this.client = client;
  }

  getData(key) {
    return this.client.clientGet();
  }
}

const db = new Database(new FetchClient());
console.log(db.getData('rand')); //Promise { 'data from fetch' }


