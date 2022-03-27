import React, { useContext } from 'react';
import { PlanetsContext, useFilters } from '../../context/PlanetsProvider';

export default function UsedFilters() {
  const { filters: { filterByNumericValues } } = useFilters();
  const { dispatch } = useContext(PlanetsContext);

  const removeFilter = (filterColumn) => {
    dispatch({
      type: 'remove_numeric_filter',
      payload: { column: filterColumn },
    });
  };

  const removeAllFilters = () => {
    dispatch({
      type: 'remove_all_numeric_filters',
    });
  };

  return (
    <div>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllFilters }
      >
        Remove all Filters
      </button>

      {
        filterByNumericValues.map(({ column, comparsion, value }) => (
          <div key={ column } data-testid="filter">
            {`${column} ${comparsion} ${value}`}
            <button
              type="button"
              title="Remove filter"
              onClick={ () => removeFilter(column) }
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  );
}
