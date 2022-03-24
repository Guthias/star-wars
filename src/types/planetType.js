import { arrayOf, string } from 'prop-types';

const planetType = {
  name: string.isRequired,
  rotation_period: string.isRequired,
  orbital_period: string.isRequired,
  diameter: string.isRequired,
  climate: string.isRequired,
  gravity: string.isRequired,
  terrain: string.isRequired,
  surface_water: string.isRequired,
  population: string.isRequired,
  residents: arrayOf(string).isRequired,
  films: arrayOf(string).isRequired,
  created: string.isRequired,
  edited: string.isRequired,
  url: string.isRequired,
};

export default planetType;
