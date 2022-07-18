import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import { theme } from './styles/theme';
import { ResetCSS } from './styles/global';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ResetCSS />
      <Routes />
    </ThemeProvider>
  </StrictMode>,
);
