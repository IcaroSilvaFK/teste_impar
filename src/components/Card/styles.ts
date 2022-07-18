import styled from 'styled-components';

export const Container = styled.div`
  max-width: 250px;

  background: ${({ theme }) => theme.colors.white};

  border-radius: 8px;

  overflow: hidden;

  border: 1px solid ${({ theme }) => theme.colors.gray[300]};

  box-shadow: 0 3px 6px ${({ theme }) => theme.colors.gray[200]};
`;

export const Separator = styled.div`
  width: 50%;
  height: 1px;
  background: ${({ theme }) => theme.colors.gray[50]};

  margin: 0 auto;
`;
