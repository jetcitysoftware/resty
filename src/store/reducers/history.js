import md5 from 'md5';

let initialState = {
  queries: {},
  session: {},
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SAVE_HISTORY':
      let entry = getHistoryEntry(payload);
      let queries = { ...state.queries, ...entry };
      saveHistory(queries);
      return { ...state, queries };
    case 'LOAD_HISTORY':
      return { ...state, queries: payload };
    case 'OPEN_SESSION':
      console.log('opening');
      return { ...state, session: state.queries[payload] }
    default:
      return state;
  }
};

const saveHistory = (queries) => {
  localStorage.setItem('history', JSON.stringify(queries));
}

const getHistoryEntry = (data) => {
  let url = new URL(data.url);
  let lastRun = {
    host: url.hostname,
    path: url.pathname,
    url: data.url,
    method: data.method,
    requestBody: data.requestBody,
    authusername: data.authusername,
    authpassword: data.authpassword,
    authtoken: data.authtoken,
    body: {},
    header: {},
  };
  let key = md5(JSON.stringify(lastRun));
  return { [key]: lastRun };
}
