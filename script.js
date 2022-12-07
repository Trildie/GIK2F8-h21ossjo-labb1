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

//Funktionen som renderar ut informationen om booken.
//Skapar en div och i den h2 och p-tag som vi sätter in vad som ska skrivas ut.
//Samt så läser vi in bilden.
//style="z-index: 5 gör att den ritas ut framför det andra.
//Absolute för den ska lägga sig högst upp utan att peta ner andra saker på sidan, samt pointer-events-none så att om man drar musen över så ska den ignoreras.
//Detta för om jag hade fått informationen att skriva ut sig mitt över listan.
function renderBookInformation(FoundBookId){
  let bookInfo = `<div ID='bookInfoDivId' class=" rounded-md border-2 border-blue-400 bg-white w-400px h-300px mx-auto absolute pointer-events-none" style="z-index: 5"> 
      <h2> Author ${FoundBookId.author}</h2>    
      <p>Book : ${FoundBookId.title} 
      <br>Number of pages : ${FoundBookId.pages}
      <br>Release date : ${FoundBookId.releaseDate}
      </p>
      <img src="${FoundBookId.coverImage}" alt="Book Cover" width="70px" height="100px">
        
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
  //kallar på api asyc funktionen och skickar in IDt på boken som event listnern triggade på.
  //Utskriften av booken sköts av den funktionen genom att kalla på en annan funktion, då hinner den hämta datan innan den skriver ut.
  //consol loggar ut boook för att se att den kör.
  for (let bookId of document.getElementsByClassName("book-list__item")){
    bookId.addEventListener("mouseenter", (e) => {
      
      getBookById(bookId.getAttribute("ID")).then((apiBooks) => (boook = apiBooks));
      console.log(boook)
      //Kallar på getBookById som är en asyncron funktion, så den hämtar bara 1 specifik bok.
    })
    bookId.addEventListener("mouseleave", (e) => {
      document.getElementById("bookInfoDivId").remove()
      //Tar bort elementID bookInfoDivId så den försvinner när musen lämnar.
    })
  }
}

