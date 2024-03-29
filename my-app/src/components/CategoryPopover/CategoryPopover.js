import React from 'react';
import { ChevronDown, XCircle, Plus } from 'react-feather';
import * as Popover from '@radix-ui/react-popover';
import { CategoryContext } from '../CategoryProvider';
import styles from './Popover.module.css';


function CategoryPopover({ toggleIsModalOpen }) {
  const { categories } = React.useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = React.useState();
  
  return (
    <Popover.Root>
      <Popover.Trigger className={styles.trigger}>
        <span>Category</span>
        <ChevronDown />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.content}>
          <form className={styles.form}>
            <legend className={styles.legend}>Select Category</legend>
            {categories.map((category) => {
              return (
                <div className={styles.categoryItem} key={category.id}>
                  <input
                    className={styles.input}
                    type="radio"
                    name="category"
                    id={category.id}
                    value={category.name}
                    checked={selectedCategory === category.name}
                    onChange={event => {
                      setSelectedCategory(event.target.value)
                    }}
                  />
                  <label htmlFor={category} className={styles.label}>{category.name}</label>
                </div>  
              )
            })}
          </form>
          

          <Popover.Close className={styles.closeButton}>
            <XCircle />
          </Popover.Close>

          <button onClick={toggleIsModalOpen} className={styles.addButton}>
            <Plus />
          </button>

          <Popover.Arrow className={styles.arrow} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

export default CategoryPopover;
