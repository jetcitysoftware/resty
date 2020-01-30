import React from 'react';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';

const Response = (props) => {

  console.log('response', props.response);
  return (
    <div id="json">
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
    </div>
  );

};

const mapStateToProps = (state) => ({
  response: state.response
})

export default connect(mapStateToProps)(Response);
