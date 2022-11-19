const mainContent = document.querySelector('.main');
const bookArea = document.querySelector('.book-area');
const addBookBtn = document.querySelector('.add-book-btn');
let titleInput = document.querySelector('#input-title');
let authorInput = document.querySelector('#input-author');
let pagesInput = document.querySelector('#input-pages');
let readInput = document.querySelector('#input-read');

let myLibrary = [];
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function (){
  return this.title + ' by ' +  this.author + ', ' + this.pages + ' pages, ' + this.read
}

function addBookToLibrary(){
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = readInput.value;

  let book = new Book(title, author, pages, read)
  myLibrary.push(book);
}

function displayBooks() {
  bookArea.innerHTML = '';
  myLibrary.forEach(book => {

    let bookCard = document.createElement('div');
    let cardContent = document.createElement('div');
    let content = `Title: ${book.title}
                  Author: ${book.author}
                  Pages: ${book.pages}
                  Read yet?: ${book.read}`;
    cardContent.innerHTML = content;
    bookCard.appendChild(cardContent);
    bookArea.appendChild(bookCard);
  });
}

addBookBtn.addEventListener('click', () => {
  addBookToLibrary();
  displayBooks();

  console.log(myLibrary)

});
