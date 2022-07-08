import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh - 113px;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 1225px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  
  .DropList{
    display: flex;
  @media only screen and (max-width: 880px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    justify-content: center;
  }
  @media only screen and (max-width: 650px) {
    display: grid;
    grid-template-columns: 1fr;
    
    justify-content: center;
  }
  }
  `;

  export const CreateNewList = styled.div`
    background: #cbd1d6;
    height: 55px;
    width: 315px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    .plus-icon{
      margin: 20px 10px 20px 10px;
    }
    cursor: pointer;
  `;

