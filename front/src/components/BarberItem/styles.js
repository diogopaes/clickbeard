import styled from "styled-components"

export const Container = styled.div`
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #F5F5F5;

    > div{
        margin-bottom: 10px;
        span{
            color: #C4C4C4;
            font-size: 12px;
        }
    }

    &:hover{
        background-color: #F5F5F5;
    }

    button{
        background-color: #CF0000;
        font-size: 10px;
        padding: 5px;
        width: 100%;
        color: #fff;
        border-radius: 10px;
        transition: filter 0.2s;
        cursor: pointer;

        &:hover{
            filter: brightness(0.8);
        }
    }
`