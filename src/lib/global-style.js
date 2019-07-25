import { createGlobalStyle } from "styled-components";
import { fonts } from "./fonts/fonts";

export default createGlobalStyle`
  ${fonts};
  
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    letter-spacing: 0.01em;
    line-height: 1.3;
    background: #FAFAFA;
  }

  * {
    box-sizing: border-box;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  a {
    display: inline-block;
    color: inherit;
    text-decoration: none;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .select {
    display: inline-block;
    padding: 10px 15px;
    border: 2px solid #C2CFE0;
    border-radius: 4px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #90A0B7;
    cursor: pointer;
    &::after {
      content: '';
      display: inline-block;
      width: 8px;
      height: 8px;
      border-left: 1px solid #90A0B7;
      border-bottom: 1px solid #90A0B7;
      margin-left: 10px;
      transform: rotate(-45deg) translateY(-4px);
    }
    &:hover {
      color: #7499F8;
      border-color: #7499F8;
      ::after {
        border-color: #7499F8;
      }
    }
  }
`;
