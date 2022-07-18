import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 18px 0;

  img {
    width: 80px;
    height: 80px;

    border-radius: 50px;

    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }
`;
