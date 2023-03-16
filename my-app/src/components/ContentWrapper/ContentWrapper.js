import React from 'react';

import Menu from '../Menu';
import SessionPlayground from '../SessionPlayground';

import styles from './ContentWrapper.module.css';

function ContentWrapper() {
  return (
    <div className={styles.content}>
      <Menu />
      <SessionPlayground />
    </div>
  )
}

export default ContentWrapper;
