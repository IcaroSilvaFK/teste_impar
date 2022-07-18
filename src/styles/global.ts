import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  body,html,#root{
    width: 100%;
    height: 100%;


    font-family: ${({ theme }) => theme.fonts.mulish};
    font-size:${({ theme }) => theme.fontSizes.md};
  }

  button,input{
    border: 0;
    outline: none;
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

`;
