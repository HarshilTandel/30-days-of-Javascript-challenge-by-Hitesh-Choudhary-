// Book Object Creation and Access
const bookDetails = {
  title: "Wings of Fire",
  author: "APJ Abdul Kalam",
  year: 1999,

  getDetails: function () {
    return `${this.title} is written by ${this.author}`;
  },

  getTitleAndYear: function () {
    return `${this.title} of year (${this.year})`;
  },

  updateYear: function (newYear) {
    this.year = newYear;
    console.log(this);
  },
};

console.log(bookDetails);

console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);

console.log(bookDetails.getDetails());
bookDetails.updateYear(2024);

console.log(bookDetails.getTitleAndYear());

// Another book object for iteration example
let books = {
  title: "Clean Code",
  author: "Robert Cecil Martin",
  year: 1960,
};

for (let property in books) {
  console.log(`${property}: ${books[property]}`);
}

console.log("Keys:", Object.keys(books));
console.log("Values:", Object.values(books));

// Library Object with Nested Book Objects
const library = {
  name: "Internet Library",
  books: [
    {
      title: "Javascript the more love Language",
      author: "Robert",
      year: 2010,
    },
    {
      title: "Javascript is hated by more people",
      author: " Thomas",
      year: 2024,
    },
  ],
};

console.log(library);

console.log(`Library Name is: ${library.name}`);

library.books.forEach((book) => {
  console.log(`Book Title is: ${book.title}`);
});
