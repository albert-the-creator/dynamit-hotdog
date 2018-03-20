import React from 'react';

import styles from './styles.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <div>
          {`® 2016 Dirty Dogs all rights reserved`}
        </div>
        <div>
          <span>{`274 Marconi Blvd. Columbus, Ohio 43215`}</span>
          <span>{`614.538.0095`}</span>
          <span>{`Contact Us`}</span>
        </div>
      </div>
    )
  }
}

export default Footer;