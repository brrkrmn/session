import React from 'react';
import styles from './CategoryModal.module.css'
import { XCircle } from 'react-feather';
import { CategoryContext } from '../CategoryProvider';
// import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';

function CategoryModal({ toggleIsModalOpen }) {
  const [newCategoryName, setNewCategoryName] = React.useState('');
  const [newCategoryColor, setNewCategoryColor] = React.useState('');
  const { addCategory } = React.useContext(CategoryContext);
  const inputRef = React.useRef();
  
  React.useEffect(() => {
    const currentlyFocusedElement = document.activeElement;
    inputRef.current.focus();
    return () => {
      currentlyFocusedElement?.focus();
    }
  }, [])

  function handleSubmit(event) {
    event.preventDefault();
    addCategory(newCategoryName, newCategoryColor);
    toggleIsModalOpen();
  }

  return (
    // <FocusLock>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} />
          <div className={styles.dialog}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label htmlFor="category-name">
                Category Name:
              </label>
              <input 
                ref={inputRef}
                id="category-name"
                value={newCategoryName}
                onChange={event => {
                  setNewCategoryName(event.target.value)
                }}
              />

              <label htmlFor="category-color">Color</label>
              <input 
                type="color" 
                id="category-color"
                value={newCategoryColor}
                onChange={event => {
                  setNewCategoryColor(event.target.value)
                }}
              />
              <button className={styles.saveButton}>
              Add Category
            </button>
            </form>

            <button onClick={toggleIsModalOpen} className={styles.closeButton}>
              <XCircle />
            </button>
          </div>
        </div>
      </RemoveScroll>
    // </ FocusLock>
  );
}

export default CategoryModal;
