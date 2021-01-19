import React from 'react';

import styles from '../styles/Preview.module.css';

import Zoom from './Zoom.jsx';
import Carousel from './Carousel.jsx';

const Preview = (props) => {
  return (
    <div className={styles.preview}>
      <Zoom />
      <Carousel />
    </div>
  );
}

export default Preview;