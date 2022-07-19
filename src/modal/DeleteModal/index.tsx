import { X } from 'phosphor-react';
import { Button } from '../../components/Button';
import { api } from '../../configs/axios';
import { useModals } from '../../hooks/useModals';
import { toastError } from '../../utils/toastError';
import { toastSucces } from '../../utils/toastSucces';

import {
  Container,
  ContainerImageModal,
  Content,
  Modal,
  Row,
  Separator,
} from './styles';

export function DeleteModal() {
  const { elementId, modalDeleteIsOpen, handleCloseModalDelete, setRefetch } =
    useModals();

  async function handleDeleteCard() {
    try {
      await api.delete(`cards/${elementId}`);
      toastSucces('Card deletado com sucesso');

      setRefetch(true);
      handleCloseModalDelete();
    } catch (err) {
      toastError('Infelizmente não conseguimos deletar o conteudo');
    }
  }

  if (!modalDeleteIsOpen) return null;

  return (
    <Container onClick={handleCloseModalDelete}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <button className="modal__closeButton" onClick={handleCloseModalDelete}>
          <X size={20} weight="bold" />
        </button>
        <ContainerImageModal>
          <div>
            <img src="/assets/Icon-trash.svg" alt="" />
          </div>
        </ContainerImageModal>
        <Content>
          <h1>Excluir</h1>
          <span>CERTEZA QUE DESEJA EXCLUIR?</span>
        </Content>
        <Separator />
        <Row>
          <Button variant="danger" onClick={handleDeleteCard}>
            Excluir
          </Button>
          <Button variant="outline" onClick={handleCloseModalDelete}>
            Cancelar
          </Button>
        </Row>
      </Modal>
    </Container>
  );
}
