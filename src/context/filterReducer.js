import {
  FILTER_CHANGE_NAME,
  FILTER_ADD_NUMERIC,
  FILTER_REMOVE_ALL_NUMERIC,
  FILTER_REMOVE_NUMERIC,
} from '../types/actionTypes';

const filterReducer = (state, { type, payload }) => {
  switch (type) {
  case FILTER_CHANGE_NAME:
    return {
      ...state,
      filterByName: {
        name: payload.name,
      } };
  case FILTER_ADD_NUMERIC:
    return {
      ...state,
      filterByNumericValues: [
        ...state.filterByNumericValues,
        payload,
      ],
    };
  case FILTER_REMOVE_NUMERIC:
    return {
      ...state,
      filterByNumericValues: state.filterByNumericValues
        .filter(({ column }) => column !== payload.column),
    };
  case FILTER_REMOVE_ALL_NUMERIC:
    return {
      ...state,
      filterByNumericValues: [],
    };
  default: return state;
  }
};

export default filterReducer;
