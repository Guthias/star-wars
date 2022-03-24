import { node } from 'prop-types';
import React, { createContext, useContext, useState, useEffect } from 'react';
import getPlanets from '../services/api';

const PlanetsContext = createContext();

export default function PlanetsProvider({ children }) {
  const [planets, setPlanets] = useState();

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getPlanets();
      setPlanets(data);
    };

    fetchPlanets();
  }, [setPlanets]);

  return (
    <PlanetsContext.Provider value={ { planets, setPlanets } }>
      { children }
    </PlanetsContext.Provider>
  );
}

export function usePlanets() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  return { planets, setPlanets };
}

PlanetsProvider.propTypes = {
  children: node.isRequired,
};
