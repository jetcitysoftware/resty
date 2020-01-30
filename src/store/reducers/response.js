let initialState = {
  headers: {},
  body: {},
  loading: false,
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'LOADING':
      return { ...state, loading: true }
    case 'GET':
      return { ...state, ...payload };
    default:
      return state;
  }
};
