class Book {
    constructor(id, title, author, pages, read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const addBookButton = document.getElementById("addBookButton");
const myLibrary = [];

function addBookToLibrary() {
    const bookId = crypto.randomUUID();
    const title = document.querySelector('input[name="title"]').value;
    const author = document.querySelector('input[name="author"]').value;
    const pages = document.querySelector('input[name="pages"]').value;
    const read = document.querySelector('input[name="read"]').checked;
    if (!title || !author || !pages) return;
    const book = new Book(bookId, title, author, pages, read);
    myLibrary.push(book);
    displayBooks();
    clearForm();
}

addBookButton.addEventListener("click", addBookToLibrary);

function displayBooks() {
    const libraryDiv = document.querySelector('.books');
    libraryDiv.innerHTML = '';
    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('book-card');
        card.dataset.id = book.id;
        card.innerHTML = `
            <p><strong>${book.title}</strong> by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p class="read-status">${book.read ? '✅ Read' : '📖 Not read yet'}</p>
            <div class="card-actions">
                <button class="btn btn-read">${book.read ? 'Mark unread' : 'Mark read'}</button>
                <button class="btn btn-delete">Delete</button>
            </div>
        `;

        card.querySelector('.btn-read').addEventListener('click', () => {
            book.read = !book.read;
            card.querySelector('.read-status').textContent = book.read ? '✅ Read' : '📖 Not read yet';
            card.querySelector('.btn-read').textContent = book.read ? 'Mark unread' : 'Mark read';
        });

        card.querySelector('.btn-delete').addEventListener('click', () => {
            const index = myLibrary.findIndex(b => b.id === book.id);
            myLibrary.splice(index, 1);
            displayBooks();
        });

        libraryDiv.appendChild(card);
    });
}

function clearForm() {
    document.querySelector('input[name="title"]').value = '';
    document.querySelector('input[name="author"]').value = '';
    document.querySelector('input[name="pages"]').value = '';
    document.querySelector('input[name="read"]').checked = false;
}