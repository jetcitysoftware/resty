import './style/reset.css';
import './style/style.css';

import React from 'react';

import Header from './components/header';
import Footer from './components/footer';
import RESTy from './components/resty';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <RESTy />
        <Footer />
      </>
    );
  }
}

export default App;
