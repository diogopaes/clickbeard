import styled from "styled-components";

import { defaultTheme } from "../../styles/theme";

export const Container = styled.div`
    background-color: ${defaultTheme.colors.secondary};
    text-align: center;
    height: 464px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        padding: 0 20px;
    }

    p{
        color: ${defaultTheme.colors.primary};
        margin-top: 20px;
    }
`

export const Loged = styled.div`
    width: 100%;
    max-width: 1080px;
    text-align: left;
`