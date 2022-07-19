import styled, { css } from 'styled-components';

type ButtonProps = {
  variant: 'solid' | 'danger' | 'outline';
};

export const Container = styled.button<ButtonProps>`
  padding: 10px 26px;

  border-radius: 6px;

  font-size: ${({ theme }) => theme.fontSizes.md};

  transition: all 0.3s linear;

  :hover {
    filter: brightness(0.9);
  }

  ${({ variant }) =>
    variant === 'solid' &&
    css`
      background: ${({ theme }) => theme.colors.colorButton};

      color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 5px 10px ${({ theme }) => theme.colors.shadowButton};
    `}

  ${({ variant }) =>
    variant === 'outline' &&
    css`
      outline: 1px solid ${({ theme }) => theme.colors.red[500]};

      color: ${({ theme }) => theme.colors.red[500]};
      background: transparent;
    `}

    ${({ variant }) =>
    variant === 'danger' &&
    css`
      background: ${({ theme }) => theme.colors.red[500]};

      color: ${({ theme }) => theme.colors.white};
      box-shadow: 0 5px 10px ${({ theme }) => theme.colors.shadowButton};
    `}
`;
