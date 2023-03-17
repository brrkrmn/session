import React from 'react';
import styles from './CategoryModal.module.css'
import { XCircle } from 'react-feather';

function CategoryModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop}></div>
      <div className={styles.dialog}>
        <form className={styles.form}>
          <label htmlFor="category-name">
            Category Name:
          </label>
          <input 
            id="category-name"
          />

          <label htmlFor="category-color">Color</label>
          <input type="color" />
        </form>

        <button className={styles.closeButton}>
          <XCircle />
        </button>

        <button className={styles.saveButton}>
          Add Category
        </button>
      </div>
    </div>
  );
}

export default CategoryModal;
