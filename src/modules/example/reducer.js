
const reducer = (state = {}, action) => {

  switch (action.type) {

    case 'SET_INITIAL_STATE':
      return action.example;

    case 'CHANGE_STORE':
      return {
        ...state,
        data: action.data
      };

    default:
      return state;
  }
}

export default reducer;
