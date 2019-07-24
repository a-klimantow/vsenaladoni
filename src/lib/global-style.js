import { createGlobalStyle } from "styled-components"
import { fonts } from "./fonts/fonts"

export default createGlobalStyle`
  ${fonts};
  
  body {
    margin: 0;
    font-family: sans-serif;
    letter-spacing: 0.01em;
    line-height: 1.3;
    background: #FAFAFA;
  }
`
