//Task 7

const book = { title: "M.S.DHONI", author: "Unknown", year: 2018 };

book.getTitleAndYear = function () {
  return `${this.title} of year (${this.year})`;
};

console.log(book.getTitleAndYear());
