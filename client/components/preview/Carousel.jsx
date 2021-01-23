import React from 'react';
import styles from '../../styles/preview/Carousel.module.css';

const Carousel = (props) => {
  return (
    <div>
      <div className={styles.container}>
        {props.photos.map(photo => (
          <div className={styles.image_wrapper}>
            <img className={styles.image} src={photo.url_thumbnail}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;