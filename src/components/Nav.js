import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styles/Nav.module.css';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <div className={styles.navBar}>
    <h1>
      <Link to="/" className={styles.logo}>
        Bookstore Store
      </Link>
    </h1>
    <nav>
      <ul className={styles.navLinks}>
        <li className={styles.links}>
          <Link to="/" className={styles.link}>
            Books
          </Link>
        </li>
        <li className={styles.links}>
          <Link to="/categories" className={styles.link}>
            Categories
          </Link>
        </li>

      </ul>
    </nav>
    <button type="button" className={styles.userIcon}>
      <FaUserAlt />
    </button>
  </div>
);

export default Navbar;
