function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + ", " + this.pages + ", " + this.read;
}

let myLibrary = [["test", "author1", "pages1", "read1"]];

function addBookToLibrary(){
    const form = document.getElementById('bookForm');
    if(form.style.display = "none"){
        form.style.display = "block";
    } 

}

addBook.addEventListener('click', addBookToLibrary)

function displayLibrary(){
    const table = document.getElementById('bookTable');
    for (const book of myLibrary){
        ;
    }
}

window.onload = displayLibrary;