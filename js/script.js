let myLibrary = [];

function addBook() {

  //new book
  let newBook = {
    title: "",
    author: "",
    pages: 0,
    read: false
  };
  newBook.title = document.getElementById("book-title").value;
  newBook.author = document.getElementById("book-author").value;
  newBook.pages = document.getElementById("book-pages").value;

  //form validation
  if (newBook.title == "" || newBook.author == "" || newBook.pages == "") {
    return;
  }

  //checkmark
  let readBool = document.getElementById("book-read").checked;
  newBook.read = readBool;

  //push new book
  myLibrary.push(newBook);
  document.getElementById("book-title").value = "";
  document.getElementById("book-author").value = "";
  document.getElementById("book-pages").value = "";
  document.getElementById("book-read").checked = false;

  //run book
  book();

  //check console log
  console.log(myLibrary);
}

function book() {

  //remove all books first
  const total = document.querySelectorAll(".add-box");
  total.forEach(item => {
    item.remove();
  });

  //dynamically create each box
  for (let i = 0; i < myLibrary.length; i++) {
    //append to the container
    const container = document.getElementById("container");
    //create new book
    let includeBook = document.createElement("div");

    //get information from the Library
    let title = document.createElement("h3");
    title.innerHTML = myLibrary[i].title;
    let author = document.createElement("p");
    author.innerHTML = myLibrary[i].author;
    let pages = document.createElement("p");
    if (myLibrary[i].pages == 1) {
      pages.innerHTML = myLibrary[i].pages + " page";
    }
    else {
      pages.innerHTML = myLibrary[i].pages + " pages";
    }

    //add to the box
    includeBook.appendChild(title);
    includeBook.appendChild(author);
    includeBook.appendChild(pages);

    //add checkbox button
    let checkboxBtn = document.createElement("div");
    checkboxBtn.addEventListener("onclick", (event) => {
      readBook();
    });
    if (myLibrary[i].read == true) {
      checkboxBtn.innerHTML = "Read";
      includeBook.appendChild(checkboxBtn).className = "btn read";
    }
    else if (myLibrary[i].read == false) {
      checkboxBtn.innerHTML = "Not Read";
      includeBook.appendChild(checkboxBtn).className = "btn not-read";
    }
    //add delete button
    let button = document.createElement("div");
    button.innerHTML = "Delete"
    includeBook.appendChild(button).className = "btn delete";
    //add eventlistener

    //add to container
    container.appendChild(includeBook).className = "add-box";
  }
}

function deleteBook() {

}

function readBook() {

}
