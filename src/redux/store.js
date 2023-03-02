import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/booksSlice';
import categoryReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoryReducer,
  },
});
