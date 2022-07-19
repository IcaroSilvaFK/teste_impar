import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: flex-start;

  gap: 1rem;

  background: ${({ theme }) =>
    'linear-gradient(150deg,' +
    theme.colors.primary +
    ',' +
    theme.colors.primary +
    ',' +
    theme.colors.secundary +
    ')'};

  padding: 16px;
  @media screen and (max-width: 803px) {
    justify-content: center;
  }
`;
