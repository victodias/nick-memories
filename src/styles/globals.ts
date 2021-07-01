import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --background-color: #b5f4ff
  }

  * {
    box-sizing: border-box;
    font-family: 'Special Elite', cursive;
    margin: 0;
    padding: 0;
  }

  #root {
    height: 100vh;
  }

  body {
    background-color: var(--background-color);
    height: 100vh;
  }
`
