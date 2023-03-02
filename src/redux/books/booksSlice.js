import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => [
      ...state,
      {
        id: action.payload.id,
        title: action.payload.title,
        author: action.payload.author,
        progress: 50,
      },
    ],
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload.id),
  },
});

const { actions, reducer } = booksSlice;
export const { addBook, removeBook } = actions;

export default reducer;
