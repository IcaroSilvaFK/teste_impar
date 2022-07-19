import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 12px 8px;

  box-shadow: inset 0 2px 10px ${({ theme }) => theme.colors.gray[200]};

  button {
    background: transparent;

    display: flex;
    align-items: center;
    gap: 5px;

    transition: all 0.3s linear;

    img {
      width: 14px;
      height: 14px;
    }

    span {
      color: ${({ theme }) => theme.colors.colorButtoncard};
      transition: all 0.3s linear;
    }

    :hover {
      filter: brightness(1.1);
    }
  }
  .container__deleted {
    :hover {
      span {
        color: ${({ theme }) => theme.colors.red[500]};
      }
    }
  }

  .container__edit {
    :hover {
      span {
        color: ${({ theme }) => theme.colors.colorButton};
      }
    }
  }
`;
