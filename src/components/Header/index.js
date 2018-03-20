import React from 'react';
import PropTypes from 'prop-types';

import ImageGrid from './components/ImageGrid';
import Navbar from './components/Navbar';


class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      images: this.getImages()
    }
  }

  getImages() {
    const images = [];
    for (let i = 1; i <= 12; i ++) {
      images.push(require(`./images/photo${i}.png`));
    }
    return images;
  }

  render() {
    return (
      <div>
        <ImageGrid images={this.state.images} />
        <Navbar />
      </div>
    )
  }
}

export default Header;