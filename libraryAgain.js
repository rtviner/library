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

function addBookToLibrary(title, author, pages, isRead) {
  // let form = document.querySelector("form");
  // let title = form.elements[0];
  // let author = form.elments[1];
  // let pages = form.elements[2];
  // let isRead = form.elements[3];
  //take users input
  // check if title, author and isRead data has been input and are the appropriate data types 
  // make a new book object with this data
  let newBook = new Book(title, author, pages, isRead);
    // push the new book to the myLibrary array
  myLibrary.push(newBook);
  console.log(myLibrary);
};

function render() {
  let library = document.getElementsByClassName('myLibrary')[0];
    if (myLibrary.length > 0) {
      
      // loop through myLibrary array and display each book on the page
      // each book is a separate div??
      myLibrary.map(book => {
        let card = document.createElement('div');
        let title = document.createElement('h3');
        title.textContent = book.title;
        let stats = document.createElement('ul');
        let author = document.createElement('li');
        author.textContent = book.author;
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
        card.appendChild(title);
        card.appendChild(stats);
        card.appendChild(readit);
        card.appendChild(readitLabel);
        library.appendChild(card);
      }); 
    } else {
      let getStartedMessage = "Add some books to your library to get started";
      const message = document.createTextNode(getStartedMessage);
      library.appendChild(message);
    };
};

// listen to submit event from form
console.log(addBookToLibrary("The Sports Gene", "Freddy Jones", 298, true));
render();