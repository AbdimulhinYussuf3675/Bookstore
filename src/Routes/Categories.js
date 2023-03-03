import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';
import styles from '../styles/Categories.module.css';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesStatus = useSelector((state) => state.categories);

  const handleClick = () => {
    dispatch(checkStatus());
  };

  return (
    <article className={styles.categoriesPage}>
      <h2>Categories Page</h2>
      <h3>
        {categoriesStatus === 'Kindly the following page is Under development' ? (
          <div className={styles.statusPopup}>
            <p>
              {categoriesStatus}
            </p>
          </div>
        ) : null}
      </h3>
      <button type="button" onClick={handleClick} className={styles.checkBtn}>
        Check Status
      </button>
    </article>
  );
};

export default Categories;
