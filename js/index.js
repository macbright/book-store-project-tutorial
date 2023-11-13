
import { bookList } from "./bookLists.js";
import {renderBooks } from "./book.js"
// BOOK STORE PROJECT
// 1. CREATE THE MAIN PAGE 
// 2. THE ADD BOOK BUTTON THAT ADDS A BOOK TO OUR STORE
// 3. RENDER THE BOOKS ON THE MAIN PAGE
// 4. ADD DELETE AND READ BOOK TO EACH BOOK (THE DELETE SHOULD DELETE A BOOK
//    WHEN CLICKED AND THE READ BUTTON SHOULD TOGGLE READ OR NOT READ WHEN CLICKED)
// 5. ADD FOOTER SECTION


const btn = document.getElementsByClassName("add-book")[0];
const displayForm = document.getElementsByClassName('form-section')[0];
const closeBtn = document.getElementById('closeBtn');



function display() {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        displayForm.style.display = "block";
    })
}
function closeByWindow() {
    window.addEventListener('click', (e) => {
        if(e.target == displayForm) {
            displayForm.style.display = "none"; 
        }
    })
}
function closeDisplay() {
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        displayForm.style.display = "none"; 
    })
}


display()
closeDisplay()
closeByWindow()
renderBooks()