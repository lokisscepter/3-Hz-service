import React from 'react';
import axios from 'axios';

import Preview from './components/Preview.jsx';
import Checkout from './components/Checkout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  componentDidMount() {
    let item = this.randInt(1, 12);
    axios.get(`api/items/${item}/info`)
      .then(response => {
        console.log(response.data);
      })
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: "row"}}>
        <Preview />
        <Checkout />
      </div>
    )
  }
}

export default App;