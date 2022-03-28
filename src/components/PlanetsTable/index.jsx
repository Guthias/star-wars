import React from 'react';
import { usePlanets } from '../../context/PlanetsProvider';
import useFilters from '../../hooks/useFilters';
import TableRow from './TableRow';

export default function PlanetsTable() {
  const { planets } = usePlanets();
  const {
    filters: {
      filterByName: { name: nameFilter },
      filterByNumericValues,
    },
  } = useFilters();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {planets
            && planets
              .filter((planet) => planet.name.toLowerCase()
                .includes(nameFilter.toLowerCase()))
              .filter((planet) => {
                let validValue = true;

                for (let i = 0; i < filterByNumericValues.length; i += 1) {
                  const { column, comparsion, value } = filterByNumericValues[i];
                  switch (comparsion) {
                  case 'menor que': validValue = +planet[column] < +value; break;
                  case 'maior que': validValue = +planet[column] > +value; break;
                  case 'igual a': validValue = +planet[column] === +value; break;
                  default: throw new Error('Invalid comparsion value');
                  }
                  if (!validValue) break;
                }
                return validValue;
              })
              .map((planet) => <TableRow key={ planet.name } rowData={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}
