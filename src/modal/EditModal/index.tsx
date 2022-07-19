import { useId } from 'react';
import { useForm } from 'react-hook-form';

import { useModals } from '../../hooks/useModals';

import { Container, Form, HeaderModal, Modal } from './styles';

type EditmodalProps = {
  title: string;
};

export function EditModal() {
  const { modalEditIsOpen } = useModals();
  const cardNameId = useId();
  const cardFileId = useId();
  const { register, handleSubmit, reset } = useForm<EditmodalProps>({
    defaultValues: {
      title: '',
    },
  });

  if (!modalEditIsOpen) return null;

  return (
    <Container>
      <Modal>
        <HeaderModal>
          <img src="/assets/icone_criar.svg" alt="Create icon" />
          <h1>Criar card</h1>
        </HeaderModal>
        <Form>
          <div>
            <label htmlFor={cardNameId}>Digite um nome para o card</label>
            <input type="text" id={cardNameId} {...register('title')} />
          </div>
          <div>
            <label htmlFor={cardFileId}>Digite um nome para o card</label>
            <div>
              <button>Escolher arquivo</button>
            </div>
            <input type="file" accept="image/*" id={cardFileId} />
          </div>
        </Form>
      </Modal>
    </Container>
  );
}
