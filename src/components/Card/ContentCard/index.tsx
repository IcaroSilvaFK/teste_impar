import { Container } from './styles';

type ContentCardProps = {
  text: string;
};

export function ContentCard({ text }: ContentCardProps) {
  return (
    <Container>
      <div>
        <p>{text}</p>
      </div>
    </Container>
  );
}
