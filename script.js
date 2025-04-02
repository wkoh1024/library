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
    return `${this.id}, "${this.title}" by ${this.author}, ${this.pages} pages, ${isReadString}`;
  }
}

function addBookToLibrary(bookToAdd) {
  // take params, create a book then store it in the array
  if (!(bookToAdd instanceof Book)) {
    throw Error(`Object is not a "Book" item!`);
  }
  myLibrary.push(bookToAdd);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 432, true);
const nineteenEightyFour = new Book("1984", "George Orwell", 328, false);
const toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const theCatcherInTheRye = new Book("The Catcher in the Rye", "J.D. Salinger", 224, false);
const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);

addBookToLibrary(theHobbit);
addBookToLibrary(prideAndPrejudice);
addBookToLibrary(nineteenEightyFour);
addBookToLibrary(toKillAMockingbird);
addBookToLibrary(theCatcherInTheRye);
addBookToLibrary(theGreatGatsby);


console.log(myLibrary);