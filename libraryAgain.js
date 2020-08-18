let myLibrary = []; 

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;

  this.info = function() {
    let info = `You have ${this.isRead ? "read" : "not read"} ${this.title} by ${this.author}, ${this.pages} pages.`
    return info;
  };
};

function addBookToLibrary(input) {
  console.log("input:", input);
  let title = input[0].value;
  let author = input[1].value;
  let pages = input[2].value;
  let isRead = input[3].value;
  //take users input
  // check if title, author and isRead data has been input and are the appropriate data types 
  // make a new book object with this data
  let newBook = new Book(title, author, pages, isRead);
    // push the new book to the myLibrary array
  myLibrary.push(newBook);
  render();
};

function removeBookFromLibrary(index) {
  console.log(myLibrary);
  myLibrary.splice(index, 1);
  console.log(myLibrary);
  render()
};

function render() {
  // needs to clear previous render first...
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
