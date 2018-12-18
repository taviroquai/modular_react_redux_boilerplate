export const changeStore = (value) => {
  const action = {
    type: 'CHANGE_STORE',
    data: value
  }
  return action; 
}