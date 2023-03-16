import React from 'react';
import MenuItem from '../MenuItem';
import styles from './Menu.module.css';
import {Circle, Settings, BarChart2} from 'react-feather';

const MENU_ITEMS = ['Home', 'Statistics', 'Settings'];
const ICON_MAP = {
  'Home': Circle,
  'Statistics': BarChart2,
  'Settings': Settings,
};
function Menu() {
  return (
    <div className={styles.menu}>
      {MENU_ITEMS.map((item) => {
        return (
          <MenuItem icon={ICON_MAP[item]} key={item} />
          )
        })
      }
    </div>
  )

}

export default Menu;
