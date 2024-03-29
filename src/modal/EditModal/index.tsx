import { X } from 'phosphor-react';
import { useEffect, useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { v4 as Uuid } from 'uuid';

import { Button } from '../../components/Button';
import { api } from '../../configs/axios';
import { useFileReader } from '../../hooks/useFileReader';
import { useModals } from '../../hooks/useModals';
import { toastError } from '../../utils/toastError';
import { toastSucces } from '../../utils/toastSucces';

import {
  CloseButton,
  Container,
  Form,
  HeaderModal,
  Modal,
  Row,
} from './styles';

type EditmodalProps = {
  title: string;
};

type ResponseAxiosProps = {
  title: string;
  image: string;
  id: string;
};

export function EditModal() {
  const {
    modalEditIsOpen,
    handleCloseModalEdit,
    elementId,
    setRefetch,
    setElementId,
  } = useModals();
  const cardNameId = useId();
  const cardFileId = useId();
  const { register, handleSubmit, reset } = useForm<EditmodalProps>({
    defaultValues: {
      title: '',
    },
  });
  const { convertImageToBase64, image, inputFileRef, setImage } =
    useFileReader();

  useEffect(() => {
    (async () => {
      if (!elementId) return;
      try {
        const { data } = await api.get<ResponseAxiosProps>(
          `cards/${elementId}`,
        );
        reset({
          title: data.title,
        });
        setImage(data.image);
      } catch (err) {
        toastError('Tivemos um erro na busca do card');
        handleCloseModalEdit();
      }
    })();
  }, [elementId]);

  useEffect(() => {
    if (!modalEditIsOpen) {
      setElementId(null);
      reset({
        title: '',
      });
      setImage(null);
    }
  }, [modalEditIsOpen]);

  const onSubmit: SubmitHandler<EditmodalProps> = async ({ title }) => {
    if (!image) {
      toastError('Por favor preencha o campo imagem');
    }

    const data = {
      title,
      image,
      id: Uuid(),
    };

    try {
      console.log(elementId);
      if (elementId) {
        await api.patch(`cards/${elementId}`, data);
        reset({
          title: '',
        });
        setImage(null);
        setElementId(null);
        setRefetch(true);
        toastSucces('Card atualizado com sucesso');

        return;
      }
      await api.post('cards', data);
      toastSucces('Card adicionado com sucesso');

      inputFileRef.current.value = null;
      reset();
      setImage(null);
      setRefetch(true);
    } catch (err) {
      toastError('Tivemos um problema em adicionar o card');
    }
  };

  if (!modalEditIsOpen) return null;

  return (
    <Container onClick={handleCloseModalEdit} data-cy="card-edit">
      <CloseButton onClick={handleCloseModalEdit}>
        <X size={20} />
      </CloseButton>
      <Modal onClick={(e) => e.stopPropagation()}>
        <HeaderModal>
          <img src="/assets/icone_criar.svg" alt="Create icon" />
          <h1>Criar card</h1>
        </HeaderModal>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor={cardNameId}>Digite um nome para o card</label>
            <input
              type="text"
              id={cardNameId}
              {...register('title')}
              placeholder="Digite o título"
              data-cy="create-cardinputText"
            />
          </div>
          <div>
            <span>Inclua uma imagem para aparecer no card</span>
            <label htmlFor={cardFileId} className="form__fileInput">
              {image ? (
                <img src={image} alt="Image Card" />
              ) : (
                <span>Nenhum arquivo selecionado</span>
              )}
              <p>Escolher arquivo</p>
              <input
                type="file"
                accept="image/*"
                id={cardFileId}
                ref={inputFileRef}
                onChange={convertImageToBase64}
              />
            </label>
          </div>
          <Row>
            <Button variant="solid" type="submit">
              Criar card
            </Button>
          </Row>
        </Form>
      </Modal>
    </Container>
  );
}
