// Note: Please do not change the name of the functions. The tests use those names to validate your code.

// find method used in the following function
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}
// sort method used in the following function
function sortAccountsByLastName(accounts) {
  accounts.sort((account1, account2) =>
    account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1
  );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const accountID = account.id;
  let count = 0;
  for (let book in books) {
    const bookRef = books[book];
    for (let borrow in bookRef.borrows) {
      const borrowID = bookRef.borrows[borrow];
      if (borrowID.id === accountID) {
        count += 1;
      }
    }
  }
  return count;
}

// helper function defined. spread operator and find method used

const merger = (books, authors) => {
  let mergedBooksAuthors = [];
  for (let i = 0; i < books.length; i++) {
    mergedBooksAuthors.push({
      ...books[i],
    });
  }
  for (let i = 0; i < mergedBooksAuthors.length; i++) {
    mergedBooksAuthors[i].author = {
      ...authors.find((author) => author.id === books[i].authorId),
    };
  }
  return mergedBooksAuthors;
};

// function used helper function and for in loop
function getBooksPossessedByAccount(account, books, authors) {
  const result = [];
  const mainData = merger(books, authors);
  for (let data in mainData) {
    let data1 = mainData[data];
    let borrow = data1.borrows;
    for (let borrow1 in borrow) {
      let borrow2 = borrow[borrow1];
      if (account.id === borrow2.id) {
        if (!borrow2.returned) {
          result.push(mainData[data]);
        }
      }
    }
  }
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
