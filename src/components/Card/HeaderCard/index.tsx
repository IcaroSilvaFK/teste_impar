import { Container } from './styles';

type HeaderCardProps = {
  imageUrl: string;
  alt: string;
};

export function HeaderCard({ alt, imageUrl }: HeaderCardProps) {
  return (
    <Container>
      <img src={imageUrl} alt={alt} />
    </Container>
  );
}
