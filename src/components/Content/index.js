import React from 'react';

import HotdogRow from './components/HotdogRow';
import BlueButton from '../Buttons/BlueButton';

import hotdog from './images/hotdog.png';
import content1 from './images/content1.png';
import content2 from './images/content2.png';
import content3 from './images/content3.png';
import styles from './styles.css';


class ContentSection extends React.Component {
  render() {
    return (
      <div>
        <div className={styles['content-section']}>
          <div>
            <img src={hotdog} alt="hotdog" />
          </div>
          <div>
            {`Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.`}
          </div>
          <BlueButton onClick={null} text="More Dogs'n Make Em Hot" />
        </div>
        <HotdogRow
          heading="Gormet All Beef Hotdogs"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          image={content1}
          imageAlign="right"
        />
        <HotdogRow
          heading="Vegan Hotdogs"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          image={content2}
          imageAlign="left"
        />
        <HotdogRow
          heading="Vegitarian Hotdogs"
          text="Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
          image={content3}
          imageAlign="right"
        />
      </div>
    )
  }
}

export default ContentSection;