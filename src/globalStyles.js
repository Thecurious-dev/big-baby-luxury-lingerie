import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
        *{
            box-sizing: border-box;
        }
    body{
        /* background-color: blanchedalmond; */
        margin: 0;
        padding: 0;
        color: #000;
        font-size: 14px;
    line-height: 1.7;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    }
    a{
        text-decoration: none;
        color: #000;
        background: transparent;
        cursor: pointer;
    };

    ul{
        padding: 0;
    }

`