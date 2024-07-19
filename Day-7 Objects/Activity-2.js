//Task-3

const book = { title: "M.S.DHONI", author: "Unknown", year: 2018 };

book.get = function () {
  return `${this.title} is written by ${this.author}`;
};

console.log(book.get());

//Task-4

let books = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  updateYear: function (newYear) {
    this.year = newYear;
    console.log(this);
  },
};
books.updateYear(2024);
