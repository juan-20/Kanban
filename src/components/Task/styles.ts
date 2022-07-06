import styled, {css} from 'styled-components';

interface StyledDivProps {
  isDragging: boolean;
}

export const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px 0 rgba(192,208,230,0.8);
  margin: 20px 10px 20px 10px;
  height: 90px;
  flex-grow: 0;
  flex-shrink: 0;
  cursor: grab;
  >h3{
    font-family: 'Avenir Next';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 21px;
letter-spacing: -0.02em;

color: #212529;
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
