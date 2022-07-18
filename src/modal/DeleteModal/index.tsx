import { X } from 'phosphor-react';
import { useModals } from '../../hooks/useModals';

import { Container, Modal } from './styles';

export function DeleteModal() {
  const { modalDeleteIsOpen } = useModals();

  if (!modalDeleteIsOpen) {
    return null;
  }

  return (
    <Container>
      <Modal>
        <button className="modal__closeButton">
          <X size={20} weight="bold" />
        </button>
      </Modal>
    </Container>
  );
}
