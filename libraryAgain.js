let myLibrary = []; 

function bookCreator(title, author, pages, isRead) {
  const newBook = Object.create(bookFunctions);
  newBook.title = title;
  newBook.author = author;
  newBook.pages = pages;
  newBook.isRead = isRead;
  return newBook;
};
const bookFunctions = {
  getInfo: function () {
    let info = `You have ${this.isRead ? "read" : "not read"} ${this.title} by ${this.author}, ${this.pages} pages.`
    return info;
  },
  updateIsRead: function () {
    this.isRead = !this.isRead;
  }
}
function addBookToLibrary(input) {
  let title = input[0].value;
  let author = input[1].value;
  let pages = input[2].value;
  let isRead = input[3].value;
  //take users input
  // check if title, author and isRead data has been input and are the appropriate data types 
  // make a new book object with this data
  let currBook = bookCreator(title, author, pages, isRead);
    // push the new book to the myLibrary array
  myLibrary.push(currBook);
  render();
};

function removeBookFromLibrary(index) {
  if (myLibrary.length === 1) myLibrary = [];
  else myLibrary.splice(index, 1);
  render()
};

function clearLibraryDisplay() {
  let library = document.getElementsByClassName('myLibrary')[0];
  while (library.firstChild) {
    library.removeChild(library.firstChild);
  };
};

function render() {
  // needs to clear previous render first...
  clearLibraryDisplay();
  let library = document.getElementsByClassName('myLibrary')[0];
    if (myLibrary.length > 0) {
      
      // loop through myLibrary array and display each book on the page
      // each book is a separate div??
      myLibrary.map((book,index) => {

        let card = document.createElement('div');
        card.setAttribute('id', index);
        let title = document.createElement('h3');
        title.textContent = book.title;

        let stats = document.createElement('ul');
        let author = document.createElement('li');
        author.textContent = `by ${book.author}`;
        let pages = document.createElement('li');
        pages.textContent = `${book.pages} pages`;
        stats.appendChild(author);
        stats.appendChild(pages);

        let readit = document.createElement('input');
        readit.setAttribute('type', 'checkbox');
        readit.setAttribute('name', 'isRead');
        readit.setAttribute('id', 'isRead');
        if (book.isRead) readit.setAttribute('checked', true);
        readit.addEventListener('change', () => {
          let index = readit.parentElement.id;
          myLibrary[index].updateIsRead();
        })
        // need to make readit a checkbox and check if isRead is true;
        let readitLabel = document.createElement('label');
        readitLabel.setAttribute('for', 'isRead');
        readitLabel.textContent = "Read It";


        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Remove";
        deleteBtn.addEventListener('click', () => {
          removeBookFromLibrary(deleteBtn.parentElement.id);
        });

        card.appendChild(title);
        card.appendChild(stats);
        card.appendChild(readit);
        card.appendChild(readitLabel);
        card.appendChild(deleteBtn);
        library.appendChild(card);
      }); 
    } else {
      let getStartedMessage = "Add some books to your library to get started";
      const message = document.createTextNode(getStartedMessage);
      library.appendChild(message);
    };
};

function showBookForm() {
  let form = document.querySelector("form");
  form.classList.remove('hidden');
  // listen to submit event from form
  form.addEventListener('submit', (event) => {
    event.stopImmediatePropagation();
    event.preventDefault();
    addBookToLibrary(form.elements);
    // clear form values first
    form.reset();
    form.classList.add('hidden');
  });
};

render();

// grab the add book button and add an event listener
let bookFormButton = document.querySelector('button');

bookFormButton.addEventListener('click', showBookForm);
