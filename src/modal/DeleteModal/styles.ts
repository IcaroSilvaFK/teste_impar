import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.white};
  position: relative;

  padding: 15px;

  width: 300px;

  border-radius: 5px;

  box-shadow: 0 0 3px ${({ theme }) => theme.colors.gray[300]};

  .modal__closeButton {
    background: ${({ theme }) => theme.colors.colorButton};
    color: ${({ theme }) => theme.colors.white};

    padding: 6px;
    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -15px;
    right: -15px;
  }
`;

export const ContainerImageModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 20px;

  div {
    border-radius: 80px;

    width: 120px;
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.gray[50]};

    border: 6px solid ${({ theme }) => theme.colors.gray[300]};

    img {
      width: 68px;
      height: 68px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;

  padding: 20px 0;

  h1 {
    color: ${({ theme }) => theme.colors.red[500]};
  }
  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.textColor};
  }
`;

export const Separator = styled.div`
  background: ${({ theme }) => theme.colors.gray[200]};
  height: 1px;
  width: 80%;

  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 15px 0;
`;
