import React from 'react';
import CategoryPopover from '../CategoryPopover';
import Timer from '../Timer';
import TimerButtons from '../TimerButtons';
import CategoryModal from '../CategoryModal'
import useToggle from '../../hooks/useToggle';
import styles from './SessionPlayground.module.css';

function SessionPlayground() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false);
  return (
    <div className={styles.playgroundWrapper}>
        {isModalOpen && (
          <CategoryModal toggleIsModalOpen={toggleIsModalOpen}></CategoryModal>
        )}
        <CategoryPopover toggleIsModalOpen={toggleIsModalOpen} />
        <Timer />
        <TimerButtons />
    </div>
  )
}

export default SessionPlayground;
