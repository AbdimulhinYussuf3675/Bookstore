import React from 'react';
import { useSelector } from 'react-redux';
import Book from 'components/Book';
import BookForm from 'components/Form';

const BooksList = () => {
  const books = useSelector((state) => state.books);
  return (
    <article className="bookslist-container">
      <ul className="bookslist">
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} />
          </li>
        ))}
      </ul>
      <BookForm />
    </article>
  );
};

export default BooksList;
