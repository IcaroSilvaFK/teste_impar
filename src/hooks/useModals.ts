import { useContext } from 'react';

import { ModalsContext } from '../context/ModalDeleteProvider';

export function useModals() {
  const data = useContext(ModalsContext);

  return data;
}
