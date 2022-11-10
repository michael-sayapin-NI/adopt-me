import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { WrappedDetails } from './Details';
import { SearchParams } from './SearchParams';
import { ThemeContext } from './ThemeContext';

const App = () => {
  const theme = useState('darkblue');

  return (
    <ThemeContext.Provider value={theme}>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<WrappedDetails />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </ThemeContext.Provider>
  );
};

export default App;
