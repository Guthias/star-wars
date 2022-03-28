import React from 'react';
import NumericFilter from './NumericFilter';
import UsedFilters from './UsedFilters';
import useFilters from '../../hooks/useFilters';

export default function TableFilters() {
  const { changeFilterName } = useFilters();
  return (
    <div>
      <label htmlFor="name-filter">
        <span>Filtro por nome</span>
        <input
          id="name-filter"
          data-testid="name-filter"
          onChange={ ({ target }) => changeFilterName(target.value) }
        />
      </label>

      <NumericFilter />
      <UsedFilters />
    </div>
  );
}
