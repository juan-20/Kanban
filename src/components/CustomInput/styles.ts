import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items: center;
`;

export const Input = styled.input`
    border: #333 solid 2px;
    /* padding: 0 1.5rem; */
    border-radius: 0.25rem;
    height: 2rem;
    width: 5rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    & + input {
        margin-top: 1rem;
    }
        
`;

export const Button = styled.div`
        display: flex;
        align-items: center;
        .btn{
        background: #33cc95;
        padding: 0 1.5rem;
        height: 2rem;
        color: #fff;
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
  }
`;

