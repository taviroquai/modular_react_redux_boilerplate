export const bootState = () => {
  return dispatch => {

    setTimeout(() => {
      const action = {
        type: 'SET_INITIAL_STATE',
        example: {
          data: 'data from server'
        }
      }
      dispatch(action)
    }, 2000);
    
  }
}
