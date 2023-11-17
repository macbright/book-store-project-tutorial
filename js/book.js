import { bookList } from "./bookLists.js";
import { checkEmptyInputs } from "./untils.js";

const displayForm = document.getElementsByClassName('form-section')[0];

export let books = [...bookList];

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


export function BookConstructor(title, author, pages, publisher, isbn, coverUrl, readStatus) {
    

    return {
        title: title,
        author: author,
        pages: pages,
        publisher: publisher,
        isbn: isbn,
        coverUrl: coverUrl,
        readStatus: readStatus,
        id: generateId()
    }
}

function deleteBookFunc(id) {
    books = books.filter((book) => book.id !== id)
    let currentBook = document.getElementById(id)
    currentBook.remove()
}

function changeReadStatus(id) {
    let currentBook = document.getElementById(id)
    let statusBtn = currentBook.children[6];
    if(statusBtn.innerHTML === "Not Read"){
        statusBtn.innerHTML = "Read"
        statusBtn.style.backgroundColor = "green"
    }else {
        statusBtn.style.backgroundColor = "red"
        statusBtn.innerHTML = "Not Read"
    } 
}

export function renderBooks(books) {
    const booksSection = document.getElementById("booksSection");

    books.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.id = book.id;
     
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

        const deleteBook = document.createElement("button");
        deleteBook.innerText = "Delete Book";
        
        deleteBook.classList.add("deleteBook")
        deleteBook.addEventListener('click', e => {
            e.preventDefault();
            deleteBookFunc(book.id)
        })
        const hasRead = document.createElement("button");
        hasRead.innerText = "Not Read";
        hasRead.classList.add("hasRead")

        hasRead.addEventListener('click', e => {
            e.preventDefault();
            changeReadStatus(book.id)
        })

        bookDiv.append(image, title, author, pages, publisher, isbn, hasRead, deleteBook)
        booksSection.appendChild(bookDiv);
    })

}

function clearInputs() {
    let inputs = document.querySelectorAll("input")
    inputs.forEach((input) => input.value = "")
}


export function addBook() {
    let inputs = document.querySelectorAll("input")
    let errors = document.getElementById("errors")
    let inputsValues = {};
    inputs.forEach(input =>  {
        inputsValues[input.name] = input.value
    })
    let { title, author, pages, publisher, isbn, coverUrl, readStatus } = inputsValues; 

    if(checkEmptyInputs(title, author, pages, publisher, isbn, coverUrl,
         readStatus, errors ).length > 0) {
        return 
    }
    
    if(coverUrl === ""){
        coverUrl = "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/03/1488480428eloquent-js.jpg"
    }
    
    let newBook = new BookConstructor(title, author, pages, publisher, isbn, coverUrl, readStatus)
    
    books.push(newBook)
    console.log(books)
    renderBooks([newBook])
    clearInputs()
    displayForm.style.display = "none"
   
}