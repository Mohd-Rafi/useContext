import React, { useState } from 'react';
import Page1 from './Page/page1';
import Page2 from './Page/page2';

import { Route, Routes } from 'react-router-dom';
import './App.css';
import { CounterContext } from './context/counterContext';

const App = () => {
  const [data, setData] = useState({ count: 0, input: '' });
  return (
    <CounterContext.Provider value={{ data, setData }}>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/second" element={<Page2 />} />
      </Routes>
    </CounterContext.Provider>
  );
};

export default App;
