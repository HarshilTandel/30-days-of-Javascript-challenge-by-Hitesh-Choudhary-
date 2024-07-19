// Task 5

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

// Task 6

console.log(`Library Name is: ${library.name}`);

library.books.forEach((book) => {
  console.log(`Book Title is: ${book.title}`);
});
