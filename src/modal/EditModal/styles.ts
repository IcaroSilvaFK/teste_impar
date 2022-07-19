import styled, { keyframes, ThemeConsumer } from 'styled-components';

const anitedModal = keyframes`
  0%{
    left: 1000px;
  }
  100%{
    left: 0;
  }
`;

export const Container = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);

  animation: ${anitedModal} 0.3s linear;

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
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

export const Form = styled.form`
  margin-top: 26px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    label {
      font-size: ${({ theme }) => theme.fontSizes.xs};
      text-transform: uppercase;
    }
    input {
      border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    }
  }
`;
