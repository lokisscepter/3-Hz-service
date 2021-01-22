import React from 'react';
import styles from '../../styles/checkout/Checkout.module.css';

import ItemInfo from './ItemInfo.jsx';
import StyleList from './StyleList.jsx';
import SizeList from './SizeList.jsx';
import Quantity from './Quantity.jsx';

const Checkout = (props) => {
  return (
    <div className={styles.container}>

      <ItemInfo info={props.info} avg_rating={props.avg_rating} num_ratings={props.num_ratings} styles={props.styles}/>

      <div className={styles.item_selector}>
        <StyleList current_style={props.current_style} styles={props.styles} clickStyle={props.clickStyle}/>
        <SizeList current_style={props.current_style} current_size={props.current_size} sizes={props.sizes} clickSize={props.clickSize}/>
        <Quantity />
      </div>

    </div>
  );
}

export default Checkout;