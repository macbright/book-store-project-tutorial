export function checkEmptyInputs(title, author, pages, publisher, isbn, coverUrl, readStatus, errors) {
    let check = []
    if(title === '') {
        errors.innerHTML = "Title can not be empty";
        check.push(false)
    }

    if(author === '') {
        errors.innerHTML = "Author field can not be empty";
        check.push(false)
    }
    if(publisher === '') {
        errors.innerHTML = "Publisher field can not be empty";
        check.push(false)
    }
    if(isbn === '') {
        errors.innerHTML = "ISBN field can not be empty";
        check.push(false)
    }
    if(readStatus === '') {
        errors.innerHTML = "Read Status field can not be empty";
        check.push(false)
    }
    if(readStatus.toLowerCase() !== "read" && readStatus.toLowerCase() !== "not read") {
        errors.innerHTML = "Read Status should either be 'Read or Not Read";
        console.log(readStatus)
        check.push(false)
    }
    if(Number(pages) < 10){
        errors.innerHTML = "Pages of the book can not be less than 10";
        check.push(false)
    }
    return check
}
