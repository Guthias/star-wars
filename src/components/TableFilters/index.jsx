import React, { useContext } from 'react';
import { PlanetsContext } from '../../context/PlanetsProvider';
import NumericFilter from './NumericFilter';

export default function TableFilters() {
  const { dispatch } = useContext(PlanetsContext);

  return (
    <div>
      <label htmlFor="name-filter">
        <span>Filtro por nome</span>
        <input
          id="name-filter"
          data-testid="name-filter"
          onChange={ ({ target }) => dispatch({
            type: 'change_name',
            payload: {
              name: target.value,
            },
          }) }
        />
      </label>

      <NumericFilter />
    </div>
  );
}
