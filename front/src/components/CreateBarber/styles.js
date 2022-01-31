import styled from "styled-components";

import { defaultTheme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: -130px;
    padding: 0 20px;
    padding-bottom: 30px;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1080px;
        margin-bottom: 20px;
        padding: 0 25px;
        
        h2{
            color: #fff;

            span{
                color: ${defaultTheme.colors.primary};
            }
        }

        svg{
            color: ${defaultTheme.colors.primary};
        }

        button{
            border: 0;
            background: transparent;
            font-size: 32px;
            cursor: pointer;

            color: #fff;
            display: flex;
            align-items: center;
        }
    }

    h1{
        margin-bottom: 20px;

        display: flex;
        align-items: center;
        
        svg{
            margin-right: 10px;
        }
    }

    form{
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        @media screen and (max-width: ${defaultTheme.medias.medium}) {
            flex-direction: column;
            gap: 20px;
        }

        input, select{
            width: 100%;
            max-width: 356px;
            margin-right: 20px;
            border: 0;

            @media screen and (max-width: ${defaultTheme.medias.medium}) {
                margin: 0;
            }
        }

        button{
            @media screen and (max-width: ${defaultTheme.medias.medium}) {
                width: 100%;
            }
        }

        &.barbers{
            margin-bottom: 0;
        }
    }
    p{
        margin-top: 20px;
        text-align: center;
        a{
            color: #000000;
            font-weight: bold;
            transition: filter 0.2s;

            &:hover{
                filter: brightness(0.9);
            }
        }
    }
`

export const Content = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.18); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.18);
    width: 100%;
    max-width: 1080px;
`