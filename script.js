const myLibrary = [];

function addBookToLibrary(bookToAdd) {
  // take params, create a book then store it in the array
  if (!(bookToAdd instanceof Book)) {
    throw Error(`Object is not a "Book" item!`);
  }
  myLibrary.push(bookToAdd);
}

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

  addBookToLibrary(this);
}

function removeBookFromLibrary(bookToRemove) {
  const index = myLibrary.indexOf(bookToRemove);
  if (index > -1) {
    myLibrary.splice(index, 1);
  }
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 432, true);
const nineteenEightyFour = new Book("1984", "George Orwell", 328, false);
const toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const theCatcherInTheRye = new Book("The Catcher in the Rye", "J.D. Salinger", 224, false);
const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);


console.log(myLibrary);

const bookshelf = document.querySelector("#bookshelf");
console.log(bookshelf);

for (let i = 0; i < myLibrary.length; i++) {
  let newItem = document.createElement("div");
  newItem.classList.add("book");
  newItem.setAttribute("id", myLibrary[i].id);
  newItem.innerHTML = `
    <h2>${myLibrary[i].title}</h2>
    <p>Author: ${myLibrary[i].author}</p>
    <p>Pages: ${myLibrary[i].pages}</p>
    <p>Status: ${myLibrary[i].isRead ? "Read" : "Not Read Yet"}</p>
  `;
  bookshelf.appendChild(newItem);
}