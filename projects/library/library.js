let myLibrary = []

function Book(author, title, pages, read){
    this.bookAuthor = author;
    this.bookTitle = title;
    this.bookPages = pages;
    this.bookRead = read;
}

Book.prototype.changeRead = function(){
    if(this.bookRead){
        this.bookRead = false;
    } else {
        this.bookRead = true;
    }
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
        <th>Edit</th>
        <th>Delete</th>
        </tr>
        `;
    for(const [index, book] of myLibrary.entries()){
        const newRow = table.insertRow()
        const authorCell = newRow.insertCell(0);
        authorCell.textContent = book.bookAuthor;
        const titleCell = newRow.insertCell(1);
        titleCell.textContent = book.bookTitle;
        const pagesCell = newRow.insertCell(2);
        pagesCell.textContent = book.bookPages;
        const readCell = newRow.insertCell(3);
        readCell.textContent = book.bookRead;
        newRow.insertCell(4).innerHTML = `<button type="button"  data-index = ${index} onclick="editBook(this)">Edit</button>`;
        newRow.insertCell(5).innerHTML = `<button type="button" data-index = ${index} onclick="deleteBook(this)">Delete</button>`;
    }
}

function editBook(button) {
    const bookIndex = parseInt(button.dataset.index);
    const tableIndex = bookIndex + 1;
    myLibrary[bookIndex].changeRead();
    table.rows[tableIndex].cells[3].innerHTML = myLibrary[bookIndex].bookRead;
}

function  deleteBook(button){
    let tableIndex = parseInt(button.dataset.index);
    myLibrary.splice(tableIndex, 1);
    tableIndex = tableIndex + 1;
    table.deleteRow(tableIndex);
    displayLibrary();

}

const table = document.getElementById('main-table');
const author = document.getElementById('book-author');
const title = document.getElementById('book-title');
const pages = document.getElementById('book-pages');
const read = document.getElementById('book-read');

const mainButton = document.getElementById('main-btn');
mainButton.addEventListener('click', addBookToLibrary);