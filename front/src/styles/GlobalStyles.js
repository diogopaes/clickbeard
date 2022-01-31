import { createGlobalStyle } from "styled-components";

import { defaultTheme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, input, button {
        font: 400 16px Roboto, sans-serif;
    }

    button, input{
        border: 0;
    }

    img{
        width: 100%;
        max-width: max-content;
    }

    input, select{
        background-color: #F5F5F5;
        border-radius: 10px;
        height: 74px;
        color: #000000;
        padding: 0 20px;
    }

    .btn{
        background-color: ${defaultTheme.colors.primary};
        color: #fff;
        border-radius: 10px;
        height: 74px;

        font-size: 26px;
        text-transform: uppercase;
        font-weight: 700;
        padding: 0 20px;

        transition: filter 0.2s;

        cursor: pointer;

        text-decoration: none;

        &:hover{
            filter: brightness(0.9);
        }
    }
`
