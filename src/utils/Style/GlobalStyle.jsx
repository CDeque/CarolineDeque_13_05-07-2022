import { createGlobalStyle } from "styled-components";

/**
 * @return global style
 */
const Style = createGlobalStyle`

html {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
    }
    
    body {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

   
`;

export default function GlobalStyle() {
    return <Style />;
}
