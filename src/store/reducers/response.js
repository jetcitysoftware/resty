let initialState = {
    headers: {},
    body: {},
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return {...state, ...payload};
    default:
      return state;
  }
};
