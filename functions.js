//Get Elements

//Books
let books = [];
function getAllBooks() {
  for (i = 0; i < data.books.length; i++) {
    books.push(data.books[i]);
  }
}
getAllBooks();

//Cover
let cover = [];
function getAllCover() {
  for (i = 0; i < books.length; i++) {
    cover.push(books[i].cover);
  }
}
getAllCover();

//Detail
let detail = [];
function getAllDetail() {
  for (i = 0; i < books.length; i++) {
    detail.push(books[i].detail);
  }
}
getAllDetail();

//Description
let description = [];
function getAllDescription() {
  for (i = 0; i < books.length; i++) {
    description.push(books[i].description);
  }
}
getAllDescription();

// Render cover

function renderCover() {
  var bookContainer = document.getElementById("bookContainer");
  for (var i = 0; i < books.length; i++) {
    var title; //document..

    var div1 = document.createElement("div");
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

    div2.appendChild(div3);
    div2.appendChild(div4);
    bookContainer.appendChild(div1);
  }
}
renderCover();
