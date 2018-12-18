const reducer = (state = { loaded: false }, action) => {

  switch (action.type) {

    case 'SET_INITIAL_STATE':
      return { loaded: true };
      
    default:
      return state;
  }
}

export default reducer;
