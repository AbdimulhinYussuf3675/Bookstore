import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from 'components/Book';
import BookForm from 'components/Form';
import { getAllBooks } from '../redux/book/booksSlice';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

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
