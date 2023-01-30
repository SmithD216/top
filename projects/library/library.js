

function Book(author, title, pages, read){
    this.bookAuthor = author;
    this.bookTitle = title;
    this.bookPages = pages;
    this.bookRead = read;
}

function addBookToLibrary(event){
    const book = new Book(author.value, title.value, pages.value, read.checked);
    console.log(book)
    event.preventDefault();
}

const author = document.getElementById('book-author');
const title = document.getElementById('book-title');
const pages = document.getElementById('book-pages');
const read = document.getElementById('book-read');

const mainButton = document.getElementById('main-btn');
mainButton.addEventListener('click', addBookToLibrary);