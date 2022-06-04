class Library {
    constructor() {
        this._book = [];
    }

    get book() {
        return [...this._book];
    }
    searchBook(book) {
        const index = this._book.findIndex(e => e.id === book.isbn);

        return index < 0;
    }
    
    addBook(book) {
        const index = this._book.findIndex(e => e.isbn === book.isbn);
        if (index < 0) {
            this._book.push(book);
        }
        return index < 0;
    }

    removeBook(id){
        const index = this._book.findIndex(e => e.isbn === isbn);
        if(index >= 0){
            this._book.splice(index, 1);
        }
        return index >= 0;
    }

    printLibrary(){
        //TODO print all books to console
        for (let i = 0; i < this._book.length; i++) {
            const tr = document.createElement('tr');// main block
            
            tr.appendChild(this._createInfoElement(`${i+1}`,'td'));
            tr.appendChild(this._createInfoElement(`${this._book[i].isbn}`,'td'));
            tr.appendChild(this._createInfoElement(`${this._book[i].title}`,'td'));
            tr.appendChild(this._createInfoElement(`${this._book[i].author}`,'td'));
            tr.appendChild(this._createInfoElement(`${this._book[i].year}`,'td'));
            list.appendChild(tr)
        }
    }

    _createInfoElement(content, tag) {
        const element = document.createElement(tag);
        const text = document.createTextNode(content);
        element.appendChild(text);
        return element;
      }
}
