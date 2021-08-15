import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: calc(12px + .4vw);
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background: rgb(185,9,190);
    background: linear-gradient(16deg, rgba(185,9,190,1) 0%, rgba(154,27,244,1) 46%, rgba(0,212,255,1) 100%) no-repeat;
  }

  a {
    text-decoration: none;
  }

`