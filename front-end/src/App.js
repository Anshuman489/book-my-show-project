import React from 'react';
import Home from './pages/Home';   // ← import the component
import BsState from './Context/BsState';

const App = () => {
  return (
    <div>
      <BsState>
      <Home />               {/* ← use upper-case tag */}
      </BsState>
    </div>
  );
};

export default App;
