import { createGlobalStyle } from 'styled-components';

export const ResetCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }


  body,html,#root{
    width: 100%;
    height: 100vh;


    font-family: ${({ theme }) => theme.fonts.muli};
    font-size:${({ theme }) => theme.fontSizes.md};
  }

  button,input{
    border: 0;
    outline: none;
    font-family: ${({ theme }) => theme.fonts.muli};
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

`;
