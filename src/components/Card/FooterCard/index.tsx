import { Trash, PencilSimple } from 'phosphor-react';
import { theme } from '../../../styles/theme';

import { Container } from './styles';

type FooterCardProps = {
  removeElement(): void;
  editElement(): void;
};

export function FooterCard({ editElement, removeElement }: FooterCardProps) {
  return (
    <Container>
      <button className="container__deleted" onClick={removeElement}>
        <Trash size={20} color={theme.colors.red[400]} />
        <span>Excuir</span>
      </button>
      <button className="container__edit" onClick={editElement}>
        <PencilSimple size={20} color={theme.colors.colorButton} />
        <span>Editar</span>
      </button>
    </Container>
  );
}
