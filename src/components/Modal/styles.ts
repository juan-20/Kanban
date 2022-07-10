import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.46);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
`;

export const Content = styled.div`
     overflow-y: auto;
      max-height: 95vh;
      background:  ${props => props.theme.colors.background};
      color:  ${props => props.theme.colors.text};
`;