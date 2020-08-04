import React from 'react';
import './App.css';

import CategoriesLayout from './layouts/CategoriesLayout';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <CategoriesLayout/>
    </div>
  );
}

export default App;
