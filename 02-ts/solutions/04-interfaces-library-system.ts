/**
 * Exercise: Interfaces II - Library System
 * Imagine you are creating a library system to manage books, members, and loans.
 * You'll use TypeScript interfaces to define the structure of these entities.
 */

/**
 * Step 1: Define Interfaces
 *
 * 1. Create an interface called Book with the following properties:
 *    - title: The title of the book.
 *    - author: The author of the book.
 *    - isbn: The ISBN number of the book.
 *    - isAvailable: Indicates if the book is currently available for borrowing.
 */
interface Book {
  title: string;
  author: string;
  readonly isbn: string;
  isAvailable: boolean;
}

/**
 * 2. Create an interface called Member with the following properties:
 *    - id: A unique identifier for the member.
 *    - name: The name of the member.
 *    - email: The email address of the member.
 *    - borrowedBooks: A list of books currently borrowed by the member.
 */
interface Member {
  readonly id: number;
  name: string;
  email: string;
  borrowedBooks: Book[];
}

/**
 * 3. Create an interface called Loan with the following properties:
 *    - book: The book that is being borrowed.
 *    - member: The member who borrowed the book.
 *    - loanDate: The date the book was borrowed.
 *    - returnDate (Date or null): The date the book was returned, or null
 *      if it hasn't been returned yet.
 */
interface Loan {
  book: Book;
  member: Member;
  loanDate: Date;
  returnDate: Date | null;
}

/**
 * Step 2: Use the Interfaces
 *
 * 1. Create a few example objects for each interface
 *    (e.g., three books, two members, and one loan).
 */
const book1: Book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  isbn: "978-0132350884",
  isAvailable: true,
};
const book2: Book = {
  title: "The Pragmatic Programmer",
  author: "Andrew Hunt, David Thomas",
  isbn: "978-0135957059",
  isAvailable: true,
};
const book3: Book = {
  title: "Effective TypeScript",
  author: "Dan Vanderkam",
  isbn: "978-1098155063",
  isAvailable: true,
};

const member1: Member = {
  id: 1,
  name: "Anna",
  email: "anna@example.com",
  borrowedBooks: [],
};
const member2: Member = {
  id: 2,
  name: "Joe",
  email: "joe@example.com",
  borrowedBooks: [],
};

const loan1: Loan = {
  book: book1,
  member: member1,
  loanDate: new Date(),
  returnDate: null,
};

/**
 * 2. Write a function borrowBook that takes a Member and a Book as parameters and:
 *    - Checks if the book is available.
 *    - If it is, adds the book to the member's borrowedBooks array and marks
 *      the book as unavailable.
 *    - If it is not, logs that the book is already borrowed.
 */
function borrowBook(member: Member, book: Book): void {
  if (book.isAvailable) {
    member.borrowedBooks.push(book);
    book.isAvailable = false;
    console.log(`${member.name} borrowed "${book.title}".`);
  } else {
    console.log(`"${book.title}" is already borrowed.`);
  }
}

/**
 * 3. Write a function returnBook that takes a Member and a Book and:
 *    - Removes the book from the member's borrowedBooks array.
 *    - Marks the book as available.
 */
function returnBook(member: Member, book: Book): void {
  const index = member.borrowedBooks.findIndex((b) => b.isbn === book.isbn);
  if (index === -1) {
    console.log(`${member.name} has not borrowed "${book.title}".`);
    return;
  }
  member.borrowedBooks.splice(index, 1);
  book.isAvailable = true;
  console.log(`${member.name} returned "${book.title}".`);
}

/**
 * Usage:
 * Let the members borrow and return some books and print the results.
 */
borrowBook(loan1.member, loan1.book); // Anna borrowed "Clean Code".
borrowBook(member2, book1); // "Clean Code" is already borrowed.
borrowBook(member2, book2); // Joe borrowed "The Pragmatic Programmer".
borrowBook(member2, book3); // Joe borrowed "Effective TypeScript".

console.log(member1.name, member1.borrowedBooks.map((b) => b.title));
console.log(member2.name, member2.borrowedBooks.map((b) => b.title));

returnBook(loan1.member, loan1.book); // Anna returned "Clean Code".
loan1.returnDate = new Date();
returnBook(member1, book2); // Anna has not borrowed "The Pragmatic Programmer".

borrowBook(member2, book1); // Joe borrowed "Clean Code".
console.log(member2.name, member2.borrowedBooks.map((b) => b.title));
console.log(loan1);
