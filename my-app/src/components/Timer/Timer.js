import React from 'react';
import { TimerContext } from '../TimerProvider';
import styles from './Timer.module.css';

function Timer() {
  const { count } = React.useContext(TimerContext);
  return (
    <div className={styles.timer}>
      {count}
    </div>  
  );
}

export default Timer;
