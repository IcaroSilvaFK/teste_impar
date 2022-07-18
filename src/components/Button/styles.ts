import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.colorButton};

  color: ${({ theme }) => theme.colors.white};

  padding: 10px 26px;

  border-radius: 6px;

  font-size: ${({ theme }) => theme.fontSizes.md};

  box-shadow: 0 5px 10px ${({ theme }) => theme.colors.shadowButton};

  transition: all 0.3s linear;

  :hover {
    filter: brightness(1.2);
  }
`;
