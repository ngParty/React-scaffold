import * as React from 'react';
import { StatelessComponent } from 'react';
import { Link } from 'react-router';

import * as styles from './MenuList.css';

export const MenuList: StatelessComponent<void> = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.navItem}>
          <Link to="/" activeOnlyWhenExact activeClassName={styles.active}>Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" activeClassName={styles.active}>About</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/faq" activeClassName={styles.active}>FAQ</Link>
        </li>
      </ul>
    </nav>
  );
};
