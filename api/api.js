const url = 'https://gik2f8-labs.herokuapp.com/books';

async function getAll() {
  const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);

  return result;
}


//En async function som tar in ID, det id är en siffra som används för att hämta rätt book genom att lägga den rätt i url.
//Sedan kör vi funktionen renderBookInformation och skickar in resultatet i den, där sker utskriften.
//Själva delen return result gör inget då vi använder inte den datan.
//Det enda den används för nu är att skriva ut i consol så jag låter den vara så man enklare kan se det när man testar.
async function getBookById(id) {

  const result = await fetch(url+ "/" + id)
    .then((result) => result.json())
    .catch((e) => e);
    renderBookInformation(result)
  return result;
}
