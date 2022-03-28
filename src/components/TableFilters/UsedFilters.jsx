import React from 'react';
import useFilters from '../../hooks/useFilters';

export default function UsedFilters() {
  const {
    filters: { filterByNumericValues },
    removeAllNumericFilter, removeNumericFilter,
  } = useFilters();

  return (
    <div>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ removeAllNumericFilter }
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
              onClick={ () => removeNumericFilter(column) }
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  );
}
