function Book(name, publisher) {
  this.name = name;
  this.publisher = publisher;
}
var book1 = new Book("深入淺出HTML5", "O'reilly"),
  book2 = new Book("JavaScript & jQuery: The Missing Manual", "O'reilly"),
  book3 = book2;

console.log(book1, book2);
