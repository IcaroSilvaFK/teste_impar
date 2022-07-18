import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
`;

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
  align-items: center;

  background: ${({ theme }) => theme.colors.white};

  padding: 8px 16px;

  border-radius: 5px;

  width: 1100px;
  height: 50px;

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.placeholderInput};

    :hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  input {
    width: 100%;
    height: 100%;

    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

export const Main = styled.main`
  max-width: 1100px;

  margin: 30px auto;

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: ${({ theme }) => theme.colors.primary};
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }

  .main__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    justify-content: center;
    gap: 30px;

    margin-top: 50px;

    padding-bottom: 100px;
  }
`;
