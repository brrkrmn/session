import React from 'react';
import styles from '../Menu/Menu.module.css'
function MenuItem({ icon: Icon }) {
  return (
    <button className={styles.button} >
      <Icon className={styles.icon} />
      </button>
  )
}

export default MenuItem;
