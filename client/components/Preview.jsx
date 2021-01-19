import React from 'react';

import Zoom from './Zoom.jsx';
import Carousel from './Carousel.jsx';

const Preview = (props) => {
  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <Zoom />
      <Carousel />
    </div>
  );
}

export default Preview;