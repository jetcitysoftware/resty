import './resty.css';

import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/resty.js';
import ApiForm from './form.js';
import History from './history.js';
import Response from './response.js';

class RESTy extends React.Component {

  componentDidMount() {
    this.props.loadHistory();
  }

  render() {
    return (
      <main>
        <aside>
          <History />
        </aside>
        <section className="deck">
          <ApiForm />
          <Response />
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => ({
  loadHistory: () => dispatch(actions.loadHistory())
})

export default connect(undefined, mapDispatchToProps)(RESTy);
