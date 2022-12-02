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
//document.getElementById("myBtn").addEventListener("click", displayDate);

const BookListItem = (book) => {
  
  let html = `<li ID=${book.id}
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                
              ${book.author} - ${book.title}    
              </li>`;
        
  return html;
};
//Skapa en lystnare i html först.



/*   const BookListItem = (book) => {
  const para = document.createElement("li");
  para.innerHTML = `<li ID=${book.id}
  class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-2000 last:border-b-0 border-b border-indigo-700 cursor-pointer">

  ${book.author} - ${book.title}    
  </li>`;
  para.addEventListener("onmouseover", (e) => {
    console.log(test2)
  }); 
  return para.outerHTML;
  
  }; */

/* const para = document.createElement("li");
para.innerHTML = `<li ID=${book.id}
  class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-2000 last:border-b-0 border-b border-indigo-700 cursor-pointer">

  ${book.author} - ${book.title}    
  </li>`;
document.body.appendChild(para);
para.addEventListener("onmouseover");
return para.html; */

/* const BookListItem3 = (book) => {
  let egetEl
  html.addEventListener("onmouseover", console.log("HEJ"));
  let html = `<li ID=${book.id}
                class="book-list__item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                
              ${book.author} - ${book.title}    
              </li>`; */
  /* html.addEventListener("click", (e) => {
    document.body.style.backgroundColor="black";
  }); */
  /* const el = document.getElementById(html)
  html.addEventListener("onmouseover", (e) => 
    renderBookList(html.id)); */
    //return html.id;

  


  /* egetEl.define("book_List", html)
  egetEl.addEventListener("onmouseover", console.log("HEJ")) */

/*   return html;

}; */




/*Här får jag nu med alla värden, title, authoer, id, coverImage länken osv.. */
const BookListItem2 = (book) => {
  let html = `<li
                class="book-list__item2 mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
              ${book.author} - ${book.title} - ID :${book.id} - ${book.coverImage} - Number of Pages ${book.pages} - Release Data ${book.releaseDate}   
              </li>`;
  return html;
};

