const filterReducer = (state, { type, payload }) => {
  switch (type) {
  case 'change_name':
    return {
      ...state,
      filterByName: {
        name: payload.name,
      } };
  case 'add_new_numeric_filter':
    return {
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues,
        payload,
      ],
    };
  default: return state;
  }
};

export default filterReducer;
