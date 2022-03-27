import React from 'react';
import { useFilters } from '../../context/PlanetsProvider';

export default function UsedFilters() {
  const { filters: { filterByNumericValues } } = useFilters();
  return (
    <div>
      {
        filterByNumericValues.map(({ column, comparsion, value }) => (
          <div key={ column }>
            {`${column} ${comparsion} ${value}`}
            <button
              type="button"
              title="Remover filtro"
            >
              X
            </button>
          </div>
        ))
      }
    </div>
  );
}
