import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BooksList from 'Routes/Books';
import Navbar from './components/Nav';
import Categories from './Routes/Categories';
import './styles/App.css';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<BooksList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
