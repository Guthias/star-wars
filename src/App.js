import React from 'react';

import PlanetsProvider from './context/Planets';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <span>Hello, App!</span>
    </PlanetsProvider>
  );
}

export default App;
