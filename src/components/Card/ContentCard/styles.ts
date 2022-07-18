import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px 12px;

  div {
    word-wrap: break-word;
    margin: auto;
    height: 43px;
    max-width: 200px;
    text-align: center;
    overflow: hidden;

    p {
      color: ${({ theme }) => theme.colors.textColor};
    }
  }
`;
