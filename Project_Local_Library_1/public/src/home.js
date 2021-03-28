// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// Using length property of the books array
function getTotalBooksCount(books) {
  return books.length;
}

// Using length property of the accounts array
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

// returns count of the books that are borrowed
function getBooksBorrowedCount(books) {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    const borrow = books[i].borrows;
    for (let j = 0; j < borrow.length; j++) {
      if (!borrow[j].returned) {
        count += 1;
      }
    }
  }
  return count;
}

// Used reduce, find, push, sort and splice methods in this function
function getMostCommonGenres(books) {
  const result = books.reduce((acc, book) => {
    const genre = book.genre;
    const bookInfo = acc.find((book1) => book1.name === genre);
    if (bookInfo === undefined) {
      const bookInfo1 = {
        name: genre,
        count: 1,
      };
      acc.push(bookInfo1);
    } else {
      bookInfo.count++;
    }
    return acc;
  }, []);
  result.sort((bookA, bookB) => bookB.count - bookA.count);
  result.splice(5);
  return result;
}

// Used reduce, push, sort, splice methods and length property
function getMostPopularBooks(books) {
  const result = books.reduce((acc, book) => {
    const borrow = book.borrows;
    const bookInfo = { name: book.title, count: borrow.length };
    acc.push(bookInfo);
    return acc;
  }, []);
  result.sort((bookA, bookB) => bookB.count - bookA.count);
  result.splice(5);
  return result;
}

// Used find, sort, splice
function getMostPopularAuthors(books, authors) {
  const result = [];
  for (let book in books) {
    const newBook = books[book];
    for (let i = 0; i < authors.length; i++) {
      const findAuthorName = result.find(
        (auth) =>
          auth.name === authors[i].name.first + " " + authors[i].name.last
      );
      if (!findAuthorName) {
        if (authors[i].id === newBook.authorId) {
          const popularAuthor = result.find(
            (element) =>
              element.name ===
              authors[i].name.first + " " + authors[i].name.last
          );
          if (!popularAuthor) {
            const newPopularAuthor = {
              name: authors[i].name.first + " " + authors[i].name.last,
              count: newBook.borrows.length,
            };
            result.push(newPopularAuthor);
          } else {
            popularAuthor.count = popularAuthor.count + newBook.borrows.length;
          }
        }
      }
    }
  }
  result.sort((authorA, authorB) => authorB.count - authorA.count);
  result.splice(5);
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
