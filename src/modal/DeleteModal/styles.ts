import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;

  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  background: rgba(255, 255, 255, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background: ${({ theme }) => theme.colors.white};

  .modal__closeButton{
    background: ${({theme}) => theme.}
  }
`;
