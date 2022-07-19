import { X } from 'phosphor-react';
import { toast } from 'react-toastify';
import { Button } from '../../components/Button';
import { api } from '../../configs/axios';
import { useModals } from '../../hooks/useModals';

import {
  Container,
  Modal,
  ContainerImageModal,
  Content,
  Separator,
  Row,
} from './styles';

export function DeleteModal() {
  const { elementId, modalDeleteIsOpen, handleCloseModalDelete, setRefetch } =
    useModals();

  async function handleDeleteCard() {
    try {
      await api.delete(`cards/${elementId}`);
      toast.success('Card deletado com sucesso', {
        position: 'top-center',
        draggable: true,
      });
      setRefetch(true);
      handleCloseModalDelete();
    } catch (err) {
      toast.error('Infelizmente não conseguimos deletar o conteudo', {
        position: 'top-center',
        draggable: true,
      });
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
