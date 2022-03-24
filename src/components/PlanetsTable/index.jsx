import React from 'react';
import { useFilters, usePlanets } from '../../context/PlanetsProvider';
import TableRow from './TableRow';

export default function PlanetsTable() {
  const { planets } = usePlanets();
  const {
    filters: {
      filterByName: { name: nameFilter },
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
              .map((planet) => <TableRow key={ planet.name } rowData={ planet } />)}
        </tbody>
      </table>
    </div>
  );
}
