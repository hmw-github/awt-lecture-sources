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
  // TODO
}

/**
 * 2. Create an interface called Member with the following properties:
 *    - id: A unique identifier for the member.
 *    - name: The name of the member.
 *    - email: The email address of the member.
 *    - borrowedBooks: A list of books currently borrowed by the member.
 */
interface Member {
  // TODO
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
  // TODO
}

/**
 * Step 2: Use the Interfaces
 *
 * 1. Create a few example objects for each interface
 *    (e.g., three books, two members, and one loan).
 */

// TODO

/**
 * 2. Write a function borrowBook that takes a Member and a Book as parameters and:
 *    - Checks if the book is available.
 *    - If it is, adds the book to the member's borrowedBooks array and marks
 *      the book as unavailable.
 *    - If it is not, logs that the book is already borrowed.
 */

// TODO

/**
 * 3. Write a function returnBook that takes a Member and a Book and:
 *    - Removes the book from the member's borrowedBooks array.
 *    - Marks the book as available.
 *    - If the member has not borrowed the book, logs this and changes nothing.
 * Both functions should log what happened, e.g. 'Anna borrowed "Clean Code".'
 * or 'Anna returned "Clean Code".'
 */

// TODO

/**
 * Usage:
 * Use your example objects (books book1-book3, members member1 "Anna" and
 * member2 "Joe", and loan1 = Anna borrowing book1) to run the following scenario:
 *
 * 1. Anna borrows book1 (use loan1.member and loan1.book).
 * 2. Joe tries to borrow book1 -> should log that it is already borrowed.
 * 3. Joe borrows book2 and book3.
 * 4. Print the titles of the books borrowed by each member
 *    (hint: use map() on borrowedBooks).
 * 5. Anna returns book1; set loan1.returnDate to the current date.
 * 6. Anna tries to return book2, which she never borrowed
 *    -> returnBook should log that she has not borrowed it.
 * 7. Joe borrows book1 (now available again).
 * 8. Print Joe's borrowed book titles and the loan1 object.
 *
 * Expected output (titles depend on your example books):
 *   Anna borrowed "Clean Code".
 *   "Clean Code" is already borrowed.
 *   Joe borrowed "The Pragmatic Programmer".
 *   Joe borrowed "Effective TypeScript".
 *   Anna [ 'Clean Code' ]
 *   Joe [ 'The Pragmatic Programmer', 'Effective TypeScript' ]
 *   Anna returned "Clean Code".
 *   Anna has not borrowed "The Pragmatic Programmer".
 *   Joe borrowed "Clean Code".
 *   Joe [ 'The Pragmatic Programmer', 'Effective TypeScript', 'Clean Code' ]
 *   { book: {...}, member: {...}, loanDate: ..., returnDate: ... }
 */

// TODO
