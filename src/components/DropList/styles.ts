import styled from 'styled-components';
import { darken, lighten } from 'polished';


export const Container = styled.div`    
    border-top: 15px solid ${props => darken(0.1, props.color)};
    border-radius: 5px;
    background: ${props => props.color};
    width: 315px;
    
  margin-bottom: 20px;
    
  margin-right: 30px;
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

