import { hydrate } from 'react-dom';
import { StrictMode } from 'react';

import App from './App';
import { BrowserRouter } from 'react-router-dom';

hydrate(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
