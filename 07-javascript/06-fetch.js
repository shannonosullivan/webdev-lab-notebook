// watched lecture video for help on this exercise
const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const addBookToDOM = (book) => {
  let element = document.createElement("div");
  let title = document.createElement("h2");
  let author = document.createElement("p");
  let released = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.released;
  released.textContent = released.textContent.substring(0, 4);
  pages.textContent = book.numberOfPages;

  element.append(title);
  element.append(author);
  element.append(released);
  element.append(pages);

  app.append(element);
};

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      data.forEach((book) => {
        console.log(book.name, book.authors[0], book.isbn);

        addBookToDOM(book);
      });

      //addBookToDOM(book);
    })
    .catch((error) => {
      console.error(error);

      let element = document.createElement("div");
      element.textContent = "An error occurred, please reload";
      app.append(element);
    })
    .finally(() => {
      let loading = document.querySelector("#loading");
      app.removeChild(loading);
    });
};

fetchData(url);
