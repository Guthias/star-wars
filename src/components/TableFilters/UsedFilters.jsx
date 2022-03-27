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

  return (
    <div>
      {
        filterByNumericValues.map(({ column, comparsion, value }) => (
          <div key={ column }>
            {`${column} ${comparsion} ${value}`}
            <button
              type="button"
              title="Remover filtro"
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
