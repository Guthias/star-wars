import React from 'react';
import planetType from '../../types/planetType';

export default function TableRow({ rowData }) {
  const {
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
    films,
    created,
    edited,
    url,
  } = rowData;

  return (
    <tr>
      <td data-testid="planet-name">{ name }</td>
      <td>{ rotationPeriod }</td>
      <td>{ orbitalPeriod }</td>
      <td>{ diameter }</td>
      <td>{ climate }</td>
      <td>{ gravity }</td>
      <td>{ terrain }</td>
      <td>{ surfaceWater }</td>
      <td>{ population }</td>
      <td>
        <ul>
          { films.map((film) => <li key={ film }>{ film }</li>) }
        </ul>
      </td>
      <td>{ created }</td>
      <td>{ edited }</td>
      <td>{ url }</td>
    </tr>
  );
}

TableRow.propTypes = {
  rowData: planetType.isRequired,
};
