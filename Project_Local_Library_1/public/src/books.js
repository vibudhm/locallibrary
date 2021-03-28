// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// Using find function to get the author object
function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

// Using find function to get the book object by id
function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

// Used every, some, filter and spread operator
function partitionBooksByBorrowedStatus(books) {
  const trueReturned = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned)
  );
  const falseReturned = books.filter((book) =>
    book.borrows.some((borrow) => !borrow.returned)
  );
  const result = [];
  result.push(falseReturned);
  result.push(trueReturned);
  return result;
}

// Used find and filter methods

function getBorrowersForBook(book, accounts) {
  const borrow = book.borrows;
  const accountsbyBook = accounts.filter((account) =>
    borrow.find((status) => status.id === account.id)
  );
  for (let i = 0; i < accountsbyBook.length; i++) {
    for (let j = 0; j < borrow.length; j++) {
      if (borrow[j].id === accountsbyBook[i].id) {
        accountsbyBook[i].returned = borrow[j].returned;
      }
    }
  }
  return accountsbyBook;
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
