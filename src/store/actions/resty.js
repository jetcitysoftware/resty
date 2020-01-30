/*
    return fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data),
    })



 */
export const api = payload => dispatch => {

  const cache = 'no-cache';
  const referrer = 'no-referrer';
  const method = payload.method;
  const body = payload.requestBody;

  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  if (!!payload.authusername && !!payload.authpassword) {
    let encrypted = btoa(`${payload.authusername}:${payload.authpassword}`);
    headers.append('Authorization', `Basic ${encrypted}`);
  }
  if (!!payload.authtoken) {
    headers.append('Authorization', `Bearer ${payload.authtoken}`);
  }

  return fetch(payload.url, {
    method, cache, referrer, headers, body
  })
    .then(response => {
      let headers = {};
      for (let header of response.headers) {
        headers[header[0]] = header[1];
      }
      return response.json()
        .then(body => {
          const loading = false;
          dispatch(historyAction(payload));
          dispatch(apiAction(payload.method, { headers, body, loading }));
        });
    });
};


export const loadHistory = () => {
  return {
    type: 'LOAD_HISTORY',
    payload: JSON.parse(localStorage.getItem('history')),
  };
};

export const openSession = (key) => {
  return {
    type: 'OPEN_SESSION',
    payload: key,
  };
};

const historyAction = history => {
  return {
    type: 'SAVE_HISTORY',
    payload: history,
  };
};

const apiAction = (method, data) => {
  return {
    type: method.toUpperCase(),
    payload: data,
  };
};

export const loading = () => {
  return {
    type: 'LOADING',
  }
}
