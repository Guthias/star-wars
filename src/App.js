import React, { useEffect, useState } from 'react';
import getPlanets from './services/api';
import './App.css';

function App() {
  const [planetList, updatePlanetList] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const data = await getPlanets();
      updatePlanetList(data);
    };

    fetchPlanets();
  }, [updatePlanetList]);

  return (
    <span>Hello, App!</span>
  );
}

export default App;
