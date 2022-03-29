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

  const INITIAL_STATE_ORDER_VALUES = {
    column: 'population',
    sort: 'ASC',
  };

  const [planets, setPlanets] = useState();
  const [filters, dispatch] = useReducer(filterReducer, INITIAL_FILTER);
  const [orderValues, setOrderValues] = useState(INITIAL_STATE_ORDER_VALUES);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getPlanets();
      setPlanets(data);
    };

    fetchPlanets();
  }, [setPlanets]);

  return (
    <PlanetsContext.Provider
      value={
        { planets, setPlanets, filters, dispatch, orderValues, setOrderValues }
      }
    >
      { children }
    </PlanetsContext.Provider>
  );
}

export function usePlanets() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  return { planets, setPlanets };
}

export function useOrder() {
  const { orderValues, setOrderValues } = useContext(PlanetsContext);
  return { orderValues, setOrderValues };
}

PlanetsProvider.propTypes = {
  children: node.isRequired,
};
