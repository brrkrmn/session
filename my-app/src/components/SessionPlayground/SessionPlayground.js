import React from 'react';
import CategoryPopover from '../CategoryPopover';
import Timer from '../Timer';
import TimerButtons from '../TimerButtons';
import CategoryModal from '../CategoryModal'
import useToggle from '../../hooks/useToggle';

import styles from './SessionPlayground.module.css';

function SessionPlayground() {
  const [categories, setCategories] = React.useState([
    {id: Math.random(), name: 'school', color:'green'},
    {id: Math.random(), name: 'code', color:'grey'},
    {id: Math.random(), name: 'health', color:'white'},

  ])
  const [isModalOpen, toggleIsModalOpen] = useToggle(true);

  function handleAddCategory(event) {
    const nextCategory = {
      id: Math.random(), 
      name: event.target.value, 
    }
    const nextCategories = [...categories, nextCategory];
    setCategories(nextCategories);
  }

  return (
    <div className={styles.playgroundWrapper}>
        {isModalOpen && (
          <CategoryModal></CategoryModal>
        )}
        <CategoryPopover handleAddCategory={handleAddCategory} categories={categories} />
        <Timer />
        <TimerButtons />
    </div>
  )
}

export default SessionPlayground;
