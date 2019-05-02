import './style/reset.css';
import './style/style.css';

import React from 'react';
import { connect } from 'react-redux';

import Header from './components/header/';
import Footer from './components/footer/';
import RESTy from './components/resty';

import * as actions from './store/actions/api.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <RESTy />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  api: state.api,
});

const mapDispatchToprops = (dispatch, getState) => ({
  get: payload => dispatch(actions.get(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToprops,
)(App);
