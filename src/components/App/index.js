import React from 'react';

import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

import './styles.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;