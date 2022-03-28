import { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetsProvider';
import {
  FILTER_CHANGE_NAME,
  FILTER_ADD_NUMERIC,
  FILTER_REMOVE_NUMERIC,
  FILTER_REMOVE_ALL_NUMERIC,
} from '../types/actionTypes';

export default function useFilters() {
  const { filters, dispatch } = useContext(PlanetsContext);
  const changeFilterName = (name) => {
    dispatch({
      type: FILTER_CHANGE_NAME,
      payload: { name },
    });
  };

  const saveNumericFilter = (filterValues) => {
    dispatch({
      type: FILTER_ADD_NUMERIC,
      payload: { ...filterValues },
    });
  };

  const removeNumericFilter = (filterColumn) => {
    dispatch({
      type: FILTER_REMOVE_NUMERIC,
      payload: { column: filterColumn },
    });
  };

  const removeAllNumericFilter = () => {
    dispatch({ type: FILTER_REMOVE_ALL_NUMERIC });
  };

  return {
    filters,
    dispatch,
    saveNumericFilter,
    changeFilterName,
    removeAllNumericFilter,
    removeNumericFilter,
  };
}
