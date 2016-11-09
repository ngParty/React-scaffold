import * as React from 'react';

import * as styles from './Home.css';
import img from '../../assets/img/ngPartyCZ_01.png';
import svg from '../../assets/img/ngPartyCz_02.svg';
const imgByAssetsPath = '../../assets/img/ngPartyCZ_01.png';

const Home = () => {
  return (
    <div>
      <h2 className={styles.header}>Home</h2>
      <div>Hello from Sofia!</div>
      <section>
        <div className={styles.myLogo} />
        <img width={150} src={svg} alt="ngParty logo via SVG"/>
        <img width={150} src={img} alt="ngParty logo via IMG"/>
        <img  width={250} src={imgByAssetsPath} alt="ngParty Logo via Path"/>
      </section>
    </div>
  );
};

export default Home;
