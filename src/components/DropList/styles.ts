import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    border-radius: 5px;
    background: #5cc4ff;
    border-top: 5px solid ${darken(0.1, '#5cc4ff')};
    &:first-child{
        background: #5cc4ff;
        border-top: 5px solid ${darken(0.1, '#5cc4ff')};
    }   
    &:nth-child(2){
        border-top: 5px solid ${darken(0.1, '#945ad1')};
        background: #945ad1;
    }
    &:nth-child(3){
        border-top: 5px solid ${darken(0.1, '#59d090')};
        background: #59d090;
    }
    &:nth-child(4){
        background: #5cc4ff;
        border-top: 5px solid ${darken(0.1, '#5cc4ff')};
    }
    &:nth-child(5){
        border-top: 5px solid ${darken(0.1, '#945ad1')};
        background: #945ad1;
    }
    &:last-child{
        margin-right: 20px;
    }
    width: 315px;

    .header{
       padding: 15px;
       display: flex;
       justify-content: space-between;
       >h1{
        font-size: 18px;
        font-weight: 25px;
        color: #fff;
        width: 157px;
        text-overflow: ellipsis;
        overflow: hidden;
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 25px;
        /* identical to box height */

        letter-spacing: -0.02em;

        }
        .trash{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 24px;
            width: 24px;
            border-radius: 20px;
            border: 1px #fff solid;
            color: #fff;
            cursor: pointer;
            :hover{
                background: #f05623;
            }
        }
    }

    ul{
       
    }

    button{
        padding: 15px;
        background: none;
        display: flex;
        align-items: center;
        >p{
            margin-left: 18px;
        }
        cursor: pointer
    }
    `;

    export const CreateNewList = styled.div`
    height: 55px;
    min-width: 315px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    margin-top: 20px;
    margin-left: 18px;
    .plus-icon{
    margin: 20px 10px 20px 10px;
    }
    cursor: pointer;
`;

