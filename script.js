'use strict';

let bookList = [];
let boook;

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});


//Orginal listner för searchField
searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author}) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

//Org backup
//Orginal listner för searchField
/* searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
); */

//När man för över musen
console.log(document.getElementById(1))
/* document.getElementById(1).addEventListener('onmouseenter', (e) =>
  rendBookInfo(
    bookList.filter(({ id }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        id
      );
    })
  )
); */

function renderBookInformation(FoundBookId){
  let bookInfo = `<div ID='bookInfoDivId' class=" rounded-md border-2 border-blue-400 bg-white w-200 mx-auto absolute pointer-events-none"> 
      <h2> Author ${FoundBookId.author}</h2>    
      <p>Book : ${FoundBookId.title} 
      <br>Number of pages : ${FoundBookId.pages}
      <br>Release date : ${FoundBookId.releaseDate}
      </p>
      <img src="${FoundBookId.coverImage}" alt="Book Cover" width="50" height="50">
        
        </div>`
      root.insertAdjacentHTML('beforebegin', bookInfo);
}




//Orginal rendera bookListan
function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  //Loopar igenom book-list_item för varje bookID och gör en eventListner på varje.
  //Skapar en div med ett ID=bookInfoDivID
  //Sedan skapars h1 tag och p-tag som skriver ut informationen om boken.
  //Sist läggs bilden av boken in.
  for (let bookId of document.getElementsByClassName("book-list__item")){
    bookId.addEventListener("mouseenter", (e) => {
      
      getBookById(bookId.getAttribute("ID")).then((apiBooks) => (boook = apiBooks));
      console.log(boook)
      /* let FoundBookId = boook; */
      /* let bookInfo = `<div ID='bookInfoDivId' class=" rounded-md border-2 border-blue-400 bg-white w-200 mx-auto absolute pointer-events-none"> 
      <h2> Author ${FoundBookId.author}</h2>    
      <p>Book : ${FoundBookId.title} 
      <br>Number of pages : ${FoundBookId.pages}
      <br>Release date : ${FoundBookId.releaseDate}
      </p>
      <img src="${FoundBookId.coverImage}" alt="Book Cover" width="50" height="50">
        
        </div>`
      root.insertAdjacentHTML('beforebegin', bookInfo); */
      

    })
    bookId.addEventListener("mouseleave", (e) => {
      document.getElementById("bookInfoDivId").remove()
      //Tar bort elementID bookInfoDivId så den försvinner när musen lämnar.
    })
  }

}

//Sätta in utskriften i en egen funktion, då den nu försöker köra saker innan datan är hämtad


//Fungerande med bilder mm
/* function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  //Loopar igenom book-list_item för varje bookID och gör en eventListner på varje.
  //Skapar en div med ett ID=bookInfoDivID
  //Sedan skapars h1 tag och p-tag som skriver ut informationen om boken.
  //Sist läggs bilden av boken in.
  for (let bookId of document.getElementsByClassName("book-list__item")){
    bookId.addEventListener("mouseenter", (e) => {
      let bookInfo = `<div ID='bookInfoDivId' class=" rounded-md border-2 border-blue-400 bg-white w-200 mx-auto absolute pointer-events-none"> 
      <h2> Author ${bookId.getAttribute("Author")}</h2>    
      <p>Book : ${bookId.getAttribute("Title")} 
      <br>Number of pages : ${bookId.getAttribute("numPages")}
      <br>Release date : ${bookId.getAttribute("RelDate")}
      </p>
      <img src="${bookId.getAttribute("CoverImg")}" alt="Book Cover" width="50" height="50">
        
        </div>`
      root.insertAdjacentHTML('beforebegin', bookInfo);
      

    })
    bookId.addEventListener("mouseleave", (e) => {
      document.getElementById("bookInfoDivId").remove()
      //Tar bort elementID bookInfoDivId så den försvinner när musen lämnar.
    })
  }

} */



//backup av den fungerande delen.
/* function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  
  for (let bookId of document.getElementsByClassName("book-list__item")){
    bookId.addEventListener("mouseenter", (e) => {
      console.log("TESTTTT" + bookId.getAttribute("ID"))
      console.log("pages :" + bookId.getAttribute("numPages"))
      console.log("release date: " + bookId.getAttribute("RelDate"))
      console.log(bookList.pages)
      

    })
    bookId.addEventListener("mouseleave", (e) => {
      console.log("mupp skola")
    })
  }

} */
