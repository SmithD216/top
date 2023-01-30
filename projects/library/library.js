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
    table.innerHTML = `
        <tr>
        <th>Author</th>
        <th>Title</th>
        <th>Pages</th>
        <th>Read</th>
        </tr>
        `;
    for(book of myLibrary){
        const newRow = table.insertRow()
        const authorCell = newRow.insertCell(0);
        authorCell.textContent = book.bookAuthor;
        const titleCell = newRow.insertCell(1);
        titleCell.textContent = book.bookTitle;
        const pagesCell = newRow.insertCell(2);
        pagesCell.textContent = book.bookPages;
        const readCell = newRow.insertCell(3);
        readCell.textContent = book.bookRead;
    }
}

const table = document.getElementById('main-table');
const author = document.getElementById('book-author');
const title = document.getElementById('book-title');
const pages = document.getElementById('book-pages');
const read = document.getElementById('book-read');

const mainButton = document.getElementById('main-btn');
mainButton.addEventListener('click', addBookToLibrary);