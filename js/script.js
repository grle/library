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

  //remove redundancy
  let repBool = isRepeat(newBook.title);
  if (repBool == true) {
    alert("You already have this title in the library");
    // document.getElementById("book-title").value = "";
    // document.getElementById("book-author").value = "";
    // document.getElementById("book-pages").value = "";
    // document.getElementById("book-read").checked = false;
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

    //data attribute
    includeBook.setAttribute("data-index-number", i)

    //add to the box
    includeBook.appendChild(title);
    includeBook.appendChild(author);
    includeBook.appendChild(pages);

    //add checkbox button
    let checkboxBtn = document.createElement("div");
    checkboxBtn.addEventListener("click", (event) => {
      readBook(checkboxBtn, i);
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
    button.addEventListener("click", (event) => {
      deleteBook(includeBook, i);
    });
    includeBook.appendChild(button).className = "btn delete";

    //add to container
    container.appendChild(includeBook).className = "add-box";
  }
}

function deleteBook(thisDiv, num) {
  //remove information in library
  console.log(num);
  let holdArray = [];
  for (let i = 0; i < myLibrary.length; i++) {
    if (i !== num) {
      holdArray.push(myLibrary[i]);
    }
  }
  myLibrary = holdArray;
  console.log(myLibrary);
  thisDiv.remove();
  book();//debug
}

function readBook(thisDiv, num) {
  if (thisDiv.classList.contains("read")) {
    thisDiv.classList.remove("read");
    thisDiv.classList.add("not-read");
    thisDiv.innerHTML = "Not Read";

    //change information in the library
    myLibrary[num].read = false;
  }
  else if (thisDiv.classList.contains("not-read")) {
    thisDiv.classList.remove("not-read");
    thisDiv.classList.add("read");
    thisDiv.innerHTML = "Read";

    //change information in the library
    myLibrary[num].read = true;
  }

}

//check for redundancy
function isRepeat(bookTitle) {

  for (let i = 0; i < myLibrary.length; i++) {
    let bookHold = myLibrary[i].title;
    if (bookHold == bookTitle) {
      return true;
    }
  }
  return false;
}
