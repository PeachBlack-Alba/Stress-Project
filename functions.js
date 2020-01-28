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

console.log(description);
