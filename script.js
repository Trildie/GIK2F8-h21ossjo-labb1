'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});


//Orginal listner för searchField
searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

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






//Orginal rendera bookListan
function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
}

