import styled from 'styled-components';

export const Container = styled.div``;

export const SectionFormSearch = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url('/assets/fundo-busca.png');
  background-size: cover;
  background-position: center;

  height: 150px;
`;

export const Form = styled.form`
  display: flex;
  align-content: center;

  background: ${({ theme }) => theme.colors.white};

  padding: 8px 16px;

  border-radius: 5px;

  width: 60%;
  height: 50px;

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.placeholderInput};

    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  label {
    width: 100%;
    height: 100%;
  }
`;
