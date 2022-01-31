import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #F5F5F5;

    border-radius: 10px;
    padding: 20px 30px;

    transition: all 0.2s;

    span{
        color: #C4C4C4;
    }

    &:hover{
        background-color: #F5F5F5;
    }

    button{
        background-color: red;
        padding: 10px;
        color: #fff;
        border-radius: 10px;
        transition: filter 0.2s;
        cursor: pointer;

        &:hover{
            filter: brightness(0.8);
        }
    }
`