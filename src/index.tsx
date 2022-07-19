import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Routes } from './routes';
import { ModalsContextProvider } from './context/ModalDeleteProvider';
import { EditModal } from './modal/EditModal';
import { DeleteModal } from './modal/DeleteModal';

import { theme } from './styles/theme';
import { ResetCSS } from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

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
