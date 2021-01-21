import React from 'react';
import styles from '../styles/Checkout.module.css';

import Stars from './Stars.jsx';
import Style from './Style.jsx';
import Size from './Size.jsx';

const Checkout = (props) => {
  let avg_rating = parseFloat(props.info.avg_rating.slice(0, 1) + '.' + props.info.avg_rating.slice(1, 2)).toFixed(1);

  let min_price = Math.min.apply(Math, props.styles.map((style) => style.price));
  min_price = min_price.toString();
  min_price = parseFloat(min_price.slice(0, min_price.length - 2) + '.' + min_price.slice(min_price.length - 2, min_price.length)).toFixed(2);

  let max_price = Math.max.apply(Math, props.styles.map((style) => style.price));
  max_price = max_price.toString();
  max_price = parseFloat(max_price.slice(0, max_price.length - 2) + '.' + max_price.slice(max_price.length - 2, max_price.length)).toFixed(2);

  let price_string;

  if (min_price === max_price) {
    price_string = '$' + min_price;
  } else {
    price_string = '$' + min_price + ' - $' + max_price;
  }

  let all_sizes = ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];
  let available_sizes = props.sizes.filter(size => size.style_id === props.current_style.id).map(size => size.size);

  return (
    <div className={styles.container}>
      {/* item info */}
      <div>
        <span className={styles.brand}>{props.info.brand}</span>
        <div className={styles.name}>{props.info.name}</div>
        <div>
          <Stars />
          <span className={styles.avg_rating}>{avg_rating}</span>
          <span className={styles.num_ratings}>({props.info.num_ratings})</span>
          <span className={styles.item_number}>Item # {props.info.id.toString().padStart(6, '0')}</span>
        </div>
        <div className={styles.price}>{price_string}</div>
      </div>

      <div className={styles.item_selector}>
        <div className={styles.style_list}>
          <span>Color: {props.current_style.color}</span>
          {props.styles.map(style => {
            return (
              <Style style={style} current_style={props.current_style} key={style.id} clickStyle={props.clickStyle}/>
            );
          })}
        </div>
        <span>Size: {props.current_size}</span>
        <div className={styles.size_list}>
          {all_sizes.map(size => {
            if (available_sizes.indexOf(size) !== -1) {
              return (<Size size={size} available={true} clickSize={props.clickSize} current_size={props.current_size}/>)
            } else {
              return (<Size size={size} available={false} current_size={props.current_size}/>)
            }
          })}
        </div>
        <div>Quantity</div>
      </div>

    </div>
  );
}

export default Checkout;