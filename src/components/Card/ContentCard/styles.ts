import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 12px;

  div {
    word-wrap: break-word;
    margin: auto;
    height: 50px;
    max-height: 50px;
    max-width: 200px;
    text-align: center;
    overflow: hidden;

    p {
      color: ${({ theme }) => theme.colors.textColor};
      line-height: 150%;
    }
  }
`;
