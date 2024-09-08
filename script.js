const myLibrary = [];

// Constructor that creates all the book objects
function book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Takes a book parameter, adds it to myLibrary, and calls displayBooks() to refresh display
function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks(); 
}

// Gets the info from div with id of library and clears the content
function displayBooks() {
    const library = document.getElementById('library');
    library.innerHTML = ''; // clears previous display

    // Loops through each book, for each book a new div is created, and is then given the css with the class
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');

        // This creates the structure for the bookCards
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages ? 'Read' : 'Not read yet'}</p>
        <button onclick="removeBook(${index})">Remove</button>
        `;

        // After card creation,  it is appended to the libray div
        library.appendChild(bookCard);
    });
}
// A function that uses splice() to remove book from myLibrary array
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

// Adds an event listener to the "Add Book" button, so that it shows/removes the form
document.getElementById('butt').addEventListener('click', () => {
    document.getElementById('bookForm').classList.toggle('hidden');
});

// Prevents the button from submitting data to a server
document.getElementById('form-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // Retrieves the values from the form inputs
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    // Creates a new Book object using the constructor with the values
    const newBook = new book(title, author, pages);

    addBookToLibrary(newBook);
    document.getElementById('form-container').reset();
    document.getElementById('bookForm').classList.add('hidden');
})

console.log(myLibrary);
