import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/Nav.module.css';

const Navbar = () => (
  <nav className={styles.navBar}>
    <h1 className={styles.logo}>Bookstore Store</h1>
    <ul className={styles.navLinks}>
      <li className={styles.links}>
        <Link to="/" className={styles.link}>
          Books
        </Link>
      </li>
      <li>
        <Link to="/categories" className={styles.link}>
          Categories
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
