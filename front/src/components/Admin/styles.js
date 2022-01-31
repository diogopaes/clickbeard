import styled from "styled-components";

import { defaultTheme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: -150px;
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
    width: 100%;
    max-width: 1080px;
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.18); 
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.18);

    h2{
        display: flex;
        align-items: center;
    }

    a{
        font-size: 12px;
        padding: 5px 20px;
        margin-left: 20px;
        height: auto;
    }
`

export const Barbers = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px 0;
`