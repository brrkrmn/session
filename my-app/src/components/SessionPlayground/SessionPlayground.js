import React from 'react';
import Timer from '../Timer';
import styles from './SessionPlayground.module.css';

function SessionPlayground() {
  return (
    <div className={styles.playgroundWrapper}>
      <Timer />
    </div>
  )
}

export default SessionPlayground;
