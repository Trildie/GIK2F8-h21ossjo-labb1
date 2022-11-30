/* const BookListItem = (book) => {
  let html = `<li ID=${book.id}
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
              ${book.author} - ${book.title}    
              </li>`;
  return html;
}; */


//element.addEventListener("click", function(){ alert("Hello World!"); });
/* ID.addEventListener("onmouseover", function(){ document.getElementById(1); });
document.getElementById("book.id").addEventListener("onmouseover", displayDate); */
/* document.getElementById("ID").addEventListener("onmouseover", displayDate); */
const BookListItem = (book) => {
  
  let html = `<li ID=${book.id}
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                
              ${book.author} - ${book.title}    
              </li>`;
        
  
  return html;
};
//Skapa en lystnare i html först.







/*Här får jag nu med alla värden, title, authoer, id, coverImage länken osv.. */
const BookListItem2 = (book) => {
  let html = `<li
                class="book-list__item2 mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
              ${book.author} - ${book.title} - ID :${book.id} - ${book.coverImage} - Number of Pages ${book.pages} - Release Data ${book.releaseDate}   
              </li>`;
  return html;
};

