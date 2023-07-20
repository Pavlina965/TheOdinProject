let myLibrary = [];
const addTitle = document.getElementById("title");
const addAuthor = document.getElementById("author");
const addPages = document.getElementById("pages");
const submitButton = document.getElementById("addBook");
const titleError = document.getElementById('titleError');
const authorError = document.getElementById('authorError');
const pagesError = document.getElementById('pagesError');
const body = document.getElementsByTagName('body');
const updateButton = document.getElementById('updateBook');
const updateTitle = document.getElementById('updateTitle');
const updateAuthor = document.getElementById('updateAuthor');
const updatePages = document.getElementById('updatePages');


const Book = (title, author, pages, read) => {
    return { title, author, pages, read }
}

function isRead() {
    const isRead = document.querySelector('input[name="read"]:checked')
    return isRead.value === 'yes';
}

function addBookToLibrary() {

    let title = addTitle.value;
    let author = addAuthor.value;
    let pages = addPages.value;
    let read = isRead();
    let newBook = Book(title, author, pages, read)
    myLibrary.push(newBook);
}

function clearForm() {
    addTitle.value = "";
    addAuthor.value = "";
    addPages.value = "";
}

function clearError() {
    titleError.textContent = "";
    authorError.textContent = "";
    pagesError.textContent = "";
}


function checkInput() {
    if (addTitle.value === "") {
        titleError.textContent = "please enter a title of the book";
    } else if (addTitle.value !== "") {
        titleError.textContent = "";
    }
    if (addAuthor.value === "") {
        authorError.textContent = "please enter Author of the book";
    } else if (addAuthor.value !== "") {
        authorError.textContent = "";
    }
    if (addPages.value === "" || addPages.value <= 0) {

        pagesError.textContent = "please add number of pages in this book";
    } else if (addPages.value !== "") {
        pagesError.textContent = "";
    }
}

function closeForm() {
    document.getElementById('editForm').style.display = "none";
    document.body.classList.add('light');
    document.body.classList.remove('dark');
}

function createLibrary() {
    const tbody = document.getElementById('tableBody');

    tbody.textContent = '';

    for (let i = 0; i < myLibrary.length; i++) {

        const row = document.createElement('tr');
        const bookInfo = document.createElement('td');
        const bookTitle = document.createElement('td');
        const bookAuthor = document.createElement('td');
        const bookPages = document.createElement('td');

        row.classList.add('book')
        tbody.appendChild(row);

        bookTitle.textContent = myLibrary[i].title;
        bookAuthor.textContent = myLibrary[i].author;
        bookPages.textContent = myLibrary[i].pages;

        if (myLibrary[i].read) {
            bookInfo.textContent = 'read';
        }
        else {
            bookInfo.textContent = 'not read';
        }

        bookInfo.classList.add('read-status')
        bookInfo.addEventListener('click', () => {
            if (myLibrary[i].read) {
                myLibrary[i].read = false;
                createLibrary();
            }
            else {
                myLibrary[i].read = true;
                createLibrary()
            }
        })

        row.append(bookTitle, bookAuthor,bookPages,bookInfo);

        const deleteData = document.createElement('td')
        const editData = document.createElement('td')
        const editBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')

        editBtn.innerHTML = "Edit"
        deleteBtn.innerHTML = "Delete"

        editBtn.addEventListener('click', () => {
            openForm(i);
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            updateButton.onclick = () => {
                event.preventDefault();
                myLibrary[i].title = updateTitle.value;
                myLibrary[i].author = updateAuthor.value;
                myLibrary[i].pages = updatePages.value;
                if (document.getElementById('updateYes').checked) {
                    myLibrary[i].read = true;
                }
                else {
                    myLibrary[i].read = false;
                }
                createLibrary();
                closeForm();
            };
        })

        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1)
            createLibrary()
        })
        editData.appendChild(editBtn)
        deleteData.appendChild(deleteBtn)
        row.append(editData,deleteData)
    }
}

function updateTable() {
    createLibrary()
}

submitButton.addEventListener('click', () => {
    event.preventDefault()
    if (addTitle.value === "" || addAuthor.value === "" || addPages.value === "") {
        checkInput()
    } else {
        document.getElementById('libraryTable').style.display = "block";
        addBookToLibrary()
        clearForm()
        clearError()
        updateTable()
    }
})

function openForm(bookId) {
    document.getElementById('editForm').style.display = "block";
    updateTitle.value = myLibrary[bookId].title;
    updateAuthor.value = myLibrary[bookId].author;
    updatePages.value = myLibrary[bookId].pages;
    if (myLibrary[bookId].read) {
        document.getElementById('updateYes').checked = true;
    }
    else {
        document.getElementById('updateNo').checked = true;
    }
}





