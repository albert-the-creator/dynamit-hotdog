import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import instagram from './images/instagram.png'


class ImageGrid extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired
  }

  render() {
    const {images} = this.props;
    if (!images) return null;

    return (
      <div>
        <div className={styles['image-grid']}>
          {
            images.map((image, i) => <img src={image} key={'head-img' + i} alt="try our amazing dogs" />)
          }
          <div className={styles['black-overlay']} />
        </div>
        <div className={styles['social-link']}>
          <img src={instagram} alt="Follow us on instagram!" />
          {`#hotdogs`}
        </div>
      </div>
    )
  }
}

export default ImageGrid;