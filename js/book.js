import { bookList } from "./bookLists";

const books = [...bookList];

function BookConstructor(title, author, pages, publisher, isbn, coverUrl, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.publisher = publisher;
    this.isbn = isbn;
    this.coverUrl = coverUrl;
    this.readStatus = readStatus;
    this.id = books.length + 1
}
