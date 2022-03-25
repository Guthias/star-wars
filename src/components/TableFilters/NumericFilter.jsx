import { object } from 'prop-types';
import React, { useState } from 'react';
import { usePlanets } from '../../context/PlanetsProvider';

export default function NumericFilter() {
  const { planets } = usePlanets();

  const numberKeys = planets
    ? Object.keys(planets[0]).filter((key) => !Number.isNaN(+planets[0][key]))
    : [];

  return (
    <div>
      <label htmlFor="column-filter">
        <span>Coluna</span>
        <select id="column-filter" data-testid="column-filter" name="column">
          {
            numberKeys.map((numericKey) => (
              <option key={ numericKey } value={ numericKey }>
                { numericKey }
              </option>))
          }
        </select>
      </label>

      <label htmlFor="column-filter">
        <span>Coluna</span>
        <select id="column-filter" data-testid="column-filter" name="column">
          <option value="menor que">menor que</option>
          <option value="maior que">maior que</option>
          <option value="igual a">igual a</option>
        </select>
      </label>

      <label htmlFor="value-filter">
        <span>Coluna</span>
        <input data-testid="value-fiter" name="value" type="number" />
      </label>

      <button type="submit" data-testid="button-filter">Filtrar</button>
    </div>
  );
}
