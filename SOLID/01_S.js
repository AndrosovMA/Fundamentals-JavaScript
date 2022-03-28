/** SOLID - для масштабирумости системы*/

/**Single responsibility*/

class News {
  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  updateNews(title, text) {
    this.title = title;
    this.text = text;
    this.modified = true;
  }

  // метод to JSON согласно данного принципа использовать неправильно,
  // т.к. может появиться другой метод toHTML и т.д.
  // необходимо вынести в другой класс
  // toJSON() {
  //   return JSON.stringify({
  //     title: this.title,
  //     text: this.text,
  //     modified: this.modified
  //   })
  // }
}
class NewsPrint {
  constructor(news) {
    this.news = news;
  }

  JSON() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified,
    }, null, 2);
  }

  HTML() {

  }
}

const printer = new NewsPrint(
    new News('Web', 'developer'),
);

console.log(printer.JSON());
