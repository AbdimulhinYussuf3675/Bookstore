import React from 'react';
import Book from 'components/Book';
import Form from 'components/Form';

function Books() {
  return (
    <>
      <ul>
        <Book
          title="Kidagaa Kimemwozea"
          author="Ken Walibora"
        />
        <Book
          title="The River And The Source"
          author="Margret Ogola"
        />
        <Book
          title="The River Between"
          author="Ngũgĩ wa Thiong'o"
        />
        <Book
          title="Kiu"
          author="Mohamed S. Mohamen"
        />
      </ul>
      <Form />
    </>
  );
}

export default Books;
