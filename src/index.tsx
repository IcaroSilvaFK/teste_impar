import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes';
import { theme } from './styles/theme';
import { ResetCSS } from './styles/global';
import { ModalsContextProvider } from './context/ModalDeleteProvider';
import { DeleteModal } from './modal/DeleteModal';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalsContextProvider>
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <Routes />
        <DeleteModal />
      </ThemeProvider>
    </ModalsContextProvider>
  </StrictMode>,
);
