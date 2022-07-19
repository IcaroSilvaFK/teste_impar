import { createContext, ReactNode, useCallback, useState } from 'react';

type ModalDeleteContextProps = {
  modalEditIsOpen: boolean;
  modalDeleteIsOpen: boolean;
  handleOpenModalEdit(): void;
  handleCloseModalEdit(): void;
  handleOpenModalDelete(): void;
  handleCloseModalDelete(): void;
  setElementId(id: string | null): void;
  setRefetch(state: boolean): void;
  elementId: string | null;
  refetch: boolean;
};

export const ModalsContext = createContext<ModalDeleteContextProps>(
  {} as ModalDeleteContextProps,
);

export function ModalsContextProvider({ children }: { children: ReactNode }) {
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [modalDeleteIsOpen, setModalDeleteIsOpen] = useState(false);
  const [elementId, setElementId] = useState<string | null>(null);
  const [refetch, setRefetch] = useState(false);

  const handleOpenModalEdit = useCallback(() => {
    setModalEditIsOpen(true);
  }, []);

  const handleCloseModalEdit = useCallback(() => {
    setModalEditIsOpen(false);
  }, []);

  const handleOpenModalDelete = useCallback(() => {
    setModalDeleteIsOpen(true);
  }, []);

  const handleCloseModalDelete = useCallback(() => {
    setModalDeleteIsOpen(false);
  }, []);

  return (
    <ModalsContext.Provider
      value={{
        modalEditIsOpen,
        modalDeleteIsOpen,
        handleOpenModalEdit,
        handleCloseModalEdit,
        handleOpenModalDelete,
        handleCloseModalDelete,
        elementId,
        setElementId,
        refetch,
        setRefetch,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
}
