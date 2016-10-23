import * as React from 'react';
import { MenuList } from '../menu-list/MenuList';

import * as styles from './Layout.css';

interface Props extends React.DOMAttributes<any> {}

export const Layout: React.StatelessComponent<Props> = ( { children } ) => (
  <div className={styles.container}>
    <header className={styles.header}>
      <h4>React Scaffold</h4>
    </header>
    <div className={styles.contentWrapper}>
      <div className={styles.left}>
        <MenuList/>
      </div>
      <main className={styles.content}>
        {children}
      </main>
    </div>
    <footer className={styles.footer}>
      &copy; ngPartyCz {new Date().getFullYear()}
    </footer>
  </div>
);

