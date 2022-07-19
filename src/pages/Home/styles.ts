import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0%{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};

  width: 100%;
  height: 100vh;
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
  @media screen and (max-width: 1127px) {
    width: 90%;
  }
`;

export const Main = styled.main`
  max-width: 1100px;

  margin: 30px auto;
  background: ${({ theme }) => theme.colors.gray[50]};

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

  @media screen and (max-width: 1127px) {
    max-width: 820px;
  }

  @media screen and (max-width: 803px) {
    width: 70%;

    section {
      flex-direction: column;
      align-items: center;
      gap: 20px;
      h1 {
        font-size: ${({ theme }) => theme.fontSizes['2xl']};
      }
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.placeholderInput};
  }

  .centerContainer__spinner {
    border: 4px solid ${({ theme }) => theme.colors.colorButton};

    border-bottom-color: transparent;

    border-radius: 50px;

    width: 50px;
    height: 50px;

    animation: ${rotate} 0.6s linear infinite;
  }
`;
