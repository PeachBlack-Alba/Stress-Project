//Get Elements

//Books
let allBooks = [];
function getAllBooks() {
  for (i = 0; i < data.books.length; i++) {
    allBooks.push(data.books[i]);
  }
  renderCover(allBooks); // we want to show allbooks at the begging of the screen
}
getAllBooks();

// Render cover

function renderCover(books) {
  var bookContainer = document.getElementById("bookContainer");
  bookContainer.innerHTML = ""; // clean the bookcontainer at the begginig of this function so we don't get the results more than onces
  for (var i = 0; i < books.length; i++) {
    var div1 = document.createElement("div");
    div1.id = i;
    div1.className = "flip-card";

    var div2 = document.createElement("div");
    div2.className = "flip-card-inner";
    div1.appendChild(div2);

    var div3 = document.createElement("div");
    div3.className = "flip-card-front";

    var img = document.createElement("img");
    img.setAttribute("src", books[i].cover);
    img.setAttribute("height", "auto");
    img.setAttribute("width", "200px");
    div3.appendChild(img);

    var div4 = document.createElement("div");
    div4.className = "flip-card-back";

    let h1 = document.createElement("h1");
    let title = allBooks[i].title;

    h1.innerHTML = title;
    div4.appendChild(h1);

    let p = document.createElement("p");
    let description = allBooks[i].title;
    p.innerHTML = description;

    div4.appendChild(p);

    let button = document.createElement("button");
    button.innerHTML = "Más información";
    div4.appendChild(button);

    div2.appendChild(div3);
    div2.appendChild(div4);
    bookContainer.appendChild(div1);
  } // we already called this function at the top
}

// Search button

function filter() {
  let input = document.getElementById("searchbar").value;
  console.log(input.toLowerCase());
  let lowerInput = input.toLowerCase(); // we make it lowercase sensitive t = T
  let filteredBooks = []; // new empty array
  for (i = 0; i < allBooks.length; i++) {
    let title = allBooks[i].title;

    if (title.toLowerCase().includes(lowerInput)) {
      // if the input matches with the title, send it to the filteredBooks array
      filteredBooks.push(allBooks[i]); // we push the hole book, not just the title
    }
  }
  renderCover(filteredBooks); // Render the function above with the filteredBooks array
}
