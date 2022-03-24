import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import TableFilters from './components/TableFilters';
import PlanetsTable from './components/PlanetsTable';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <TableFilters />
      <PlanetsTable />
    </PlanetsProvider>
  );
}

export default App;
