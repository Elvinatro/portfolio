import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    **::before,
    **::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    };
    body{
        width: 100%;
        height: 100%;
    };
    li{
        list-style:none
    };
    a{
       text-decoration: none;
    };

`