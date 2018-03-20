import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';


class HotdogRow extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    imageAlign: PropTypes.string.isRequired
  }

  render() {
    const {image, heading, text, imageAlign} = this.props;
    const imageAlignClass = imageAlign === 'right' ? styles['align-right']: styles['align-left'];
    const textAlignClass = imageAlignClass === styles['align-right'] ? styles['align-left']: styles['align-right'];

    return(
      <div className={styles['hotdog-row']}>
        <div className={imageAlignClass}>
          <img src={image} />
        </div>
        <div className={textAlignClass}>
          <div>
            <div className={styles.line} />
            <h3>{heading}</h3>
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
    )
  }
}

export default HotdogRow;