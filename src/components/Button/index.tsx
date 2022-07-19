import { ReactNode } from 'react';

import { Container } from './styles';

type ButtonProps = {
  children: ReactNode;
  variant: 'solid' | 'danger' | 'outline';
  onClick?: () => void;
};

export function Button({ children, variant, onClick }: ButtonProps) {
  return (
    <Container variant={variant} onClick={onClick}>
      {children}
    </Container>
  );
}
