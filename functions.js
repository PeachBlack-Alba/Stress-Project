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
  for (var i = 0; i < books.length; i++) {
    var title; //document..
    var bookContainer = document.getElementById("bookContainer");

    var div1 = document.createElement("div");
    div1.className = "flip-card";

    var div2 = document.createElement("div");
    div2.className = "flip-card-inner";
    div1.appendChild(div2);

    var img = document.createElement("img");
    img.setAttribute("src", books[i].cover);
    div2.appendChild(img);

    var div3 = document.createElement("div");
    div3.className = "flip-card-back";

    bookContainer.appendChild(div1);
  }
}
renderCover();

//Image Propierties

function imgPropierty() {
  var elem = books[i].cover;
  elem.setAttribute("height", "200px");
  elem.setAttribute("width", "200px");
}
imgPropierty();
