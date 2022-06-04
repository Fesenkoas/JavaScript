const books = new Library();
//isbn;title;author;year

let inputData = prompt('Enter book data separate by ";"');

while (inputData) {
    //TODO add to library only unique book
    const[isbn, title, author, yaer] = inputData.split(';');
    if(isbn && title && author && yaer){
        const book = (new Book(isbn, title, author, yaer));
        if(books.searchBook(book)){
            books.addBook(book);
        }
        else {
            alert(`Book with isbn: ${isbn} is exist`);
        }
    }
    else alert("Enter all date");
    inputData = prompt('Enter book data separate by ";"');
}
books.printLibrary();

// function printLibrary(library){
//     //TODO print all books to console
//     for (let i = 0; i < library.book.length; i++) {
//         const tr = document.createElement('tr');// main block
        
//         tr.appendChild(createInfoElement(`${i+1}`,'td'));
//         tr.appendChild(createInfoElement(`${library.book[i].isbn}`,'td'));
//         tr.appendChild(createInfoElement(`${library.book[i].title}`,'td'));
//         tr.appendChild(createInfoElement(`${library.book[i].author}`,'td'));
//         tr.appendChild(createInfoElement(`${library.book[i].year}`,'td'));

//         list.appendChild(tr)
//     }
// }

// Create Elemets HTML
// function createInfoElement(content, tag) {
//     const element = document.createElement(tag);
//     const text = document.createTextNode(content);
//     element.appendChild(text);
//     return element;
//   }

