import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from 'components/Nav';
import Books from 'Routes/Books';
import Categories from 'Routes/Categories';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>

  </BrowserRouter>
);

export default App;
