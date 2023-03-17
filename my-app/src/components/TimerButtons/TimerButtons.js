import React from 'react';
import { TimerContext } from '../TimerProvider';
import { Pause, Play, Square } from 'react-feather';
import styles from './TimerButtons.module.css';

function TimerButtons() {
  const { handlePauseTimer, handleStopTimer, isPaused } = React.useContext(TimerContext);
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={handlePauseTimer}>
        {isPaused 
          ? <Play />
          : <Pause />
        }
      </button>
      <button className={styles.button} onClick={handleStopTimer}>
        <Square />
      </button>
    </div>
  );
}

export default TimerButtons;
