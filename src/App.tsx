import { StrictMode, useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { WrappedDetails } from './Details';
import SearchParams from './SearchParams';
import { ThemeContext } from './ThemeContext';

const App = () => {
  const theme = useState('darkblue');

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<WrappedDetails />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
