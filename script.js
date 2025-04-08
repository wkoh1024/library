const myLibrary = [];
const bookshelf = document.querySelector("#bookshelf");
const addBookButton = document.querySelector("#addBook");
const addBookModal = document.querySelector("#addBookModal");
const addBookSubmitButton = document.querySelector("#addBookSubmit");
const addBookForm = document.querySelector("#addBookForm");

function addBookToLibrary(bookToAdd) {
  // take params, create a book then store it in the array
  if (!(bookToAdd instanceof Book)) {
    throw Error(`Object is not a "Book" item!`);
  }
  myLibrary.push(bookToAdd);
  displayBook(bookToAdd);
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

function displayBook(bookToAdd) {
  let newItem = document.createElement("div");
  let deleteBookButton = document.createElement("button");
  deleteBookButton.classList.add("deleteBookButton");
  deleteBookButton.textContent = "Delete Book";
  newItem.classList.add("book");
  newItem.setAttribute("id", bookToAdd.id);
  newItem.innerHTML = `
    <div>
      <h2>${bookToAdd.title}</h2>
      <p>Author: ${bookToAdd.author}</p>
      <p>Pages: ${bookToAdd.pages}</p>
      <p>Status: ${bookToAdd.isRead ? "Read" : "Not Read Yet"}</p>
    </div>
  `;
  newItem.appendChild(deleteBookButton);
  bookshelf.appendChild(newItem);
}




addBookButton.addEventListener("click", () => {
  addBookModal.showModal();
});

addBookSubmitButton.addEventListener("click", addBookSubmitButtonHandler);

function addBookSubmitButtonHandler(event) {
  event.preventDefault();
  let title = document.querySelector("#bookTitle").value;
  let author = document.querySelector("#bookAuthor").value;
  let pages = document.querySelector("#bookPages").value;
  let isRead = document.querySelector("#bookIsRead").checked;

  if (title && author && pages) {
    const newBook = new Book(title, author, pages, isRead);
    addBookModal.close();
    addBookForm.reset();
  } else {
    alert("Please fill in all fields.");
  }
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const prideAndPrejudice = new Book("Pride and Prejudice", "Jane Austen", 432, true);
const nineteenEightyFour = new Book("1984", "George Orwell", 328, false);
const toKillAMockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 281, true);
const theCatcherInTheRye = new Book("The Catcher in the Rye", "J.D. Salinger", 224, false);
const theGreatGatsby = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
const mobyDick = new Book("Moby Dick", "Herman Melville", 635, true);
const janeEyre = new Book("Jane Eyre", "Charlotte Brontë", 507, false);
const dracula = new Book("Dracula", "Bram Stoker", 418, true);
const theOdyssey = new Book("The Odyssey", "Homer", 324, false);
const donQuixote = new Book("Don Quixote", "Miguel de Cervantes", 863, true);
const theDivineComedy = new Book("The Divine Comedy", "Dante Alighieri", 798, false);

