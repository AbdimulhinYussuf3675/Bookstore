import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/Nav.module.css';

const Nav = () => (
  <nav className={styles.navBar}>
    <h1 className={styles.logo}>Book Store</h1>
    <ul className={styles.navLinks}>
      <li className={styles.links}>
        <Link
          className={styles.link}
          to="/"
        >
          Books
        </Link>
      </li>
      <li className={styles.links}>
        <Link
          className={styles.link}
          to="/categories"
        >
          Categories
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
