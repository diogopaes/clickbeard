import styled from "styled-components";

import { defaultTheme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: -100px;
    padding: 0 20px;
    padding-bottom: 30px;

    h1{
        margin-bottom: 20px;
    }

    form{
        display: flex;
        align-items: center;

        @media screen and (max-width: ${defaultTheme.medias.medium}) {
            flex-direction: column;
            gap: 20px;
        }

        input{
            width: 100%;
            max-width: 256px;
            margin-right: 20px;

            @media screen and (max-width: ${defaultTheme.medias.medium}) {
                margin: 0;
            }
        }

        button{
            @media screen and (max-width: ${defaultTheme.medias.medium}) {
                width: 100%;
            }
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
`