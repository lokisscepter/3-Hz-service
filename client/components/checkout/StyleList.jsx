import React from 'react';
import styles from '../../styles/checkout/Style.module.css';

import Style from './Style.jsx';

const StyleList = (props) => {

  return (
    <div className={styles.style_list}>
      <span className={styles.style_text}>Color: {props.current_style.color}</span>
      {props.styles.map(style => {
        return (
          <Style style={style} current_style={props.current_style} key={style.id} clickStyle={props.clickStyle}/>
        );
      })}
    </div>
  );
}

export default StyleList;