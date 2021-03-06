import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh - 113px;
  display: flex;
  flex-direction: row;
  margin-right: 30px;
  margin-left: 30px;

  background: ${props => props.theme.colors.background};
  
  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
  }

  .drop-list{
    gap: 20px;
    display: flex;
   
    @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr ;
  }

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
  
  }
  `;

  export const CreateNewList = styled.div`
    background: #cbd1d6;
    height: 55px;
    min-width: 315px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 5px;
    .plus-icon{
      margin: 20px 10px 20px 10px;
    }
    cursor: pointer;
  `;

