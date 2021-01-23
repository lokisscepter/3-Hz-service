import React from 'react';
import axios from 'axios';

import styles from './App.module.css';

import ImagePreview from './components/preview/ImagePreview.jsx';
import Checkout from './components/checkout/Checkout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {
        id: '',
        name: '',
        brand: '',
        avg_rating: '',
        num_ratings: ''
      },
      styles: [],
      sizes: [],
      photos: [],
      current_style: {},
      current_size: '',
      quantity: 1,
      carousel_rotation: 0,
      c_i: 0,
      preview: 'hidden',
      posX: 0,
      posY: 0
    };

    this.fetchInfo = this.fetchInfo.bind(this);
    this.fetchStyles = this.fetchStyles.bind(this);
    this.fetchSizes = this.fetchSizes.bind(this);
    this.fetchPhotos = this.fetchPhotos.bind(this);

    this.clickStyle = this.clickStyle.bind(this);
    this.clickSize = this.clickSize.bind(this);

    this.decQuantity = this.decQuantity.bind(this);
    this.incQuantity = this.incQuantity.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);

    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
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
    let item = this.randInt(1, 100);
    let state = this.state;
    this.fetchInfo(item)
      .then(() => this.fetchStyles(item))
      .then(() => this.fetchSizes(item))
      .then(() => this.fetchPhotos(item))
      .catch(err => console.log(err));
  }

  clickStyle(style) {
    this.setState({
      current_style: style
    });
  }

  clickSize(size) {
    this.setState({
      current_size: size
    });
  }

  decQuantity() {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1
      })
    }
  }

  incQuantity() {
    this.setState({
      quantity: this.state.quantity + 1
    })
  }

  changeQuantity(e) {
    let val = Number(e.target.value);
    if (!isNaN(val)) {
      this.setState({
        quantity: val
      })
    }
  }

  zoomIn(e) {
    //console.log('in');
    //console.log(e);
    let posX = e.nativeEvent.offsetX;
    let posY = e.nativeEvent.offsetY;
    this.setState({
      preview: 'visible',
      posX: posX,
      posY: posY
    })
  }

  zoomOut(e) {
    //console.log('out');
    this.setState({
      preview: 'hidden'
    })
  }

  render() {
    return (
      <div className={styles.app}>
        <ImagePreview
          photos={this.state.photos}
          current_style={this.state.current_style}
          carousel_rotation={this.state.carousel_rotation}
          c_i={this.state.c_i}
          zoomIn={this.zoomIn}
          zoomOut={this.zoomOut}
        />
        <Checkout
          photos={this.state.photos}
          c_i={this.state.c_i}
          preview={this.state.preview}
          posX={this.state.posX}
          posY={this.state.posY}

          info={this.state.info}
          styles={this.state.styles}
          sizes={this.state.sizes}
          current_style={this.state.current_style}
          clickStyle={this.clickStyle}
          current_size={this.state.current_size}
          clickSize={this.clickSize}
          quantity={this.state.quantity}
          decQuantity={this.decQuantity}
          incQuantity={this.incQuantity}
          changeQuantity={this.changeQuantity}
        />
      </div>
    );
  }
}

export default App;