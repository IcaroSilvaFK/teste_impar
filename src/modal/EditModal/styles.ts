import styled, { keyframes } from 'styled-components';

const anitedModal = keyframes`
  0%{
    transform: translateX(1000px);
  }
  100%{
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: fixed;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);

  animation: ${anitedModal} 0.4s linear;

  display: flex;
  justify-content: flex-end;
`;

export const Modal = styled.div`
  padding: 16px;

  width: 642px;
  background: ${({ theme }) => theme.colors.white};
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 22px 0;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray[300]};

  img {
    height: 46px;
    width: 41px;
    object-fit: cover;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

export const Form = styled.form`
  padding: 28px 0;

  display: flex;
  flex-direction: column;
  gap: 26px;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label,
    span {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      text-transform: uppercase;

      font-weight: bold;

      color: ${({ theme }) => theme.colors.textColor};
    }
    input {
      border: 1px solid ${({ theme }) => theme.colors.gray[300]};

      height: 40px;
      border-radius: 8px;
      font-size: ${({ theme }) => theme.fontSizes.md};
      padding: 8px 16px;

      box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    }
    input[type='file'] {
      display: none;
    }
    .form__fileInput {
      border: 1px solid ${({ theme }) => theme.colors.gray[300]};
      border-radius: 8px;
      height: 60px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0 16px;

      cursor: pointer;

      span {
        color: ${({ theme }) => theme.colors.placeholderInput};
      }
      p {
        display: flex;
        align-items: center;
        border: 1px solid ${({ theme }) => theme.colors.colorButton};
        color: ${({ theme }) => theme.colors.colorButton};
        padding: 6px 12px;

        border-radius: 8px;
        font-weight: bold;
        font-size: 1.02rem;
      }

      img {
        width: 55px;
        height: 45px;
        border-radius: 5px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      label,
      span {
        text-align: center;
      }
    }
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 16px 0;

  border-top: 2px solid ${({ theme }) => theme.colors.gray[300]};
`;

export const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;

  padding: 10px;
  border-radius: 50px;

  background: ${({ theme }) => theme.colors.colorButton};
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 500px) {
    display: flex;
    align-items: center;
  }
`;
