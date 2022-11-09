import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { WrappedDetails } from './Details';
import { SearchParams } from './SearchParams';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Routes>
          <Route path="/details/:id" element={<WrappedDetails />} />
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
