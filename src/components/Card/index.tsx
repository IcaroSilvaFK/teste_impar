import { useModals } from '../../hooks/useModals';
import { ContentCard } from './ContentCard';
import { FooterCard } from './FooterCard';
import { HeaderCard } from './HeaderCard';

import { Container, Separator } from './styles';

type CardProps = {
  imageUrl: string;
  alt: string;
  text: string;
  id: string;
};

export function Card({ alt, imageUrl, text, id }: CardProps) {
  const { setElementId, handleOpenModalEdit, handleOpenModalDelete } =
    useModals();

  function handleEditCard(id: string) {
    setElementId(id);
    handleOpenModalEdit();
  }

  function handleRemoveCard(id: string) {
    setElementId(id);
    handleOpenModalDelete();
  }

  return (
    <Container>
      <HeaderCard imageUrl={imageUrl} alt={alt} />
      <Separator />
      <ContentCard text={text} />
      <FooterCard
        editElement={() => handleEditCard(id)}
        removeElement={() => handleRemoveCard(id)}
      />
    </Container>
  );
}
