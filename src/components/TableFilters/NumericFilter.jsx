import React, { useContext, useState } from 'react';
import { PlanetsContext, usePlanets } from '../../context/PlanetsProvider';

export default function NumericFilter() {
  // Getting keys with numeric Values
  const { planets } = usePlanets();
  const numberKeys = planets
    ? Object.keys(planets[0]).filter((key) => !Number.isNaN(+planets[0][key]))
    : [];

  const INITIAL_STATE = {
    column: 'population',
    comparsion: 'maior que',
    value: '0',
  };

  const { dispatch } = useContext(PlanetsContext);

  const [filterValues, setFilterValues] = useState(INITIAL_STATE);

  const changeFilters = ({ target }) => {
    setFilterValues({
      ...filterValues,
      [target.name]: target.value,
    });
  };

  const saveFilterValues = (event) => {
    event.preventDefault();
    dispatch({
      type: 'add_new_numeric_filter',
      payload: {
        ...filterValues,
      },
    });
  };

  return (
    <div>
      <label htmlFor="column-filter">
        <span>Coluna</span>
        <select
          id="column-filter"
          data-testid="column-filter"
          name="column"
          value={ filterValues.column }
          onChange={ changeFilters }
        >
          {
            numberKeys.map((numericKey) => (
              <option key={ numericKey } value={ numericKey }>
                { numericKey }
              </option>))
          }
        </select>
      </label>

      <label htmlFor="comparison-filter">
        <span>Comparação</span>
        <select
          id="comparison-filter"
          data-testid="comparison-filter"
          name="comparsion"
          value={ filterValues.comparison }
          onChange={ changeFilters }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        <span>Valor</span>
        <input
          id="value-filter"
          data-testid="value-filter"
          name="value"
          value={ filterValues.value }
          type="number"
          onChange={ changeFilters }
        />
      </label>

      <button
        type="submit"
        data-testid="button-filter"
        onClick={ saveFilterValues }
      >
        Filtrar
      </button>
    </div>
  );
}
