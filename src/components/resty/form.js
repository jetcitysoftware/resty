import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/resty.js';

const Form = (props) => {

  let [form, setForm] = useState({});
  let [showHeaders, setHeaders] = useState(false);

  useEffect(() => {
    setForm(props.session);
  }, [props.session]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleHeaders = (e) => {
    e.preventDefault();
    setHeaders(!showHeaders)
  };

  const callAPI = (e) => {
    e.preventDefault();
    props.loading();
    props.api(form);
  };

  return (
    <>
      <form onSubmit={callAPI}>
        <section>
          <input
            type="text"
            className="wide"
            name="url"
            placeholder="URL"
            defaultValue={form.url}
            onChange={handleChange}
          />

          <div id="methods">
            <label>
              <input
                type="radio"
                name="method"
                checked={form.method === 'get'}
                value="get"
                onChange={handleChange}
              />
              <span>GET</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                checked={form.method === 'post'}
                value="post"
                onChange={handleChange}
              />
              <span>POST</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                checked={form.method === 'put'}
                value="put"
                onChange={handleChange}
              />
              <span>PUT</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                checked={form.method === 'patch'}
                value="patch"
                onChange={handleChange}
              />
              <span>PATCH</span>
            </label>
            <label>
              <input
                type="radio"
                name="method"
                checked={form.method === 'delete'}
                value="delete"
                onChange={handleChange}
              />
              <span>DELETE</span>
            </label>
            <label>
              <button type="submit">Go!</button>
            </label>
          </div>
        </section>

        <section className="deck col-2">
          <div id="body">
            <textarea
              placeholder="Raw JSON Body"
              name="requestBody"
              onChange={handleChange}
              defaultValue={form.requestBody}
              disabled={
                form.method && form.method.match(/get|delete/)
              }
            />
          </div>

          <div id="headers">
            <button onClick={toggleHeaders}>
              Headers
            </button>
            <div className={'visible-' + showHeaders}>
              <h2>Basic Authorization</h2>
              <input
                onChange={handleChange}
                name="authusername"
                placeholder="Username"
                defaultValue={form.authusername}
              />
              <input
                onChange={handleChange}
                name="authpassword"
                type="authpassword"
                placeholder="Password"
                defaultValue={form.password}
              />
            </div>
            <div className={'visible-' + showHeaders}>
              <h2>Bearer Token</h2>
              <input
                onChange={handleChange}
                type="text"
                className="wide"
                name="authtoken"
                placeholder="Bearer Token"
                defaultValue={form.authtoken}
              />
            </div>
          </div>
        </section>
      </form>
    </>
  );

};

const mapStateToProps = (state) => ({
  session: state.history.session
});

const mapDispatchToProps = (dispatch, getState) => ({
  api: (payload) => dispatch(actions.api(payload)),
  loading: () => dispatch(actions.loading())
});


export default connect(mapStateToProps, mapDispatchToProps)(Form);
