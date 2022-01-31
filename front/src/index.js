import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';

import { defaultTheme } from '../src/styles/theme';
import { AuthProvider } from './context/auth';

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <AuthProvider>
            <App />
          </AuthProvider>
          <GlobalStyle />
        </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
