const myLibrary = [];

function Book(title, author, pages, isRead) {
  // the constructor...
  if (!new.target) {
    throw Error(`Must use "new" operator!`);
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function() {
    let isReadString = isRead ? "read" : "not read yet";
    return `ID${this.id} "${this.title}" by ${this.author}, ${this.pages} pages, ${isReadString}`;
  }
}

function addBookToLibrary() {
  // take params, create a book then store it in the array
}

// let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
// console.log(theHobbit.info());

