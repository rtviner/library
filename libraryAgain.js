let myLibrary = []; 

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function() {
    let info = `You have ${this.isRead ? "read" : "not read"} ${this.title} by ${this.author}, ${this.pages} pages.`
    return info;
  };
};

function addBookToLibrary(input) {
  ;
};

let book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(book1.info());
book1.isRead = true;
console.log(book1.info());