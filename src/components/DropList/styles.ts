import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
border-top: 15px solid ${darken(0.1, '#5cc4ff')};
border-radius: 5px;
    background: #5cc4ff;
    width: 315px;
   header{
       padding: 15px;
       >h1{
        font-size: 18px;
        font-weight: 25px;
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

