import { bookList } from "./bookLists.js";

let books = [...bookList];

export function generateId(){
    let id;
    let idDoesnotExist = true
    while(idDoesnotExist){
        let randomId = Math.random().toString(36).substring(2, 7);
        if(books.every((book) => book.id !== randomId)){
            id = randomId;
            idDoesnotExist = false
        }
    }
  return id;
}


function BookConstructor(title, author, pages, publisher, isbn, coverUrl, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publisher = publisher;
    this.isbn = isbn;
    this.coverUrl = coverUrl;
    this.readStatus = readStatus;
    this.id = generateId()
}

function deleteBookFunc(id) {
    console.log(books)
    books = books.filter((book) => book.id !== id)

}



export function renderBooks() {
    const booksSection = document.getElementById("booksSection");
    books.forEach((book) => {
        const bookDiv = document.createElement("div");
       
        const image = document.createElement("img");
        image.src = book.coverUrl;

        const title = document.createElement("h5");
        title.innerText = `Title:  ${book.title}`

        const author = document.createElement("p");
        author.innerText = `Author:  ${book.author}`

        const pages = document.createElement("p");
        pages.innerText = `Pages:  ${book.pages}`

        const publisher = document.createElement("p");
        publisher.innerText = `Publisher:  ${book.publisher}`

        const isbn = document.createElement("p");
        isbn.innerText = `ISBN:  ${book.isbn}`

        const hasRead = document.createElement("button");
        hasRead.innerText = "Not Read";
        hasRead.classList.add("hasRead")

        const deleteBook = document.createElement("button");
        deleteBook.innerText = "Delete Book";
        
        deleteBook.classList.add("deleteBook")
        deleteBook.addEventListener('click', e => {
            e.preventDefault();
            deleteBookFunc(book.id)
        })

        bookDiv.append(image, title, author, pages, publisher, isbn, hasRead, deleteBook)
        booksSection.appendChild(bookDiv);
    })

}