import React, { useState } from 'react';
import { usePlanets } from '../../context/PlanetsProvider';

export default function SortArea() {
  const { planets } = usePlanets();

  const numberKeys = planets
    ? Object.keys(planets[0])
      .filter((key) => !Number.isNaN(+planets[0][key]))
      .reverse()
    : [];

  const [sort, setSort] = useState({
    column: 'population',
    sort: 'ASC',
  });

  const handleInputChange = ({ target }) => {
    setSort({ ...sort,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <label htmlFor="column-sort">
        <select
          data-testid="column-sort"
          id="column-sort"
          name="column"
          value={ sort.column }
          onChange={ handleInputChange }
        >
          {
            numberKeys.map((numericKey) => (
              <option key={ numericKey } value={ numericKey } label={ numericKey } />
            ))
          }
        </select>
      </label>
      <div>
        <label htmlFor="sort-radio-asc">
          <input
            id="sort-radio-asc"
            type="radio"
            name="sort"
            value="ASC"
            onChange={ handleInputChange }
            data-testid="column-sort-input-desc"
          />
          ASC
        </label>

        <label htmlFor="sort-radio-desc">
          <input
            id="sort-radio-desc"
            type="radio"
            name="sort"
            value="DESC"
            onChange={ handleInputChange }
            data-testid="column-sort-input-desc"
          />
          DESC
        </label>

        <button
          type="submit"
          data-testid="column-sort-button"
        >
          Sort
        </button>
      </div>
    </div>
  );
}
