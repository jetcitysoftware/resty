import React from 'react';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';

const Response = (props) => {

  let loading = 'loading-' + props.response.loading.toString();

  return (
    <div id="json" className={loading}>
      <ReactJson
        name="Headers"
        enableClipboard={false}
        collapsed={true}
        src={props.response.headers}
      />
      <ReactJson
        name="Response"
        enableClipboard={false}
        collapsed={false}
        src={props.response.body}
      />
    </div >
  );

};

const mapStateToProps = (state) => ({
  response: state.response
})

export default connect(mapStateToProps)(Response);
