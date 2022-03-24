const filterReducer = (state, action) => {
  switch (action.type) {
  case 'change_name':
    return {
      ...state,
      filterByName: {
        name: action.payload.name,
      } };
  default: return state;
  }
};

export default filterReducer;
