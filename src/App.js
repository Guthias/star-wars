import React from 'react';
import PlanetsProvider from './context/Planets';
import PlanetsTable from './components/PlanetsTable';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
