import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../../store/actions/resty.js';

const History = (props) => {

  return (
    <>
      <h2>History</h2>
      <ul id="history">
      {props.history && props.history.queries &&
          Object.keys(props.history.queries).map(key => (
            <li key={key} id={key} onClick={() => props.openSession(key)}>
              <span><strong>{props.history.queries[key].method}</strong></span>
              <span>{props.history.queries[key].host}</span>
              <span>{props.history.queries[key].path}</span>
            </li>
          ))}
        </ul>
      </>
  );

};

const mapStateToProps = (state) => ({
  history: state.history
});

const mapDispatchToProps = (dispatch,getState) => ({
  openSession: (key) => dispatch( actions.openSession(key) )
});

export default connect(mapStateToProps,mapDispatchToProps)(History);
