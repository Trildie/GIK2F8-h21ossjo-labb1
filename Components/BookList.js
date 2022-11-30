const BookList = (bookList) => {
  let html = `<ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`;
  for (let i = 0; i < bookList.length; i++) {
    html += BookListItem(bookList[i]);
  }

  html += `</ul>`;

  return html;
};

//är inte korrekt atm, skulle i detta läga skriva ut hela listan och inte bara 1 book
const BookList2 = (bookList) => {
  let html = `<ul class="book-list2 rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`;
  for (let i = 0; i < bookList.length; i++) {
    html += BookListItem2(bookList[i]);
  }

  html += `</ul>`;

  return html;
};
