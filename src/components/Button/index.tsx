import { ReactNode } from 'react';

import { Container } from './styles';

type ButtonProps = {
  children: ReactNode;
  variant: 'solid' | 'danger' | 'outline';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};

export function Button({ children, variant, onClick, type }: ButtonProps) {
  return (
    <Container variant={variant} onClick={onClick} type={type} data-cy="button">
      {children}
    </Container>
  );
}
