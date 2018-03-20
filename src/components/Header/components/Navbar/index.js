import React from 'react';

import styles from './styles.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className={styles['navbar-section']}>
        <div>Menu</div>
        <div>Catering</div>
        <div>About Us</div>
        <div>Contact</div>
      </div>
    )
  }
}

export default Navbar;