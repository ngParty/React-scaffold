import * as React from 'react';
import { StatelessComponent } from 'react';
import {UISrefActive,UISref} from 'ui-router-react';

import * as styles from './MenuList.css';

export const MenuList: StatelessComponent<void> = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.navItem}>
          <UISrefActive class={styles.active}>
            <UISref to="home">
              <a>Home</a>
            </UISref>
          </UISrefActive>
        </li>
        <li className={styles.navItem}>
          <UISrefActive class={styles.active}>
            <UISref to="about">
              <a>About</a>
            </UISref>
          </UISrefActive>
        </li>
        <li className={styles.navItem}>
          <UISrefActive class={styles.active}>
            <UISref to="faq">
              <a>FAQ</a>
            </UISref>
          </UISrefActive>
        </li>
      </ul>
    </nav>
  );
};
