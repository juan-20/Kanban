import styled from 'styled-components';

export const Container = styled.div`
   padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 550px;
  width: fit-content;
  max-width: 650px;
  height: fit-content;

  >header{
    display: flex;
    align-items: center;
    gap: 15px;
    font-size: 22px;
  }

  section{
    .title{
        display: flex;
        align-items: center;
        gap: 15px;
        font-size: 18px;
    }
        ul {
        display: flex;
        gap: 15px;
        margin: 20px;
        }
        ul li {
        list-style: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        cursor: pointer;
        }

        ul .li-active {
        border: 3px solid #333;
        padding: 8px;
        }



        .CardModal-box-labels {
        display: flex;
        gap: 10px;
        }

        .CardModal-box-labels label {
        border-radius: 20px;
        background-color: gray;
        color: #fff;
        padding: 4px 8px;
        display: flex;
        align-items: center;
        gap: 5px;
        }

        .CardModal-box-labels label svg {
        height: 16px;
        width: 16px;
        cursor: pointer;
        }


  }
`;
