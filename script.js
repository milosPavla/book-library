class Book {
    constructor(name, author, pages) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }

    addToLibrary() {
        myLibrary.push(this);
    }
}

function showLibrary() {
    library.textContent = "";
    myLibrary.forEach(book => {
        let bookEl = document.createElement('div');
        bookEl.classList.add('book-item');
        bookEl.innerHTML = `-Book: ${book.name}<br>-Author: ${book.author}<br>-Pages: ${book.pages}`;
        library.appendChild(bookEl);
    });
}

function clearLibrary() {
    myLibrary.length = 0;
    showLibrary();
}

const myLibrary = [];

let library = document.querySelector('.library');

document.querySelector('#addButton').addEventListener('click', () => {
    if(myLibrary.length < 10 ) {
        let name = document.querySelector('#name').value;
        let author = document.querySelector('#author').value;
        let pages = document.querySelector('#pages').value;

        if(name != "" && author != "" && pages != 0) {
            new Book(name, author, pages).addToLibrary();
            showLibrary();
        } 
        else {
            alert("Every input field must be entered!");
        }
    } 
    else {
        alert("You can add only 10 books! Clear it to add other books!");
    }
    
});

document.querySelector('#clearButton').addEventListener('click', clearLibrary);





