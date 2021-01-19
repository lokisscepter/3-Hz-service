import React from 'react';
import axios from 'axios';

import styles from './App.module.css';

import Preview from './components/Preview.jsx';
import Checkout from './components/Checkout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      styles: null,
      sizes: null,
      photos: null,
      current_style: null
    };

    this.fetchInfo = this.fetchInfo.bind(this);
    this.fetchStyles = this.fetchStyles.bind(this);
    this.fetchSizes = this.fetchSizes.bind(this);
    this.fetchPhotos = this.fetchPhotos.bind(this);
  }

  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  fetchInfo(item_id) {
    return axios.get(`api/items/${item_id}/info`)
      .then(response => {
        let item = response.data[0];
        this.setState({
          info: {
            id: item.id,
            name: item.name,
            brand: item.brand,
            avg_rating: item.avg_rating,
            num_ratings: item.num_ratings
          }
        })
      })
  }

  fetchStyles(item_id) {
    return axios.get(`api/items/${item_id}/styles`)
      .then(response => {
        let styles = response.data;
        this.setState({
          styles: styles,
          current_style: styles[0]
        })
      })
  }

  fetchSizes(item_id) {
    return axios.get(`api/items/${item_id}/sizes`)
      .then(response => {
        let sizes = response.data;
        this.setState({
          sizes: sizes
        })
      })
  }

  fetchPhotos(item_id) {
    return axios.get(`api/items/${item_id}/photos`)
      .then(response => {
        let photos = response.data;
        this.setState({
          photos: photos
        })
      })
  }

  componentDidMount() {
    let item = this.randInt(1, 12);
    this.fetchInfo(item)
      .then(() => this.fetchStyles(item))
      .then(() => this.fetchSizes(item))
      .then(() => this.fetchPhotos(item))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className={styles.app}>
        <Preview
          photos={this.state.photos}
          style={this.state.current_style}
        />
        <Checkout
          info={this.state.info}
          styles={this.state.styles}
          sizes={this.state.sizes}
        />
      </div>
    );
  }
}

export default App;