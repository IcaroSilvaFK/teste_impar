import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { ModalsContextProvider } from './context/ModalDeleteProvider';
import { DeleteModal } from './modal/DeleteModal';
import { EditModal } from './modal/EditModal';
import { Routes } from './routes';

import 'react-toastify/dist/ReactToastify.css';
import { ResetCSS } from './styles/global';
import { theme } from './styles/theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalsContextProvider>
      <ThemeProvider theme={theme}>
        <ResetCSS />
        <Routes />
        <DeleteModal />
        <EditModal />
        <ToastContainer />
      </ThemeProvider>
    </ModalsContextProvider>
  </StrictMode>,
);
