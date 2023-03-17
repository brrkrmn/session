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
          {categories.map((category) => {
            return (
              <div key={category.id}>
                <input
                  type="radio"
                  name="category"
                  id={category.id}
                  value={category.name}
                  checked={selectedCategory === category}
                  onChange={event => {
                    setSelectedCategory(event.target.value)
                  }}
                />
                <label htmlFor={category}>{category.name}</label>
              </div>  
            )
          })}

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
