let myLibrary = []

function Book(author, title, pages, read){
    this.bookAuthor = author;
    this.bookTitle = title;
    this.bookPages = pages;
    this.bookRead = read;
}

function addBookToLibrary(event){
    const book = new Book(author.value, title.value, pages.value, read.checked);
    myLibrary.push(book);
    displayLibrary();
    event.preventDefault();
}

function displayLibrary(){
    listOfBooks.innerHTML = "";
    for(book of myLibrary){
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `Author: ${book.bookAuthor} Title: ${book.bookTitle} Pages: ${book.bookPages} Read: ${book.bookRead}`
        listOfBooks.appendChild(newDiv);
    }
}

const table = document.getElementById('main-table');
const author = document.getElementById('book-author');
const title = document.getElementById('book-title');
const pages = document.getElementById('book-pages');
const read = document.getElementById('book-read');
const listOfBooks = document.getElementById('list-of-books');

const mainButton = document.getElementById('main-btn');
mainButton.addEventListener('click', addBookToLibrary);