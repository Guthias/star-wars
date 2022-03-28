import React from 'react';
import useFilters from '../../hooks/useFilters';

export default function UsedFilters() {
  const {
    filters: { filterByNumericValues },
    removeAllFilters, removeFilter,
  } = useFilters();

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
