import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles.css';


class BlueButton extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
  }

  render() {
    const {text, onClick} = this.props;
    
    return (
      <div 
        className={`${styles['btn']} ${styles['btn--blue']}`}
        onClick={onClick}
      >
        {text}
      </div>
    )
  }
}

export default BlueButton;