import React from 'react';
import styles from '../../styles/checkout/Stars.module.css';
import empty_star from '../../assets/empty_star.png';

const Stars = (props) => {
  let rating = props.avg_rating;
  return (
    <span className={styles.star_container}>
      {[1, 2, 3, 4, 5].map(n => {
        rating--;
        return (
          <img className={styles.empty_star} src={empty_star} />
        )
      })}
    </span>
  );
}

export default Stars;