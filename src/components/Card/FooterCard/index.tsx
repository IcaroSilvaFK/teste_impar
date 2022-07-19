import { Container } from './styles';

type FooterCardProps = {
  removeElement(): void;
  editElement(): void;
};

export function FooterCard({ editElement, removeElement }: FooterCardProps) {
  return (
    <Container>
      <button
        className="container__deleted"
        onClick={removeElement}
        data-cy="button-delete"
      >
        <img src="/assets/Icon-trash.svg" alt="Icon Trash" />
        <span>Excluir</span>
      </button>
      <button
        className="container__edit"
        onClick={editElement}
        data-cy="button-edit"
      >
        <img src="/assets/Icon-edit.svg" alt="Icon Edit" />
        <span>Editar</span>
      </button>
    </Container>
  );
}
