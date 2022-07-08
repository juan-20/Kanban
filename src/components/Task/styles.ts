import styled, {css} from 'styled-components';

interface StyledDivProps {
  isDragging: boolean;
}

export const Container = styled.div`
  >div{
  background:  ${props => props.theme.colors.background};
  color:  ${props => props.theme.colors.text};
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(192,208,230,0.8);
  margin: 20px 10px 20px 10px;
  height: 90px;
  flex-grow: 0;
  flex-shrink: 0;
  cursor: grab;
  >header{
  >h3{
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;
    letter-spacing: -0.02em;
    
    height: 23px;
    width: 100%;
    text-overflow: ellipsis;
    /* overflow: hidden; */
    white-space: nowrap;
  }
}
  >bottom{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .delete{
    display: none;
  }
  :hover{
    .delete{
      display: inline;
    background: #f05623;
    height: 25px;
    width: 25px;
    border-radius: 20px;
    border: 1px #fff solid;
    position: absolute;
    margin-top: -70px;
    margin-left: -15px;
    cursor: pointer;
    color: #212529;
  }
  }
}

  `;

export const Color = styled.span`
  margin: 0 0 15px 15px;
  width: 50px;
  height: 30px;
  border-radius: 2px;
  display: inline-block;
  background: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: 12px;
`;
