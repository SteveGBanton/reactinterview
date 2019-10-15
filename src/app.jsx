import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const AppC = () => (
  <BrowserRouter>
<Routes />
  </BrowserRouter>
);

const element = document.getElementById('document');

ReactDOM.render(<AppC />, element);
