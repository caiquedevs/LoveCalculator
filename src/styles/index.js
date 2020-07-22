import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      position: relative;
      outline: none;
      font-family: 'Roboto', sans-serif;
      color: #262626;
      text-decoration: none;
      list-style: none;
   }

   body { background: #ffffff; }
`;

export default GlobalStyle;
