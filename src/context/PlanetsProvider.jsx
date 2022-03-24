import { node } from 'prop-types';
import React, { createContext, useContext, useState, useEffect, useReducer } from 'react';
import getPlanets from '../services/api';
import filterReducer from './filterReducer';

export const PlanetsContext = createContext();

export default function PlanetsProvider({ children }) {
  const INITIAL_FILTER = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  };

  const [planets, setPlanets] = useState();
  const [filters, dispatch] = useReducer(filterReducer, INITIAL_FILTER);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getPlanets();
      setPlanets(data);
    };

    fetchPlanets();
  }, [setPlanets]);

  return (
    <PlanetsContext.Provider value={ { planets, setPlanets, filters, dispatch } }>
      { children }
    </PlanetsContext.Provider>
  );
}

export function usePlanets() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  return { planets, setPlanets };
}

export function useFilters() {
  const { filters, dispatch } = useContext(PlanetsContext);
  return { filters, dispatch };
}

PlanetsProvider.propTypes = {
  children: node.isRequired,
};
