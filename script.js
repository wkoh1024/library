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

function addBookToLibrary(Book) {
  // take params, create a book then store it in the array
  if (Book.protoype !== Object.getPrototypeOf(this.Book)) {
    throw Error(`Object is not a "Book" item!`);
  }
  myLibrary.push(Book);
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 432, true);
let nineteenEightyFour = new Book("1984", "George Orwell", 328, false);
let toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
let theCatcherInTheRye = new Book("The Catcher in the Rye", "J.D. Salinger", 224, false);
let theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);

